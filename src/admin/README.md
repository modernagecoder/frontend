# Admin Dashboard - Modern Age Coders

A comprehensive admin dashboard for managing student inquiries, user accounts, and analytics.

## Features

✅ **Completed Features:**
- 🔐 Secure admin authentication with JWT
- 📧 Contact form management (view, edit, delete, bulk operations)
- 👥 User account management (view, edit, delete, bulk operations)
- 📊 Analytics dashboard with summary statistics
- 📈 Monthly trend analysis
- 📥 CSV data export
- 📝 Audit logging for all admin actions
- 🎨 Modern, responsive UI with dark theme
- 🔍 Search and filtering capabilities
- 📄 Pagination for large datasets

## Setup Instructions

### 1. Install Dependencies

Backend dependencies are already installed. If needed:
```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create or update `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/modernagecoders
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
ADMIN_JWT_EXPIRY=8h
NODE_ENV=development
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

### 4. Create Admin User

Run the seed script to create an initial admin user:
```bash
node backend/scripts/seedAdmin.js
```

**Default Admin Credentials:**
- Email: `admin@modernagecoders.com`
- Password: `Admin@123`

⚠️ **IMPORTANT:** Change the password after first login!

### 5. Start the Backend Server

```bash
cd backend
npm start
```

The server will start on `http://localhost:5000`

### 6. Access the Admin Dashboard

Open your browser and navigate to:
```
http://localhost:5000/admin/login.html
```

Or if using a local file server:
```
http://127.0.0.1:5500/admin/login.html
```

## Project Structure

```
admin/
├── index.html              # Main dashboard page
├── login.html              # Login page
├── css/
│   ├── main.css           # Core styles
│   ├── components.css     # Component styles
│   └── responsive.css     # Responsive styles
├── js/
│   ├── api.js             # API client
│   ├── auth.js            # Authentication handler
│   ├── main.js            # Main dashboard controller
│   ├── components/
│   │   ├── contacts.js    # Contacts management
│   │   ├── users.js       # Users management
│   │   ├── analytics.js   # Analytics dashboard
│   │   └── auditLogs.js   # Audit logs viewer
│   └── utils/
│       ├── validation.js  # Validation utilities
│       └── formatting.js  # Formatting utilities
└── README.md              # This file

backend/
├── models/
│   ├── User.js            # User model (enhanced with admin role)
│   ├── Contact.js         # Contact model (enhanced with admin fields)
│   └── AuditLog.js        # Audit log model
├── routes/
│   ├── admin/
│   │   ├── auth.js        # Admin authentication
│   │   ├── contacts.js    # Contact management
│   │   ├── users.js       # User management
│   │   ├── analytics.js   # Analytics endpoints
│   │   └── auditLogs.js   # Audit log endpoints
│   ├── auth.js            # Regular user auth
│   └── contact.js         # Public contact form
├── middleware/
│   ├── adminAuth.js       # Admin authentication middleware
│   └── auditLogger.js     # Audit logging middleware
├── scripts/
│   └── seedAdmin.js       # Admin user seeding script
└── server.js              # Main server file
```

## API Endpoints

### Authentication
- `POST /api/admin/auth/login` - Admin login
- `GET /api/admin/auth/verify` - Verify token
- `POST /api/admin/auth/logout` - Logout

### Contacts
- `GET /api/admin/contacts` - Get all contacts (with filters)
- `GET /api/admin/contacts/:id` - Get single contact
- `PUT /api/admin/contacts/:id` - Update contact
- `DELETE /api/admin/contacts/:id` - Delete contact
- `POST /api/admin/contacts/bulk-delete` - Bulk delete
- `POST /api/admin/contacts/bulk-update` - Bulk update

### Users
- `GET /api/admin/users` - Get all users (with filters)
- `GET /api/admin/users/:id` - Get single user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `POST /api/admin/users/bulk-delete` - Bulk delete

### Analytics
- `GET /api/admin/analytics/summary` - Get summary statistics
- `GET /api/admin/analytics/monthly` - Get monthly breakdown
- `GET /api/admin/analytics/export` - Export data (CSV)

### Audit Logs
- `GET /api/admin/audit-logs` - Get audit logs (with filters)

## Usage Guide

### Dashboard
- View summary statistics
- Quick access to recent activity
- Overview of contacts and users

### Contacts Management
1. View all contact form submissions
2. Filter by status (New, Contacted, Converted, Archived)
3. Search by name, email, or phone
4. Update contact status and add notes
5. Delete individual or multiple contacts
6. Export contacts to CSV

### Users Management
1. View all registered users
2. Filter by role (Student, Teacher, Admin)
3. Search by username, email, or name
4. Edit user information
5. Delete users (with safety checks)
6. Export users to CSV

### Analytics
1. View overall statistics
2. Track monthly trends
3. Monitor conversion rates
4. Analyze user growth

### Audit Logs
1. View all administrative actions
2. Filter by admin, action type, or date
3. Track changes and deletions
4. Maintain accountability

## Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based access control
- ✅ Rate limiting on login attempts
- ✅ Audit logging for all actions
- ✅ CORS configuration
- ✅ Input validation and sanitization
- ✅ Protection against admin self-deletion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Cannot connect to backend
- Ensure MongoDB is running
- Check if backend server is started
- Verify PORT in .env matches the URL

### Login fails
- Verify admin user was created (run seedAdmin.js)
- Check credentials are correct
- Check browser console for errors

### Data not loading
- Check browser console for API errors
- Verify JWT token is valid
- Check backend logs for errors

## Future Enhancements

The following features are planned but not yet implemented:
- Edit modals for contacts and users
- Bulk status updates with UI
- Advanced filtering (date ranges, multiple criteria)
- Real-time updates with WebSockets
- Chart visualizations with Chart.js
- Email notifications
- Password reset functionality
- Two-factor authentication
- Advanced permissions system

## Support

For issues or questions, please contact the development team.

## License

© 2025 Modern Age Coders. All rights reserved.
