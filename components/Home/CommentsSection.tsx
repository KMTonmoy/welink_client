"use client";

import React, { useState } from "react";
import { Smile, Image, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Comment {
  id: number;
  user: string;
  text: string;
  time: string;
}

interface CommentsSectionProps {
  isOpen: boolean;
  postId: number;
  onCommentSubmit: (postId: number, comment: string) => void;
  initialComments?: Comment[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  isOpen,
  postId,
  onCommentSubmit,
  initialComments = [],
}) => {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleSubmit = () => {
    if (commentInput.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        user: "You",
        text: commentInput,
        time: "Just now",
      };
      setComments([...comments, newComment]);
      onCommentSubmit(postId, commentInput);
      setCommentInput("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-gray-100"
        >
          <div className="p-4">
            {/* Comment Input */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full bg-gray-100 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Image className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Existing Comments */}
            <div className="space-y-3">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{comment.user}</h4>
                      <span className="text-xs text-gray-400">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
                    <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                      <button className="hover:text-blue-500">Like</button>
                      <button className="hover:text-blue-500">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommentsSection;
