/**
 * TEAM
 *
 * Creates and manages sub-admin logins for counsellors who need to see and
 * contact leads.
 *
 * A sub-admin can do everything the owner can except two things: delete
 * records, and manage staff accounts. Both are refused by the server, so this
 * screen only decides what is worth showing - it is not what enforces the rule.
 *
 * Admin-only. main.js hides the nav entry for sub-admins and the API returns
 * 403 to them regardless.
 */

const TeamComponent = {

  staff: [],

  render() {
    return `
      <div class="page-header">
        <div>
          <h1 class="page-title">Team</h1>
          <p class="page-subtitle">Logins for staff who follow up with parents</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" id="addStaffBtn">Add sub-admin</button>
        </div>
      </div>

      <div class="permission-note" style="margin-bottom:20px">
        A sub-admin can see every lead, update its status, add notes and contact the parent.
        They cannot delete records and cannot add or edit staff accounts.
      </div>

      <div id="teamBody">
        <div class="loading-spinner"><div class="spinner"></div><p>Loading</p></div>
      </div>
    `;
  },

  async init() {
    const addBtn = document.getElementById('addStaffBtn');
    if (addBtn) addBtn.addEventListener('click', () => this.showCreateModal());

    // Bound once here rather than after every load(). load() only replaces the
    // inner markup, so re-binding each time would stack handlers and fire each
    // action twice on the second refresh.
    this.bindCardActions();

    await this.load();
  },

  async load() {
    const body = document.getElementById('teamBody');
    if (!body) return;

    try {
      const data = await api.getTeam();
      this.staff = data.staff || [];
      body.innerHTML = this.renderList();
    } catch (error) {
      body.innerHTML = `<div class="error-message">Could not load staff accounts: ${escapeHtml(error.message)}</div>`;
    }
  },

  renderList() {
    if (!this.staff.length) {
      return `
        <div class="table-container">
          <div class="empty-cell">
            <div class="empty-state">
              <strong>No staff accounts yet</strong>
              <span>Add a sub-admin to let someone follow up on leads without giving them full access.</span>
            </div>
          </div>
        </div>
      `;
    }

    return '<div class="team-grid">' + this.staff.map(member => {
      const name = [member.firstName, member.lastName].filter(Boolean).join(' ') || member.username;
      const isAdmin = member.role === 'admin';

      return `
        <div class="team-card${member.isActive ? '' : ' is-inactive'}">
          <div class="team-top">
            <div style="min-width:0">
              <div class="team-name">${escapeHtml(name)}${member.isSelf ? ' (you)' : ''}</div>
              <div class="team-email">${escapeHtml(member.email)}</div>
            </div>
            <span class="badge badge-${escapeHtml(member.role)}">${isAdmin ? 'Admin' : 'Sub-admin'}</span>
          </div>

          <div class="team-meta">
            ${member.isActive ? 'Active' : 'Deactivated'}
            &middot; Last signed in ${member.lastLogin ? escapeHtml(formatDateShort(member.lastLogin)) : 'never'}
          </div>

          ${member.isSelf || isAdmin ? '' : `
            <div class="team-actions">
              <button class="btn btn-secondary btn-sm" data-action="password" data-id="${escapeHtml(member.id)}">Set password</button>
              <button class="btn btn-secondary btn-sm" data-action="toggle" data-id="${escapeHtml(member.id)}" data-active="${member.isActive}">
                ${member.isActive ? 'Deactivate' : 'Reactivate'}
              </button>
              <button class="btn btn-danger btn-sm" data-action="remove" data-id="${escapeHtml(member.id)}" data-name="${escapeHtml(name)}">Remove</button>
            </div>
          `}
        </div>
      `;
    }).join('') + '</div>';
  },

  bindCardActions() {
    const body = document.getElementById('teamBody');
    if (!body) return;

    body.addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;

      const id = btn.dataset.id;

      if (btn.dataset.action === 'toggle') {
        const makeActive = btn.dataset.active !== 'true';
        await this.update(id, { isActive: makeActive },
          makeActive ? 'Account reactivated' : 'Account deactivated');
      }

      if (btn.dataset.action === 'password') this.showPasswordModal(id);

      if (btn.dataset.action === 'remove') this.showRemoveModal(id, btn.dataset.name);
    });
  },

  showCreateModal() {
    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">Add sub-admin</h2>
        <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <div class="detail-grid">
          <div class="form-group">
            <label for="staffFirstName">First name</label>
            <input type="text" id="staffFirstName" class="form-control" placeholder="Priya">
          </div>
          <div class="form-group">
            <label for="staffLastName">Last name</label>
            <input type="text" id="staffLastName" class="form-control" placeholder="Sharma">
          </div>
          <div class="form-group full-width">
            <label for="staffEmail">Email</label>
            <input type="email" id="staffEmail" class="form-control" placeholder="priya@modernagecoders.com" autocomplete="off">
          </div>
          <div class="form-group full-width">
            <label for="staffPassword">Password</label>
            <input type="password" id="staffPassword" class="form-control" placeholder="At least 8 characters" autocomplete="new-password">
            <span class="form-hint">Share this with them directly. They can be given a new one at any time.</span>
          </div>
        </div>
        <div id="staffFormError" class="error-message" style="display:none;margin-top:14px"></div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" id="staffSaveBtn">Create account</button>
      </div>
    `);

    document.getElementById('staffSaveBtn').addEventListener('click', async () => {
      const email = document.getElementById('staffEmail').value.trim();
      const password = document.getElementById('staffPassword').value;
      const errorEl = document.getElementById('staffFormError');

      const fail = (msg) => {
        errorEl.textContent = msg;
        errorEl.style.display = 'block';
      };

      if (!email) return fail('Enter an email address.');
      if (password.length < 8) return fail('Use a password of at least 8 characters.');

      const btn = document.getElementById('staffSaveBtn');
      btn.disabled = true;
      btn.textContent = 'Creating';

      try {
        await api.createTeamMember({
          email,
          password,
          firstName: document.getElementById('staffFirstName').value.trim(),
          lastName: document.getElementById('staffLastName').value.trim()
        });

        closeModal();
        showToast('Sub-admin created', 'success');
        await this.load();
      } catch (error) {
        btn.disabled = false;
        btn.textContent = 'Create account';
        fail(error.message);
      }
    });
  },

  showPasswordModal(id) {
    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">Set a new password</h2>
        <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="newStaffPassword">New password</label>
          <input type="password" id="newStaffPassword" class="form-control" placeholder="At least 8 characters" autocomplete="new-password">
          <span class="form-hint">They will need this the next time they sign in.</span>
        </div>
        <div id="pwError" class="error-message" style="display:none;margin-top:14px"></div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" id="pwSaveBtn">Set password</button>
      </div>
    `);

    document.getElementById('pwSaveBtn').addEventListener('click', async () => {
      const password = document.getElementById('newStaffPassword').value;
      const errorEl = document.getElementById('pwError');

      if (password.length < 8) {
        errorEl.textContent = 'Use a password of at least 8 characters.';
        errorEl.style.display = 'block';
        return;
      }

      closeModal();
      await this.update(id, { password }, 'Password changed');
    });
  },

  showRemoveModal(id, name) {
    showModal(`
      <div class="modal-header">
        <h2 class="modal-title">Remove ${escapeHtml(name)}?</h2>
        <button class="modal-close" onclick="closeModal()" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <p>They lose access immediately. Leads they were handling stay exactly as they are.</p>
        <p style="color:var(--muted);font-size:13px">To pause access instead and keep the account, deactivate it.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-danger" id="removeConfirmBtn">Remove account</button>
      </div>
    `);

    document.getElementById('removeConfirmBtn').addEventListener('click', async () => {
      try {
        await api.deleteTeamMember(id);
        closeModal();
        showToast('Account removed', 'success');
        await this.load();
      } catch (error) {
        closeModal();
        showToast(error.message, 'error');
      }
    });
  },

  async update(id, updates, successMessage) {
    try {
      await api.updateTeamMember(id, updates);
      showToast(successMessage, 'success');
      await this.load();
    } catch (error) {
      showToast(error.message, 'error');
    }
  }
};

window.TeamComponent = TeamComponent;
