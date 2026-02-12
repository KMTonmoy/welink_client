"use client";

import React from "react";
import { Users, Search } from "lucide-react";

interface FriendsHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const FriendsHeader: React.FC<FriendsHeaderProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Friends</h1>
            <p className="text-gray-500">Manage your connections</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search friends..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendsHeader;
