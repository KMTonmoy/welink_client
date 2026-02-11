"use client";

import React from "react";
import { Search } from "lucide-react";

// Mobile Search Component
export const MobileSearch = () => {
  return (
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
  );
};

// Navigation Item Component
interface NavItemProps {
  item: {
    id: string;
    icon: React.ReactNode;
    tooltip: string;
    path: string;
  };
  isActive: boolean;
  onClick: (path: string, id: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(item.path, item.id)}
      className={`relative p-4 rounded-lg transition-all duration-300 group ${
        isActive
          ? "text-purple-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
      title={item.tooltip}
    >
      {item.icon}
      {isActive && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-purple-600 rounded-t-full"></div>
      )}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {item.tooltip}
      </div>
    </button>
  );
};

// Notification Badge Component
interface BadgeProps {
  count: number;
  color: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  count,
  color,
  className = "",
}) => {
  return (
    <span
      className={`absolute -top-1 -right-1 w-5 h-5 ${color} text-white text-xs rounded-full flex items-center justify-center ${className}`}
    >
      {count > 9 ? "9+" : count}
    </span>
  );
};

// Logo Component
export const Logo = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">W</span>
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent hidden md:block">
        WeLink
      </h1>
    </div>
  );
};

// Search Bar Component
export const SearchBar = () => {
  return (
    <div className="relative hidden md:block">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search WeLink..."
        className="w-64 pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600"
      />
    </div>
  );
};
