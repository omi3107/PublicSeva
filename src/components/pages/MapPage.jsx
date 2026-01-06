import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../common/Navbar";
import MapContainer from "../map/MapContainer";
import LeftSidebar from "../sidebar/LeftSidebar";

export default function MapPage() {
    const mapRef = useRef(null);
    const [darkMode, setDarkMode] = useState(false);
    const [statusFilter, setStatusFilter] = useState({
        untouched: true,
        in_progress: true,
        resolved: true,
    });

    // Sidebar state
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarPosts, setSidebarPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [myLocationActive, setMyLocationActive] = useState(false);

    // Filter state
    const [filters, setFilters] = useState({
        reportId: "",
        status: "",
        severity: "",
        location: "",
    });

    // Handle dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // Handle marker click - open sidebar with clicked post and nearby posts
    const handleMarkerClick = useCallback((clickedPost) => {
        if (mapRef.current) {
            // Get nearby posts within 500m radius
            const nearbyPosts = mapRef.current.getNearbyPosts(clickedPost, 500);

            // Sort so clicked post is first
            const sortedPosts = [
                clickedPost,
                ...nearbyPosts.filter(p => p.report_id !== clickedPost.report_id)
            ];

            setSidebarPosts(sortedPosts);
            setSelectedPostId(clickedPost.report_id);
            setIsSidebarOpen(true);

            // Reset filters when opening sidebar
            setFilters({
                reportId: "",
                status: "",
                severity: "",
                location: "",
            });
        }
    }, []);

    // Handle post card click - highlight marker and center map
    const handlePostClick = useCallback((post) => {
        setSelectedPostId(post.report_id);
        if (mapRef.current) {
            mapRef.current.flyToPost(post.report_id);
        }
    }, []);

    // Handle sidebar close
    const handleCloseSidebar = useCallback(() => {
        setIsSidebarOpen(false);
        setSelectedPostId(null);
    }, []);

    // Handle My Location toggle
    const handleMyLocationToggle = useCallback((isActive) => {
        setMyLocationActive(isActive);
    }, []);

    // Handle location found from My Location toggle
    const handleLocationFound = useCallback(({ lat, lng }) => {
        if (mapRef.current) {
            mapRef.current.flyToLocation(lat, lng);
        }
    }, []);

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            {/* Navbar */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Main Content Area */}
            <div className="flex-1 relative flex overflow-hidden">
                {/* Left Sidebar */}
                <LeftSidebar
                    isOpen={isSidebarOpen}
                    onClose={handleCloseSidebar}
                    posts={sidebarPosts}
                    filters={filters}
                    onFilterChange={setFilters}
                    selectedPostId={selectedPostId}
                    onPostClick={handlePostClick}
                    myLocationActive={myLocationActive}
                    onMyLocationToggle={handleMyLocationToggle}
                    onLocationFound={handleLocationFound}
                />

                {/* Map Area - adjusts width when sidebar is open */}
                <div
                    className={`
                        flex-1 relative transition-all duration-300
                        ${isSidebarOpen ? "lg:ml-[480px]" : "ml-0"}
                    `}
                >
                    <MapContainer
                        ref={mapRef}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        darkMode={darkMode}
                        onMarkerClick={handleMarkerClick}
                        highlightedPostId={selectedPostId}
                    />
                </div>
            </div>
        </div>
    );
}
