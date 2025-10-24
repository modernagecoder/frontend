/**
 * ANALYTICS COMPONENT
 */

let contactsChart, usersChart, statusChart;

async function loadAnalytics() {
  const mainContent = document.getElementById('mainContent');
  
  try {
    const [summaryData, monthlyData] = await Promise.all([
      api.getAnalyticsSummary(),
      api.getMonthlyAnalytics()
    ]);
    
    const summary = summaryData.summary;
    const months = monthlyData.months;
    
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
            <hr style="border: none; border-top: 1px solid var(--border); margin: 16px 0;">
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
        borderColor: '#8A2BE2',
        backgroundColor: 'rgba(138, 43, 226, 0.1)',
        tension: 0.4,
        fill: true
      }, {
        label: 'Conversions',
        data: months.map(m => m.contacts.converted),
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#E2E8F0' }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#94A3B8' },
          grid: { color: '#333' }
        },
        x: {
          ticks: { color: '#94A3B8' },
          grid: { color: '#333' }
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
        backgroundColor: '#4ecdc4',
        borderColor: '#4ecdc4',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#E2E8F0' }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#94A3B8' },
          grid: { color: '#333' }
        },
        x: {
          ticks: { color: '#94A3B8' },
          grid: { color: '#333' }
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
        backgroundColor: ['#3B82F6', '#F59E0B', '#10B981', '#6B7280'],
        borderWidth: 2,
        borderColor: '#1a1a1a'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#E2E8F0', padding: 15 }
        }
      }
    }
  });
}

window.loadAnalytics = loadAnalytics;
