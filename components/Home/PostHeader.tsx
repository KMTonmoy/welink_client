"use client";

import React from "react";
import { Globe, Users, MoreHorizontal } from "lucide-react";

interface PostHeaderProps {
  author: {
    name: string;
    avatar: string;
    role?: string;
    verified: boolean;
  };
  time: string;
  privacy: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ author, time, privacy }) => {
  const getPrivacyIcon = (privacy: string) => {
    switch (privacy) {
      case "public":
        return <Globe className="w-3 h-3" />;
      case "friends":
        return <Users className="w-3 h-3" />;
      default:
        return <Globe className="w-3 h-3" />;
    }
  };

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {author.avatar}
          </div>
          {author.verified && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="text-white text-xs">✓</div>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-gray-900">{author.name}</h3>
            {author.verified && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                Verified
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>{time}</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              {getPrivacyIcon(privacy)}
              <span className="capitalize">{privacy}</span>
            </div>
            {author.role && (
              <>
                <span>•</span>
                <span>{author.role}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PostHeader;
