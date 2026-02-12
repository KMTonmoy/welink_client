"use client";

import React from "react";
import { Users, Clock, UserCheck, Ban } from "lucide-react";
import { motion } from "framer-motion";
import MoreDropdown from "./MoreDropdown";

interface SentRequestCardProps {
  request: {
    id: number;
    name: string;
    username: string;
    avatar: string;
    mutualFriends: number;
    time: string;
  };
  onCancel: (id: number) => void;
  onBlock: (id: number, name: string) => void;
}

const SentRequestCard: React.FC<SentRequestCardProps> = ({
  request,
  onCancel,
  onBlock,
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
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {request.avatar}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
              Sent
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
            onClick={() => onCancel(request.id)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            Cancel Request
          </button>

          <MoreDropdown
            onBlock={() => onBlock(request.id, request.name)}
            showDelete={false}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SentRequestCard;
