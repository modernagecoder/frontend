/**
 * CHART PALETTE
 *
 * The charts were coloured for the retired dark admin skin: near-white legend
 * text, #333 gridlines and purple/teal series. On the paper background the
 * legends were effectively invisible. These are the brand tokens.
 */
const CHART = {
  amber:      '#B45309',
  amberSoft:  '#D97706',
  amberFill:  'rgba(180, 83, 9, 0.10)',
  green:      '#1F8A55',
  greenFill:  'rgba(31, 138, 85, 0.10)',
  muted:      '#6B6259',
  ink:        '#1C1814',
  grid:       'rgba(28, 24, 20, 0.07)',
  surface:    '#FFFFFF',
  font:       "'Inter', system-ui, sans-serif",
  mono:       "'JetBrains Mono', ui-monospace, monospace"
};

/**
 * ANALYTICS COMPONENT
 */

let contactsChart, usersChart, statusChart;

async function loadAnalytics() {
  const mainContent = document.getElementById('mainContent');

  try {
    const [summaryData, monthlyData] = await Promise.all([
      api.getAnalyticsSummary().catch(() => null),
      api.getMonthlyAnalytics().catch(() => null)
    ]);

    // Defensive defaults — older backend deployments returned `monthly` instead
    // of `months`, or returned the summary without trend numbers. Treat any
    // missing field as zero so the page renders rather than blowing up.
    const summary = (summaryData && summaryData.summary) || {};
    summary.contacts = summary.contacts || { total: 0, new: 0, contacted: 0, converted: 0, archived: 0, conversionRate: 0 };
    summary.users    = summary.users    || { total: 0, students: 0, teachers: 0, admins: 0 };
    summary.trends   = summary.trends   || { recentContacts: 0, recentUsers: 0 };

    // The new backend uses `months`; older builds sent `monthly`. Accept both.
    const months = (monthlyData && (monthlyData.months || monthlyData.monthly)) || [];
    
    mainContent.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Analytics</h1>
        <p class="page-subtitle">View trends and insights</p>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Total Contacts</div>
          <div class="stat-value">${summary.contacts.total}</div>
          <div class="stat-trend up">↑ ${summary.trends.recentContacts} in last 7 days</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Users</div>
          <div class="stat-value">${summary.users.total}</div>
          <div class="stat-trend up">↑ ${summary.trends.recentUsers} in last 7 days</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Conversion Rate</div>
          <div class="stat-value">${summary.contacts.conversionRate}%</div>
          <div class="stat-trend">${summary.contacts.converted} converted</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Recent Activity</div>
          <div class="stat-value">${summary.trends.recentContacts + summary.trends.recentUsers}</div>
          <div class="stat-trend">Last 7 days</div>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; margin-bottom: 24px;">
        <div class="table-container">
          <div class="table-header">
            <h2 class="table-title">Contacts Over Time</h2>
          </div>
          <div style="padding: 24px;">
            <canvas id="contactsChart" height="250"></canvas>
          </div>
        </div>
        
        <div class="table-container">
          <div class="table-header">
            <h2 class="table-title">User Growth</h2>
          </div>
          <div style="padding: 24px;">
            <canvas id="usersChart" height="250"></canvas>
          </div>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
        <div class="table-container">
          <div class="table-header">
            <h2 class="table-title">Contact Status Distribution</h2>
          </div>
          <div style="padding: 24px;">
            <canvas id="statusChart" height="200"></canvas>
          </div>
        </div>
        
        <div class="table-container">
          <div class="table-header">
            <h2 class="table-title">Quick Stats</h2>
          </div>
          <div style="padding: 24px;">
            <p style="margin-bottom: 12px;"><strong>Students:</strong> ${summary.users.students}</p>
            <p style="margin-bottom: 12px;"><strong>Teachers:</strong> ${summary.users.teachers}</p>
            <p style="margin-bottom: 12px;"><strong>Admins:</strong> ${summary.users.admins}</p>
            <hr style="border: none; border-top: 1px solid var(--line); margin: 16px 0;">
            <p style="margin-bottom: 12px;"><strong>New Contacts:</strong> ${summary.contacts.new}</p>
            <p style="margin-bottom: 12px;"><strong>Contacted:</strong> ${summary.contacts.contacted}</p>
            <p style="margin-bottom: 12px;"><strong>Converted:</strong> ${summary.contacts.converted}</p>
            <p style="margin-bottom: 12px;"><strong>Archived:</strong> ${summary.contacts.archived}</p>
          </div>
        </div>
      </div>
      
      <div class="table-container">
        <div class="table-header">
          <h2 class="table-title">Monthly Breakdown</h2>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Contacts</th>
              <th>New Users</th>
              <th>Conversions</th>
              <th>Conversion Rate</th>
            </tr>
          </thead>
          <tbody>
            ${months.map(month => {
              const rate = month.contacts.total > 0 
                ? ((month.contacts.converted / month.contacts.total) * 100).toFixed(1)
                : 0;
              return `
                <tr>
                  <td>${month.monthName}</td>
                  <td>${month.contacts.total}</td>
                  <td>${month.users}</td>
                  <td>${month.contacts.converted}</td>
                  <td>${rate}%</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
    
    // Create charts
    createContactsChart(months);
    createUsersChart(months);
    createStatusChart(summary.contacts);
    
  } catch (error) {
    throw error;
  }
}

function createContactsChart(months) {
  const ctx = document.getElementById('contactsChart');
  if (!ctx) return;
  
  if (contactsChart) contactsChart.destroy();
  
  contactsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months.map(m => m.month),
      datasets: [{
        label: 'Total Contacts',
        data: months.map(m => m.contacts.total),
        borderColor: CHART.amber,
        backgroundColor: CHART.amberFill,
        tension: 0.4,
        fill: true
      }, {
        label: 'Conversions',
        data: months.map(m => m.contacts.converted),
        borderColor: CHART.green,
        backgroundColor: CHART.greenFill,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: CHART.ink, font: { family: CHART.font } }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: CHART.muted, font: { family: CHART.mono, size: 11 } },
          grid: { color: CHART.grid }
        },
        x: {
          ticks: { color: CHART.muted, font: { family: CHART.mono, size: 11 } },
          grid: { color: CHART.grid }
        }
      }
    }
  });
}

function createUsersChart(months) {
  const ctx = document.getElementById('usersChart');
  if (!ctx) return;
  
  if (usersChart) usersChart.destroy();
  
  usersChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months.map(m => m.month),
      datasets: [{
        label: 'New Users',
        data: months.map(m => m.users),
        backgroundColor: CHART.amberSoft,
        borderColor: CHART.amber,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: CHART.ink, font: { family: CHART.font } }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: CHART.muted, font: { family: CHART.mono, size: 11 } },
          grid: { color: CHART.grid }
        },
        x: {
          ticks: { color: CHART.muted, font: { family: CHART.mono, size: 11 } },
          grid: { color: CHART.grid }
        }
      }
    }
  });
}

function createStatusChart(contacts) {
  const ctx = document.getElementById('statusChart');
  if (!ctx) return;
  
  if (statusChart) statusChart.destroy();
  
  statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['New', 'Contacted', 'Converted', 'Archived'],
      datasets: [{
        data: [contacts.new, contacts.contacted, contacts.converted, contacts.archived],
        backgroundColor: [CHART.amber, CHART.amberSoft, CHART.green, CHART.muted],
        borderWidth: 2,
        borderColor: CHART.surface
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: CHART.ink, padding: 15, font: { family: CHART.font } }
        }
      }
    }
  });
}

window.loadAnalytics = loadAnalytics;
