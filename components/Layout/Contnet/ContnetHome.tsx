"use client";

import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Globe,
  Image,
  Video,
  Music,
  MapPin,
  Smile,
  Tag,
  Calendar,
  Users,
  ThumbsUp,
  Send,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContentHome = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [showComments, setShowComments] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      author: {
        name: "Alex Johnson",
        avatar: "AJ",
        role: "Product Designer",
        verified: true,
      },
      content:
        "Just launched my new portfolio website! Built with Next.js 14 and Tailwind CSS. The development journey was challenging but incredibly rewarding. Check it out and let me know what you think! 🚀",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
        alt: "Code editor screenshot",
      },
      time: "2 hours ago",
      privacy: "public",
      likes: 245,
      comments: 42,
      shares: 18,
      isLiked: false,
      isSaved: false,
    },
    {
      id: 2,
      author: {
        name: "Sarah Miller",
        avatar: "SM",
        role: "Frontend Developer",
        verified: true,
      },
      content:
        "Beautiful sunset from my hike today! Sometimes you just need to disconnect and reconnect with nature. 🌄 #NatureLover #HikingAdventures",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
        alt: "Mountain sunset",
      },
      time: "5 hours ago",
      privacy: "friends",
      likes: 189,
      comments: 28,
      shares: 9,
      isLiked: true,
      isSaved: true,
    },
    {
      id: 3,
      author: {
        name: "Mike Wilson",
        avatar: "MW",
        role: "Tech Lead",
        verified: false,
      },
      content:
        "Just finished my talk about 'The Future of Web Development' at the Tech Conference 2024. The energy was amazing! Slides are available on my GitHub.",
      media: {
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
      },
      time: "1 day ago",
      privacy: "public",
      likes: 312,
      comments: 56,
      shares: 24,
      isLiked: false,
      isSaved: false,
    },
    {
      id: 4,
      author: {
        name: "WeLink Team",
        avatar: "WL",
        role: "Official",
        verified: true,
      },
      content:
        "🎉 Exciting News! We've just launched new features including Stories, Live Streaming, and enhanced privacy controls. Update your app now to experience the latest improvements!",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
        alt: "App update announcement",
      },
      time: "2 days ago",
      privacy: "public",
      likes: 1542,
      comments: 234,
      shares: 89,
      isLiked: true,
      isSaved: true,
    },
    {
      id: 5,
      author: {
        name: "Emma Davis",
        avatar: "ED",
        role: "UX Designer",
        verified: true,
      },
      content:
        "Morning coffee and design inspiration. Working on a new mobile app interface. What's your favorite design tool? #DesignLife #UIUX",
      media: null,
      time: "3 hours ago",
      privacy: "public",
      likes: 98,
      comments: 15,
      shares: 3,
      isLiked: false,
      isSaved: false,
    },
  ];

  const comments = [
    {
      id: 1,
      user: "John Doe",
      text: "Amazing work! Love the design.",
      time: "1 hour ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      text: "Can you share the source code?",
      time: "45 min ago",
    },
    {
      id: 3,
      user: "Robert Brown",
      text: "Great implementation! 👏",
      time: "30 min ago",
    },
  ];

  const handleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  };

  const handleSave = (postId: number) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  };

  const handleComment = (postId: number) => {
    if (commentInput.trim()) {
      console.log(`Comment on post ${postId}: ${commentInput}`);
      setCommentInput("");
    }
  };

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
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      {/* Create Post Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-4"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            TA
          </div>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-500 text-left px-4 py-3 rounded-full transition-colors">
            Whats on your mind, Tonmoy?
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Video className="w-5 h-5" />
            <span className="font-medium">Live video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Image className="w-5 h-5" />
            <span className="font-medium">Photo/video</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Smile className="w-5 h-5" />
            <span className="font-medium">Feeling/activity</span>
          </button>
        </div>
      </motion.div>

      {/* Posts */}
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: post.id * 0.1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Post Header */}
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {post.author.avatar}
                  </div>
                  {post.author.verified && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="text-white text-xs">✓</div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-900">
                      {post.author.name}
                    </h3>
                    {post.author.verified && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{post.time}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      {getPrivacyIcon(post.privacy)}
                      <span className="capitalize">{post.privacy}</span>
                    </div>
                    {post.author.role && (
                      <>
                        <span>•</span>
                        <span>{post.author.role}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Content */}
            <p className="mt-4 text-gray-800 whitespace-pre-line">
              {post.content}
            </p>

            {/* Post Media */}
            {post.media && (
              <div className="mt-4 rounded-lg overflow-hidden">
                {post.media.type === "image" ? (
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.media.url})` }}
                    />
                    <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      PHOTO
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                    <div
                      className="w-full h-full bg-cover bg-center opacity-50"
                      style={{
                        backgroundImage: `url(${post.media.thumbnail})`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-2"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      VIDEO
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Post Stats */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <Heart className="w-3 h-3 text-white fill-current" />
                  </div>
                  <span>
                    {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setShowComments(showComments === post.id ? null : post.id)
                  }
                  className="hover:text-blue-500"
                >
                  {post.comments} comments
                </button>
                <span>{post.shares} shares</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bookmark className="w-4 h-4" />
                <span>{savedPosts.includes(post.id) ? 1 : 0}</span>
              </div>
            </div>
          </div>

          {/* Post Actions */}
          <div className="border-t border-gray-100 px-4 py-2">
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleLike(post.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
                  likedPosts.includes(post.id)
                    ? "text-red-500 hover:bg-red-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${likedPosts.includes(post.id) ? "fill-current" : ""}`}
                />
                <span className="font-medium">Like</span>
              </button>
              <button
                onClick={() =>
                  setShowComments(showComments === post.id ? null : post.id)
                }
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
                onClick={() => handleSave(post.id)}
                className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
                  savedPosts.includes(post.id)
                    ? "text-yellow-500 hover:bg-yellow-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Bookmark
                  className={`w-5 h-5 ${savedPosts.includes(post.id) ? "fill-current" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <AnimatePresence>
            {showComments === post.id && (
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
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleComment(post.id)
                        }
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
                      onClick={() => handleComment(post.id)}
                      className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Existing Comments */}
                  <div className="space-y-3">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
                        <div className="flex-1 bg-gray-50 rounded-xl p-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm">
                              {comment.user}
                            </h4>
                            <span className="text-xs text-gray-400">
                              {comment.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            {comment.text}
                          </p>
                          <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                            <button className="hover:text-blue-500">
                              Like
                            </button>
                            <button className="hover:text-blue-500">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Load More */}
      <div className="text-center">
        <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
          Load more posts
        </button>
      </div>
    </div>
  );
};

export default ContentHome;
