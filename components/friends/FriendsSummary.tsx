"use client";

import React from "react";
import { Users, UserPlus, Ban } from "lucide-react";

interface FriendsSummaryProps {
  totalFriends: number;
  pendingRequests: number;
  blockedCount: number;
}

const FriendsSummary: React.FC<FriendsSummaryProps> = ({
  totalFriends,
  pendingRequests,
  blockedCount,
}) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-600 font-medium">Total Friends</p>
            <p className="text-2xl font-bold text-gray-900">{totalFriends}</p>
          </div>
          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-purple-600 font-medium">
              Pending Requests
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {pendingRequests}
            </p>
          </div>
          <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 font-medium">Blocked Users</p>
            <p className="text-2xl font-bold text-gray-900">{blockedCount}</p>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <Ban className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsSummary;
