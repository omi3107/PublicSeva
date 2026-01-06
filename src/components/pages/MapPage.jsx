import React, { useState, useEffect } from "react";
import Navbar from "../common/Navbar";
import MapContainer from "../map/MapContainer";

export default function MapPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [statusFilter, setStatusFilter] = useState({
        untouched: true,
        in_progress: true,
        resolved: true,
    });

    // Handle dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            {/* Navbar */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Map Area */}
            <div className="flex-1 relative">
                <MapContainer
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                    darkMode={darkMode}
                />
            </div>
        </div>
    );
}
