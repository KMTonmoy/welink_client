"use client";

import React from "react";
import { UserPlus, Clock, Ban } from "lucide-react";

interface FriendsTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  requestCount: number;
  sentCount: number;
  blockedCount: number;
}

const FriendsTabs: React.FC<FriendsTabsProps> = ({
  activeTab,
  onTabChange,
  requestCount,
  sentCount,
  blockedCount,
}) => {
  return (
    <div className="flex border-b border-gray-200 mb-6">
      <button
        onClick={() => onTabChange("requests")}
        className={`flex items-center space-x-2 px-6 py-3 font-medium text-sm transition-colors relative ${
          activeTab === "requests"
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <UserPlus className="w-4 h-4" />
        <span>Friend Requests</span>
        {requestCount > 0 && (
          <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {requestCount}
          </span>
        )}
      </button>
      <button
        onClick={() => onTabChange("sent")}
        className={`flex items-center space-x-2 px-6 py-3 font-medium text-sm transition-colors relative ${
          activeTab === "sent"
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <Clock className="w-4 h-4" />
        <span>Sent Requests</span>
        {sentCount > 0 && (
          <span className="bg-gray-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {sentCount}
          </span>
        )}
      </button>
      <button
        onClick={() => onTabChange("blocked")}
        className={`flex items-center space-x-2 px-6 py-3 font-medium text-sm transition-colors ${
          activeTab === "blocked"
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <Ban className="w-4 h-4" />
        <span>Blocked</span>
        {blockedCount > 0 && (
          <span className="bg-gray-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {blockedCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default FriendsTabs;
