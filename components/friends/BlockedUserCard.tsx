"use client";

import React from "react";
import { Shield, Ban } from "lucide-react";
import { motion } from "framer-motion";

interface BlockedUserCardProps {
  user: {
    id: number;
    name: string;
    username: string;
    avatar: string;
    blockedDate: string;
  };
  onUnblock: (id: number) => void;
}

const BlockedUserCard: React.FC<BlockedUserCardProps> = ({
  user,
  onUnblock,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow border-l-4 border-red-400"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {user.avatar}
            </div>
            <div className="absolute -top-1 -right-1">
              <Ban className="w-5 h-5 text-red-500" />
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-gray-900">{user.name}</h3>
              <span className="text-sm text-gray-500">{user.username}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
              <Shield className="w-4 h-4" />
              <span>Blocked • {user.blockedDate}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUnblock(user.id)}
            className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
          >
            Unblock
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlockedUserCard;
