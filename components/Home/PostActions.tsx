"use client";

import React from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

interface PostActionsProps {
  postId: number;
  isLiked: boolean;
  isSaved: boolean;
  onLike: (postId: number) => void;
  onSave: (postId: number) => void;
  onCommentClick: (postId: number) => void;
}

const PostActions: React.FC<PostActionsProps> = ({
  postId,
  isLiked,
  isSaved,
  onLike,
  onSave,
  onCommentClick,
}) => {
  return (
    <div className="border-t border-gray-100 px-4 py-2">
      <div className="flex items-center justify-between">
        <button
          onClick={() => onLike(postId)}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
            isLiked
              ? "text-red-500 hover:bg-red-50"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          <span className="font-medium">Like</span>
        </button>
        <button
          onClick={() => onCommentClick(postId)}
          className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
          <Share2 className="w-5 h-5" />
          <span className="font-medium">Share</span>
        </button>
        <button
          onClick={() => onSave(postId)}
          className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
            isSaved
              ? "text-yellow-500 hover:bg-yellow-50"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default PostActions;
