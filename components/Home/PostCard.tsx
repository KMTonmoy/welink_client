"use client";

import React, { useState } from "react";
import { Heart, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import CommentsSection from "./CommentsSection";

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    role?: string;
    verified: boolean;
  };
  content: string;
  media: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
    alt?: string;
  } | null;
  time: string;
  privacy: string;
  likes: number;
  comments: number;
  shares: number;
}

interface PostCardProps {
  post: Post;
  isLiked: boolean;
  isSaved: boolean;
  onLike: (postId: number) => void;
  onSave: (postId: number) => void;
  onCommentSubmit: (postId: number, comment: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  isLiked,
  isSaved,
  onLike,
  onSave,
  onCommentSubmit,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(post.likes);
  const [commentCount, setCommentCount] = useState(post.comments);

  const handleLike = (postId: number) => {
    const newLiked = !isLiked;
    onLike(postId);
    setCurrentLikes(newLiked ? currentLikes + 1 : currentLikes - 1);
  };

  const handleCommentSubmit = (postId: number, comment: string) => {
    onCommentSubmit(postId, comment);
    setCommentCount(commentCount + 1);
  };

  const comments = [
    { id: 1, user: "John Doe", text: "Amazing work!", time: "1 hour ago" },
    { id: 2, user: "Jane Smith", text: "Great job!", time: "45 min ago" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden mb-6"
    >
      {/* Post Header */}
      <div className="p-4">
        <PostHeader
          author={post.author}
          time={post.time}
          privacy={post.privacy}
        />

        {/* Post Content */}
        <p className="mt-4 text-gray-800 whitespace-pre-line">{post.content}</p>

        {/* Post Media */}
        <PostMedia media={post.media} />

        {/* Post Stats */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-white fill-current" />
              </div>
              <span>{currentLikes}</span>
            </div>
            <button
              onClick={() => setShowComments(!showComments)}
              className="hover:text-blue-500"
            >
              {commentCount} comments
            </button>
            <span>{post.shares} shares</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bookmark className="w-4 h-4" />
            <span>{isSaved ? 1 : 0}</span>
          </div>
        </div>
      </div>

      {/* Post Actions */}
      <PostActions
        postId={post.id}
        isLiked={isLiked}
        isSaved={isSaved}
        onLike={handleLike}
        onSave={onSave}
        onCommentClick={() => setShowComments(!showComments)}
      />

      {/* Comments Section */}
      <CommentsSection
        isOpen={showComments}
        postId={post.id}
        onCommentSubmit={handleCommentSubmit}
        initialComments={comments}
      />
    </motion.div>
  );
};

export default PostCard;
