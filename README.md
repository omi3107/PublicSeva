# PublicSeva 🌿

> **Empower Citizens. Enable Authorities. Clean Communities.**

PublicSeva is a community-driven waste management and civic issue reporting platform that bridges the gap between citizens and municipal authorities. Citizens report waste hotspots with photos and precise GPS locations, while authorities monitor, prioritize, and resolve issues efficiently through a centralized dashboard.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-v18%2B-green)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-19.2.3-61dafb)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.1.1-green)](https://www.mongodb.com/)

---

## 📋 Table of Contents

- [Features](#features)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### For Citizens 👥

- **Easy Issue Reporting**: Report waste/cleanliness issues with a title, detailed description, and photos
- **Live Location Detection**: Automatic GPS-based location capture with interactive map marker dragging
- **Issue Tracking**: Track the status of reported issues in real-time (UNSOLVED → IN_PROGRESS → RESOLVED)
- **Community Engagement**: Vote on issues to highlight priority problems, add comments, and view other reports
- **Dark Mode**: Comfortable viewing experience with built-in dark mode toggle
- **User Profile**: Manage personal information and view your reporting history

### For Authorities 🏛️

- **Centralized Dashboard**: View all reported issues in one place with filtering and search
- **Priority Management**: AI-powered severity scoring to prioritize critical issues
- **Real-time Updates**: Track issue status changes and receive notifications
- **Geographic Visualization**: Map-based view of all issues for area-wise monitoring
- **Admin Controls**: Update issue status, add notes, and mark resolutions

### Platform-Wide 🌍

- **Geolocation Indexing**: Optimized MongoDB geospatial queries for location-based searches
- **JWT Authentication**: Secure token-based authentication for all protected routes
- **Role-Based Access Control**: Separate citizen and admin dashboards with permission layers
- **Image Hosting**: Cloudinary integration for reliable image storage and delivery
- **Responsive Design**: Mobile-first design using Tailwind CSS for all screen sizes

---

## 🎯 Project Overview

### Vision

PublicSeva aims to democratize civic problem-solving by leveraging technology to:
1. **Empower citizens** to report issues without bureaucratic delays
2. **Enable authorities** with real-time data for efficient resource allocation
3. **Create transparency** through visible tracking of issue resolution
4. **Build community** through collective engagement and accountability

### Core Use Cases

1. **Report Garbage Accumulation**: Citizens spot overflowing bins → Report with photo + location → Admin resolves
2. **Community Voting**: Multiple citizens report same area → Votes highlight priority → Faster resolution
3. **Status Transparency**: Citizens track issue from report → in-progress → resolved
4. **Geographic Clustering**: Authorities identify hotspot areas needing urgent attention

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** - Modern UI library with hooks and concurrent features
- **React Router 6.22.3** - Client-side routing with protected routes
- **Tailwind CSS 3.4.14** - Utility-first CSS for responsive design
- **Lucide React 0.562.0** - Beautiful, consistent icon library
- **MapLibre GL 5.15.0** - Open-source map visualization
- **JWT Decode 4.0.0** - Secure token parsing for authentication

### Backend
- **Node.js + Express 5.2.1** - Fast, scalable API server
- **MongoDB 9.1.1** - NoSQL database with geospatial indexing
- **Mongoose** - ODM for MongoDB with schema validation
- **Passport.js 0.7.0** - Authentication middleware (Local strategy)
- **bcrypt 6.0.0** - Secure password hashing
- **Cloudinary 1.41.3** - Cloud image storage and CDN
- **Multer 2.0.2** - File upload middleware
- **JWT (jsonwebtoken 9.0.3)** - Secure token generation

### Development Tools
- **Nodemon 3.1.11** - Auto-restart during development
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.23** - Browser vendor prefixes

---

## 📂 Project Structure

```
PublicSeva/
├── frontend/                      # React client application
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── AuthForm.jsx     # Login/signup form component
│   │   │   ├── CitizenNavbar.jsx# Navigation for citizen users
│   │   │   ├── CitizenLeftPanel.jsx# Sidebar component
│   │   │   ├── ProtectedRoute.jsx# Route protection wrapper
│   │   │   ├── ReportButton.jsx # Action button for reporting
│   │   │   ├── StatusBadge.jsx  # Issue status indicator
│   │   │   ├── VoteButton.jsx   # Voting mechanism component
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   └── ReportCard.jsx   # Card display for issues
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx  # Public landing page with features
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Signup.jsx       # User registration
│   │   │   └── citizen/
│   │   │       ├── Home.jsx     # Citizen dashboard
│   │   │       ├── ReportIssue.jsx# Issue reporting form
│   │   │       ├── CheckStatus.jsx# Status tracking page
│   │   │       ├── MapView.jsx  # Geographic map view
│   │   │       └── Profile.jsx  # User profile page
│   │   ├── services/            # API integration services
│   │   ├── utils/               # Helper utilities
│   │   ├── App.js               # Main app router
│   │   └── index.js             # React entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                       # Node.js API server
│   ├── config/
│   │   ├── db.js                # MongoDB connection
│   │   └── passport.js          # Passport.js configuration
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── issueController.js   # Issue CRUD operations
│   │   ├── adminController.js   # Admin-specific logic
│   │   └── userController.js    # User profile management
│   ├── models/
│   │   ├── User.js              # User schema with geolocation
│   │   └── Issue.js             # Issue schema with AI fields
│   ├── routes/
│   │   ├── authRoutes.js        # /api/auth endpoints
│   │   ├── userRoutes.js        # /api/users endpoints
│   │   ├── issueRoutes.js       # /api/issues endpoints
│   │   ├── adminRoutes.js       # /api/admin endpoints
│   │   ├── roleTestRoutes.js    # Testing role-based access
│   │   └── uploadTest.js        # File upload testing
│   ├── middleware/              # Custom middleware (auth, logging)
│   ├── services/                # Business logic services
│   ├── utils/                   # Helper utilities
│   ├── server.js                # Express app setup & routes
│   ├── seedIssues.js            # Database seeding script
│   ├── package.json
│   └── .env.example
│
└── README.md
```

### Data Flow Architecture

```
User (Frontend)
    ↓
React Components + Router
    ↓ (API Calls via Fetch/Axios)
Express Backend
    ↓
Middleware (Auth, Validation)
    ↓
Controllers (Business Logic)
    ↓
MongoDB (Persistence)
    ↓ (+ Cloudinary for Images)
Response back to Frontend
    ↓
UI Updates
```

---

## 📸 Screenshots

A Pinterest-style gallery showcasing PublicSeva's intuitive interface and features:

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>🏠 Landing Page</h4>
      <p>Modern hero section with feature highlights and role-based call-to-action buttons. Includes dark mode toggle.</p>
      <details>
        <summary><b>View Details</b></summary>
        • Hero heading: "Report Waste. Track Action. Clean Communities."<br>
        • Navigation with Login/Sign Up buttons<br>
        • Feature cards: Image Reporting, Live Location, Status Tracking, Eco Impact<br>
        • Who is it for section (Citizens & Authorities)<br>
        • Dark mode toggle in navbar
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/2d7d4d/ffffff?text=Landing+Page" alt="Landing Page Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
    <td width="50%" valign="top">
      <h4>🔐 Authentication Flow</h4>
      <p>Secure login and comprehensive signup with location-based registration and role selection.</p>
      <details>
        <summary><b>View Details</b></summary>
        <b>Login Page:</b><br>
        • Email and password fields<br>
        • Sign Up redirect link<br>
        • Error validation<br>
        <br>
        <b>Signup Page:</b><br>
        • Full name, email, phone fields<br>
        • Address and location picker<br>
        • State and district dropdowns<br>
        • Role selection (Citizen/Admin)<br>
        • Password strength validation
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/1e40af/ffffff?text=Auth+Pages" alt="Authentication Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>📋 Citizen Dashboard</h4>
      <p>Issue feed displaying reported problems with engagement metrics and status tracking.</p>
      <details>
        <summary><b>View Details</b></summary>
        • Navbar with navigation links (Home, Check Status, Map, Profile)<br>
        • Welcome section with user stats<br>
        • Issue feed with cards showing:<br>
        &nbsp;&nbsp;- Issue title and description<br>
        &nbsp;&nbsp;- Reporter avatar and name<br>
        &nbsp;&nbsp;- Issue image thumbnail<br>
        &nbsp;&nbsp;- Location badge with address<br>
        &nbsp;&nbsp;- Vote count and comment count<br>
        &nbsp;&nbsp;- Status badge (UNSOLVED/IN_PROGRESS/RESOLVED)<br>
        &nbsp;&nbsp;- Time posted<br>
        • Infinite scroll or pagination
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/7c3aed/ffffff?text=Citizen+Home" alt="Citizen Dashboard Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
    <td width="50%" valign="top">
      <h4>📸 Report Issue Form</h4>
      <p>Intuitive multi-step form for submitting waste reports with image and location capture.</p>
      <details>
        <summary><b>View Details</b></summary>
        • Image upload area with drag & drop support<br>
        • Image preview display<br>
        • Issue title text input<br>
        • Detailed description textarea<br>
        • Interactive map with draggable marker<br>
        • Real-time coordinates display<br>
        • Address optional text field<br>
        • Submit button with loading state<br>
        • Success/error toast notifications
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/dc2626/ffffff?text=Report+Issue" alt="Report Issue Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>🗺️ Interactive Map View</h4>
      <p>MapLibre GL powered geospatial visualization for pinpointing exact issue locations.</p>
      <details>
        <summary><b>View Details</b></summary>
        • Full-width interactive map<br>
        • User's geolocation with blue marker<br>
        • Draggable marker for location adjustment<br>
        • Map controls (zoom, pan, fullscreen)<br>
        • Real-time latitude/longitude display<br>
        • Multiple markers for reported issues<br>
        • Click markers to view issue preview<br>
        • Map attribution
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/0891b2/ffffff?text=Map+View" alt="Map View Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
    <td width="50%" valign="top">
      <h4>⏱️ Status Tracking Page</h4>
      <p>Real-time issue status monitoring and community engagement features.</p>
      <details>
        <summary><b>View Details</b></summary>
        • Filter reported issues by status<br>
        • Search by location or keywords<br>
        • Sort by newest, most voted, most commented<br>
        • Timeline view showing status progression<br>
        • Issue details card with full description<br>
        • Vote and comment sections<br>
        • Admin response notes<br>
        • Estimated resolution date<br>
        • Share issue functionality
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/06b6d4/ffffff?text=Status+Tracking" alt="Status Tracking Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>👤 User Profile</h4>
      <p>Personalized user profile with reporting history and account management.</p>
      <details>
        <summary><b>View Details</b></summary>
        • User avatar and basic info<br>
        • Profile statistics (issues reported, votes, comments)<br>
        • Reported issues history<br>
        • Edit profile option<br>
        • Location and contact info<br>
        • Account settings<br>
        • Privacy preferences<br>
        • Logout button
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/ec4899/ffffff?text=User+Profile" alt="User Profile Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
    <td width="50%" valign="top">
      <h4>🏛️ Admin Dashboard</h4>
      <p>Comprehensive authority panel for monitoring and managing all reported issues.</p>
      <details>
        <summary><b>View Details</b></summary>
        • Centralized issue management hub<br>
        • Map view with all issue markers<br>
        • Filterable issue list with:<br>
        &nbsp;&nbsp;- Priority sorting (AI severity)<br>
        &nbsp;&nbsp;- Status filtering<br>
        &nbsp;&nbsp;- Location-based grouping<br>
        &nbsp;&nbsp;- Date range filters<br>
        • Bulk actions for status updates<br>
        • Add admin notes and updates<br>
        • Assign to cleanup teams<br>
        • Analytics and reports<br>
        • Export data option
      </details>
      <br><br>
      <img src="https://via.placeholder.com/400x500/1f2937/ffffff?text=Admin+Dashboard" alt="Admin Dashboard Screenshot" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    </td>
  </tr>
</table>

### Key UI Features Across Screens

| Feature | Description | Implemented |
|---------|-------------|-------------|
| **Dark Mode** | Toggle between light and dark themes | ✅ |
| **Responsive Design** | Mobile, tablet, and desktop optimized | ✅ |
| **Geolocation** | Automatic and manual location selection | ✅ |
| **Image Upload** | Drag & drop with preview | ✅ |
| **Interactive Map** | Draggable markers and zoom controls | ✅ |
| **Status Tracking** | Real-time issue status updates | ✅ |
| **Voting System** | Community engagement with votes | ✅ |
| **Comments** | Collaborative issue discussion | ✅ |
| **Role-Based UI** | Separate citizen and admin views | ✅ |

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **MongoDB** (local or Atlas cloud)
- **Cloudinary Account** (for image hosting)
- **MapTiler Account** (for map tiles)

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your environment variables:
# MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/publicseva
# PORT=5000
# JWT_SECRET=your_secret_key
# CLOUDINARY_NAME=your_cloudinary_name
# CLOUDINARY_API_KEY=your_api_key
# CLOUDINARY_API_SECRET=your_api_secret

# Start development server
npm run dev

# Or production:
npm start
```

**Backend runs on:** `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
echo "REACT_APP_MAPTILER_KEY=your_maptiler_key" >> .env

# Start development server
npm start

# Or build for production:
npm run build
```

**Frontend runs on:** `http://localhost:3000`

### Database Seeding (Optional)

To populate sample issues:

```bash
cd backend
node seedIssues.js
```

This creates 8 sample issues across Mumbai, Navi Mumbai, Thane, and other Maharashtra regions.

---

## 📖 Usage

### For Citizens

1. **Sign Up** on the landing page with your details and location
2. **Navigate to Report Issue** from citizen dashboard
3. **Upload a photo** of the waste/problem
4. **Fill in the form**:
   - Title (e.g., "Garbage piling near bus stop")
   - Detailed description
   - Drag map marker to exact location
   - Optional address
5. **Submit** to send to authorities
6. **Track Status** from "Check Status" page
7. **Engage** by voting and commenting on other issues

### For Administrators

1. **Log in** with admin credentials
2. **Access Admin Dashboard** (at `/admin/dashboard`)
3. **View all reported issues** on map and in list
4. **Filter by**:
   - Status (UNSOLVED, IN_PROGRESS, RESOLVED)
   - Priority/Severity
   - Location/District
5. **Update issue status** as work progresses
6. **Add comments** with resolution details
7. **Generate reports** for performance tracking

---

## 🔌 API Documentation

### Authentication Endpoints

```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "password": "SecurePass123",
  "address": "123 Main St",
  "state": "Maharashtra",
  "district": "Mumbai",
  "role": "citizen",
  "location": {
    "type": "Point",
    "coordinates": [72.8731, 19.1155]
  }
}

Response: { token, user }
```

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}

Response: { token, user }
```

### Issue Endpoints

```http
GET /api/issues
Authorization: Bearer token
# Returns all issues with creator info, sorted by newest first

GET /api/issues/:id
# Returns single issue with full details and comments

POST /api/issues
Authorization: Bearer token
Content-Type: multipart/form-data

{
  "title": "Garbage piling near bus stop",
  "description": "Large pile causing foul smell...",
  "address": "Andheri East, Mumbai",
  "lat": "19.1155",
  "lng": "72.8731",
  "image": <file>
}

Response: { success, issue }
```

```http
POST /api/issues/:id/like
Authorization: Bearer token
# Toggles like on an issue

POST /api/issues/:id/comment
Authorization: Bearer token
Content-Type: application/json

{
  "text": "This needs urgent attention!"
}

Response: { success, comment }
```

### Admin Endpoints

```http
PATCH /api/admin/issues/:id/status
Authorization: Bearer token (admin only)
Content-Type: application/json

{
  "status": "IN_PROGRESS",
  "notes": "Cleanup crew assigned"
}

Response: { success, issue }
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/publicseva

# JWT
JWT_SECRET=your_super_secret_jwt_key_min_32_chars

# Cloudinary (Image Hosting)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Passport
PASSPORT_STRATEGY=local
```

### Frontend (.env)

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api

# MapTiler (Map Provider)
REACT_APP_MAPTILER_KEY=your_maptiler_key
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit changes**: `git commit -m 'Add AmazingFeature'`
4. **Push to branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and naming conventions
- Write meaningful commit messages
- Test before submitting PRs
- Update documentation for new features
- No console.log in production code

---

## 📋 Roadmap

- [ ] **AI Severity Analysis**: Automatically classify issue severity using image analysis
- [ ] **SMS/Push Notifications**: Alert citizens on status updates
- [ ] **Admin Analytics Dashboard**: Visualize resolution rates, hotspot trends
- [ ] **Gamification**: Badges and leaderboards for active reporters
- [ ] **Multi-language Support**: Regional language options
- [ ] **Offline Reporting**: Queue reports when offline, sync when online
- [ ] **Integration with Municipal Systems**: Direct API connections to municipal databases

---

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support & Feedback

- **Report Issues**: Open a GitHub issue with detailed description
- **Suggest Features**: Create an issue with [FEATURE] prefix
- **Discuss**: Use GitHub Discussions for general questions

---

## 👥 Team

Originally forked from [Jerin055/PublicSeva](https://github.com/Jerin055/PublicSeva)

Maintained by: [omi3107](https://github.com/omi3107)

---

## 🌟 Acknowledgments

- **MapLibre GL** for open-source mapping
- **Tailwind CSS** for responsive design utilities
- **Lucide React** for beautiful icons
- **MongoDB** for powerful geospatial queries
- **Cloudinary** for reliable image hosting

---

<div align="center">

**Made with ❤️ to build cleaner, smarter communities**

[⬆ Back to top](#publicseva-)

</div>
