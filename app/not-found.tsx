"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Coffee, Sparkles } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          className="relative mb-8"
        >
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              <h1 className="text-5xl">404</h1>
            </span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <Coffee className="w-10 h-10 text-purple-600" />
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-2">
            Oops! This page is still under construction 🚧
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-6">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span>Our developers are working on it</span>
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white w-full rounded-xl p-6 shadow-sm border border-purple-100   mx-auto"
          >
            <p className="text-gray-600">
              Were making something awesome here! Check back soon for updates.
              In the meantime, explore other parts of WeLink.
            </p>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span className="text-white">Back to Home</span>
            </motion.button>
          </Link>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-700 rounded-full font-medium border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go to Feed</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Progress Bar */}404

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className=" mx-auto mt-12"
        >
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Coming Soon</span>
            <span className="text-purple-600 font-medium">75%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">We are almost there! ✨</p>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-400 text-sm mt-16"
        >
          © 2024 WeLink - Making connections, one step at a time 💜
        </motion.p>
      </div>
    </div>
  );
};

export default NotFoundPage;
