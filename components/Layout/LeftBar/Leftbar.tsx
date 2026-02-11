"use client";

import React, { useState } from "react";
import {
  User,
  Users,
  Video,
  Bookmark,
  Calendar,
  Flag,
  Store,
  Clock,
  ChevronDown,
  Settings,
  HelpCircle,
  Moon,
  LogOut,
  Home,
  Gamepad2,
  Trophy,
  Newspaper,
  Camera,
  Music,
  Heart,
} from "lucide-react";
import Image from "next/image";

const Leftbar = () => {
  const [activeItem, setActiveItem] = useState("Profile");

  const user = {
    name: "Tonmoy Ahamed",
    username: "@tonmoy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tonmoy",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop",
  };

  const shortcuts = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Friends",
      color: "text-blue-500",
      count: 128,
    },
    {
      icon: <Video className="w-5 h-5" />,
      label: "Videos",
      color: "text-red-500",
    },
    {
      icon: <Store className="w-5 h-5" />,
      label: "Marketplace",
      color: "text-green-500",
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      label: "Gaming",
      color: "text-purple-500",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "Tournaments",
      color: "text-yellow-500",
    },
    {
      icon: <Newspaper className="w-5 h-5" />,
      label: "News",
      color: "text-orange-500",
    },
  ];

  const profileMenu = [
    {
      icon: <User className="w-5 h-5" />,
      label: "My Profile",
      path: "/profile",
    },
    { icon: <Bookmark className="w-5 h-5" />, label: "Saved", path: "/saved" },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Memories",
      path: "/memories",
    },
    { icon: <Flag className="w-5 h-5" />, label: "Pages", path: "/pages" },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Events",
      path: "/events",
    },
    { icon: <Camera className="w-5 h-5" />, label: "Photos", path: "/photos" },
    { icon: <Music className="w-5 h-5" />, label: "Music", path: "/music" },
    { icon: <Heart className="w-5 h-5" />, label: "Dating", path: "/dating" },
  ];

  const settingsMenu = [
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings & Privacy",
      path: "/settings",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help & Support",
      path: "/help",
    },
    {
      icon: <Moon className="w-5 h-5" />,
      label: "Dark Mode",
      path: "/dark-mode",
    },
    {
      icon: <LogOut className="w-5 h-5" />,
      label: "Logout",
      path: "/logout",
      color: "text-red-500",
    },
  ];

  return (
    <aside className="hidden lg:block w-64 xl:w-80 border-r border-gray-200 bg-white overflow-y-auto sticky top-16 h-[calc(100vh-4rem)]">
      <div className="p-4">
        {/* User Profile Card */}
        <div className="mb-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                TA
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.username}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <p className="font-bold text-gray-900">128</p>
              <p className="text-gray-500">Friends</p>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="font-bold text-gray-900">45</p>
              <p className="text-gray-500">Following</p>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="font-bold text-gray-900">1.2K</p>
              <p className="text-gray-500">Followers</p>
            </div>
          </div>
        </div>

        {/* Profile Menu */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3 px-2">
            PROFILE
          </h3>
          <div className="space-y-1">
            {profileMenu.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activeItem === item.label
                    ? "bg-purple-50 text-purple-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div
                  className={
                    activeItem === item.label
                      ? "text-purple-600"
                      : "text-gray-500"
                  }
                >
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Shortcuts */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-2">
            <h3 className="text-sm font-semibold text-gray-500">
              YOUR SHORTCUTS
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-1">
            {shortcuts.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className={item.color}>{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.count && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="border-t border-gray-200 pt-4">
          <div className="space-y-1">
            {settingsMenu.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                  item.color || "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Leftbar;
