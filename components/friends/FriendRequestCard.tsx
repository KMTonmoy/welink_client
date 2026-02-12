"use client";

import React from "react";
import { Users, Clock, Check, X, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import MoreDropdown from "./MoreDropdown";

interface FriendRequestCardProps {
  request: {
    id: number;
    name: string;
    username: string;
    avatar: string;
    mutualFriends: number;
    time: string;
  };
  onAccept: (id: number) => void;
  onDecline: (id: number) => void;
  onBlock: (id: number, name: string) => void;
  onDelete: (id: number) => void;
}

const FriendRequestCard: React.FC<FriendRequestCardProps> = ({
  request,
  onAccept,
  onDecline,
  onBlock,
  onDelete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {request.avatar}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-gray-900">{request.name}</h3>
              <span className="text-sm text-gray-500">{request.username}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
              <Users className="w-4 h-4" />
              <span>{request.mutualFriends} mutual friends</span>
              <span>•</span>
              <Clock className="w-4 h-4" />
              <span>{request.time}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onAccept(request.id)}
            className="p-2.5 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
            title="Accept"
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDecline(request.id)}
            className="p-2.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            title="Decline"
          >
            <X className="w-5 h-5" />
          </button>

          <MoreDropdown
            onBlock={() => onBlock(request.id, request.name)}
            onDelete={() => onDelete(request.id)}
            showDelete={true}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FriendRequestCard;
