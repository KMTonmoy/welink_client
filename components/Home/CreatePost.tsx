"use client";

import React, { useState } from "react";
import { Video, Image, Smile } from "lucide-react";
import { motion } from "framer-motion";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-4 mb-6"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            TA
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-500 text-left px-4 py-3 rounded-full transition-colors"
          >
            Whats on your mind, Tonmoy?
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Video className="w-5 h-5" />
            <span className="font-medium">Live video</span>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Image className="w-5 h-5" />
            <span className="font-medium">Photo/video</span>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Smile className="w-5 h-5" />
            <span className="font-medium">Feeling/activity</span>
          </button>
        </div>
      </motion.div>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CreatePost;
