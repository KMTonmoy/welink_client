"use client";

import React from "react";
import { UserCheck, UserX } from "lucide-react";
 import { FriendRequest } from "../../../types/rightbar_types";

interface FriendRequestsProps {
  requests: FriendRequest[];
  onAccept: (id: number) => void;
  onDecline: (id: number) => void;
}

const FriendRequests: React.FC<FriendRequestsProps> = ({
  requests,
  onAccept,
  onDecline,
}) => {
  if (requests.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-900 mb-3">
        Friend Requests ({requests.length})
      </h3>
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                {request.avatar}
              </div>
              <div>
                <p className="font-bold text-gray-900">{request.name}</p>
                <p className="text-sm text-gray-500">
                  {request.mutual} mutual friends
                </p>
                <p className="text-xs text-gray-400">{request.time}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onAccept(request.id)}
                className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
              >
                <UserCheck className="w-4 h-4" />
                <span className="text-white">Accept</span>
              </button>
              <button
                onClick={() => onDecline(request.id)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendRequests;
