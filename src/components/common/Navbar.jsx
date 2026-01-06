import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Check Status", path: "/check-status" },
        { name: "Maps", path: "/map" },
        { name: "Profile", path: "/profile" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="flex items-center px-4 md:px-8 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
            {/* Left Section: Logo + Navigation Links */}
            <div className="flex items-center gap-6 flex-1">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-green-700 dark:text-green-400">
                    <Leaf className="w-6 h-6 md:w-8 md:h-8" />
                    <span>PublicSeva</span>
                </Link>

                {/* Desktop Navigation - Next to Logo */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-3 py-2 rounded-lg transition-colors text-sm ${isActive(link.path)
                                    ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 font-semibold"
                                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-4">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Logout Button - Desktop */}
                <button className="hidden md:block px-4 py-2 border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition">
                    Logout
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:hidden z-50">
                    <div className="flex flex-col p-4 gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-lg transition-colors ${isActive(link.path)
                                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 font-semibold"
                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="mt-2 px-4 py-3 border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition">
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
