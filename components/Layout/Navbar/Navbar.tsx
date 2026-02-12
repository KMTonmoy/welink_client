"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import {
  Home,
  Users,
  Video,
  Store,
  Users2,
  Bell,
  MessageSquare,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeIcon, setActiveIcon] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navItems = [
    {
      id: "Home",
      icon: <Home className="w-6 h-6" />,
      tooltip: "Home",
      path: "/",
    },
    {
      id: "Friends",
      icon: <Users className="w-6 h-6" />,
      tooltip: "Friends",
      path: "/friends",
    },
    {
      id: "Videos",
      icon: <Video className="w-6 h-6" />,
      tooltip: "Videos",
      path: "/videos",
    },
    {
      id: "Marketplace",
      icon: <Store className="w-6 h-6" />,
      tooltip: "Marketplace",
      path: "/marketplace",
    },
    {
      id: "Groups",
      icon: <Users2 className="w-6 h-6" />,
      tooltip: "Groups",
      path: "/groups",
    },
  ];

  // Scroll to top function
  const scrollToTop = (behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({
      top: 0,
      behavior: behavior,
    });
  };

  const handleNavigation = (path: string, id: string) => {
    setActiveIcon(id);

    // If already on home page and clicking home icon, scroll to top
    if (path === "/" && pathname === "/") {
      scrollToTop("smooth");
    } else {
      router.push(path);
    }

    closeAllDropdowns();
  };

  const handleLogoClick = () => {
    setActiveIcon("Home");

    // If already on home page, scroll to top, otherwise navigate to home
    if (pathname === "/") {
      scrollToTop("smooth");
    } else {
      router.push("/");
    }

    closeAllDropdowns();
  };

  const closeAllDropdowns = () => {
    setMenuOpen(false);
    setMessagesOpen(false);
    setNotificationsOpen(false);
    setProfileOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo & Search */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={handleLogoClick}
            >
              <div className="w-10 h-10 relative">
                <Image
                  src={logo}
                  alt="WeLink Logo"
                  className="object-contain"
                  width={40}
                  height={40}
                  priority
                />{" "}
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent hidden md:block group-hover:scale-105 transition-transform">
                WeLink
              </h1>
            </div>

            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search WeLink..."
                className="w-64 pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          {/* Center: Navigation Icons */}
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path, item.id)}
                className={`relative p-4 rounded-lg transition-all duration-300 group ${
                  activeIcon === item.id
                    ? "text-purple-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                title={item.tooltip}
              >
                {item.icon}
                {activeIcon === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-purple-600 rounded-t-full"></div>
                )}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.tooltip}
                </div>
              </button>
            ))}
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center space-x-4">
            {/* Menu */}
            <div className="relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setMenuOpen(!menuOpen);
                }}
                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <NavbarDropdown
                type="menu"
                isOpen={menuOpen}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Messages */}
            <div className="relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setMessagesOpen(!messagesOpen);
                }}
                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors relative"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <NavbarDropdown
                type="messages"
                isOpen={messagesOpen}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setNotificationsOpen(!notificationsOpen);
                }}
                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                  7
                </span>
              </button>
              <NavbarDropdown
                type="notifications"
                isOpen={notificationsOpen}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setProfileOpen(!profileOpen);
                }}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full"></div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              <NavbarDropdown
                type="profile"
                isOpen={profileOpen}
                onClose={closeAllDropdowns}
              />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-2 border-t border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search WeLink..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
