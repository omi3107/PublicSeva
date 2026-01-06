# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## EnvironmentTech : Community Waste Reporting Platform - Map Feature

**Project Name:** EnvironmentTech - Community Waste Reporting Platform  
**Feature:** Interactive WasteHotspot Map with iPhone-Style Photo Clustering  
**Version:** 1.0 MVP  
**Date:** January 04, 2026  
**Owner:** Development Team  

---

## 1. PROBLEM STATEMENT:

EnvironmentTech - Community Waste Reporting:
Build a platform to report waste hotspots with images and location tracking. Authorities can monitor open vs. resolved reports via a dashboard.

---

## 2. FEATURE SUMMARY:

Maps page:
The Map Feature is the visual centerpiece of the Community Waste Reporting Platform. It displays waste hotspots as clustered markers on an interactive map, grouped by geographic proximity (iPhone Photos "Places" album style). Citizens can view reported posts in a side bar, filter them by Report ID, severity, locations and Vote/Report particular posts. The side bar is visible on the left when citizens will click a particular waste hotspot on the map. The side bar will show the clicked waste hotspot post and nearby waste hotspot posts within a particular cluster radius. The feature will be developed in 4 small, iterative phases using mock data initially, then integrated with real backend APIs.

---

## 3. OBJECTIVES & SUCCESS CRITERIA

### Objectives
- ✅ Display waste hotspots as clustered markers on an interactive map (Refer uploaded image for UI)
- ✅ Implement iPhone-style photo clustering (100-200m radius groups)
- ✅ Enable filtering by Report ID, Severity (High Severity/Low Severity/In Progress/Resolved) and Location (Refer uploaded image for UI)
- ✅ Show waste hotspots post details with scrollable list of posts on the left sidebar (Refer uploaded image for UI)
- ✅ Build in small, manageable phases for clean IDE implementation
- ✅ Use mock data for MVP (real API integration in Phase 4)

### Success Criteria
- Map renders without lag for 50+ markers.
- Clusters auto-split/merge on zoom (smooth UX).
- Left Sidebar scrollable list of waste hotspot posts and post's images have swiper to cycle through images.
- Left Sidebar is visible on the left when citizens will click a particular waste hotspot on the map.
- Left Sidebar should show the clicked waste hotspot post and nearby waste hotspot posts within a particular cluster radius.
- All filters work in real-time without page reload.
- Code is modular and easy to integrate with real backend API.
- Map should be responsive and should be visible on all devices.


---

## 3. TECH STACK

### Frontend (Citizen Web App)
- **Framework:** Next.js (v14+) with .jsx extension
- **Styling:** Tailwind CSS (or CSS Modules)
- **Map Library:** Mapbox GL JS (or Leaflet + Mapbox)
- **Clustering:** Supercluster (lightweight, fast)
- **Image Handling:** exif-js (extract GPS from EXIF metadata)
- **State Management:** React Context API (lightweight) 
- **HTTP Client:** Axios or Fetch API

### Backend (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB
- **Image Storage:** Cloudinary (for image URLs in mock data)
- **Maps:** Mapbox GL JS API (backend can use for geocoding)

### Additional Tools
- **Version Control:** Git
- **Geolocation API:** Browser's native `navigator.geolocation`

---

## 4. FEATURE ARCHITECTURE

### 4.1 Component Breakdown

```

(NOTE: PLEASE REFER THE UI SKETCH FOR PROPER ALIGNMENT OF EACH COMPONENT)

MapPage
├── Common Static Navbar
|   ├── Website logo, Website name
│   └── Pages: Home, Check Status, Maps, Profile (Not Functional)
|   └── Logout Button (Not Functional)
|
|
├── MapContainer (Mapbox/Leaflet canvas)
|   ├── Search bar to search for a location and view posts in that location
│   ├── Clustered Markers (via Supercluster) 
│   └── Zoom Controls (+/-)
│   └── Status Tags: Unsolved (Red), In Progress (Yellow), Solved (Green)
|
|
├── LeftSidebar (Posts Scrollable List)
│   ├── Filter Panel (Report ID (input text field), Severity (dropdown), Location (input text field))
│   └── Post Cards: (scrollable list) 
│   └── Post's images (swiper to cycle through images)
│   └── Post's details (Date, Report ID, Description, Location, Status, Severity, Vote count, Report count)
│   └── Post's actions (Vote Button (Vote count) , Report Button (Report count))
│   └── My Location Toggle (to toggle between user's location and default location)
```

### 4.2 Data Flow
1. **Fetch Mock Data** → Array of complaints with date ,report id, location, latitude, longitude, images, status, severity, description, vote count, report count
2. **Pass to Supercluster** → Cluster nearby points (100-200m radius)
3. **Render on Map** → Clustered markers with count badges
4. **User Clicks Marker** → Populate left sidebar with clicked waste hotspot post and nearby waste hotspot posts within a particular cluster radius

---

## 5. PHASED DEVELOPMENT PLAN

### PHASE 1: Basic Map Setup & Mock Data (Days 1-2)
**Goal:** Render interactive map with clustered markers using static mock data

#### Deliverables
- ✅ Mapbox GL JS integration in Next.js
- ✅ Mock data JSON (10-15 waste reports with real Mumbai coordinates)
- ✅ Supercluster configuration (50-100m radius)
- ✅ Zoom controls (+/- buttons)
- ✅ Search bar to search for a location and view posts in that location
- ✅ Marker styling (color-coded by status) (Refer UI sketch for marker shape)
- ✅ Status Tags (Red -> Untouched, Yellow -> In Progress, Green -> Resolved)

#### Components
- `MapContainer.jsx` - Main map canvas with Mapbox/Leaflet
- `ClusterMarker.jsx` - Custom cluster marker component
- `ZoomControls.jsx` - Zoom buttons
- `StatusTag.jsx` - Status indicators
- `SearchBar.jsx` - Search functionality
- `mockData.json` - Static complaint data

#### Tasks
1. Install & configure Mapbox GL JS
2. Create mock data JSON with 15 real Mumbai locations
3. Implement Supercluster clustering logic
4. Render clustered markers with counts
5. Add zoom controls
6. Add search bar to search for a location and view posts in that location
7. Style markers by status (red/yellow/green)

---

## 6. MOCK DATA SPECIFICATION

### Sample Dataset (15 locations - Real Mumbai coordinates)
json
[
  {
    "report_id": "report_001",
    "imageUrl": "https://res.cloudinary.com/...",
    "latitude": 19.0760,
    "longitude": 72.8777,
    "location": "Strand Road, Colaba, Mumbai",
    "description": "Plastic waste pile near Strand Road",
    "status": "untouched",
    "severity": 85,
    "votes": 12,
    "reports": 10,
    "createdAt": "2026-01-02T10:30:00Z"
  },
  {
    "report_id": "report_002",
    "imageUrl": "https://res.cloudinary.com/...",
    "latitude": 19.1136,
    "longitude": 72.8697,
    "location": "Gateway of India, Mumbai",
    "description": "Overflowing garbage bin at Gateway",
    "status": "in_progress",
    "severity": 65,
    "votes": 8,
    "reports": 10,
    "createdAt": "2026-01-01T14:45:00Z"
  },
  // ... 13 more reports across different Mumbai locations
]

---

## 7. COLOR SCHEME & STYLING

### Map Page
1) Use the same color scheme and fonts which is used for the landing page. 
2) Use relevants icons 

### Status Color Mapping
| Status | Color | Hex Code | 
|--------|-------|----------|
| Untouched | Red | #8B0000 | 
| In Progress | Yellow | #FFD93D |
| Resolved | Green | #6BCB77 | 


### Marker Styling
- *Cluster Marker:* Rounded square double-bordered. Inside double border, stack of images are displayed. When zoomed-in similar clusters are formed (iPhone Style). (Refer UI sketch for cluster marker shape)
- *Cluster border:* Display the status color of the cluster.
- *Hover State:* Tooltip showing report ID + description

---

## 8. RISK MITIGATION

| Risk | Mitigation |
|------|-----------|
| Map performance with 50+ markers | Use clustering, memoize components, lazy load images |
| EXIF data not present in images | Fallback to manual location input or browser Geolocation |
| Mobile responsiveness issues | Test on mobile browser early, use responsive sidebars |
| Zoom animation jank | Use CSS transitions, requestAnimationFrame for smooth UX |

---
