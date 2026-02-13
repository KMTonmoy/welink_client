"use client";

import React from "react";
import { UserPlus } from "lucide-react";
import { SuggestedFriend } from "../../../types/rightbar_types";

interface SuggestedFriendsProps {
  suggestions: SuggestedFriend[];
  onAdd: (id: number) => void;
}

const SuggestedFriends: React.FC<SuggestedFriendsProps> = ({
  suggestions,
  onAdd,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
      <h3 className="font-semibold text-gray-900 mb-3">Suggested Friends</h3>
      <div className="space-y-3">
        {suggestions.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                {friend.avatar}
              </div>
              <div>
                <p className="font-medium text-gray-900">{friend.name}</p>
                <p className="text-xs text-gray-500">
                  {friend.mutual} mutual friends
                </p>
              </div>
            </div>
            <button
              onClick={() => onAdd(friend.id)}
              className="px-3 py-1.5 bg-blue-100 text-blue-600 text-sm rounded-lg hover:bg-blue-200 font-medium flex items-center space-x-1"
            >
              <UserPlus className="w-3 h-3" />
              <span>Add</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedFriends;
