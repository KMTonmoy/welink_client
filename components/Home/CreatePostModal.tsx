"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Image,
  Video,
  Smile,
  MapPin,
  Tag,
  Calendar,
  Globe,
  Users,
  Lock,
  ChevronDown,
  Send,
  Trash2,
  Play,
  FileText,
  Music,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [postText, setPostText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [privacy, setPrivacy] = useState("public");
  const [isUploading, setIsUploading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus textarea when modal opens
      setTimeout(() => textareaRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Clean up preview URLs
  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    const files = Array.from(e.target.files || []);

    files.forEach((file) => {
      // Add file to state
      setSelectedFiles((prev) => [...prev, file]);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrls((prev) => [...prev, url]);
    });

    // Clear input
    e.target.value = "";
  };

  const handleRemoveFile = (index: number) => {
    URL.revokeObjectURL(previewUrls[index]);
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!postText.trim() && selectedFiles.length === 0) {
      alert("Please write something or add media to post.");
      return;
    }

    setIsUploading(true);

    // Simulate upload
    setTimeout(() => {
      console.log({
        text: postText,
        files: selectedFiles,
        privacy: privacy,
      });

      // Reset form
      setPostText("");
      setSelectedFiles([]);
      setPreviewUrls([]);
      setPrivacy("public");
      setIsUploading(false);
      onClose();

      // Show success message
      alert("Post created successfully!");
    }, 1500);
  };

  const getPrivacyIcon = () => {
    switch (privacy) {
      case "public":
        return <Globe className="w-4 h-4" />;
      case "friends":
        return <Users className="w-4 h-4" />;
      case "onlyme":
        return <Lock className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getPrivacyText = () => {
    switch (privacy) {
      case "public":
        return "Public";
      case "friends":
        return "Friends";
      case "onlyme":
        return "Only me";
      default:
        return "Public";
    }
  };

  const emojis = [
    "😊",
    "😂",
    "❤️",
    "👍",
    "🎉",
    "🔥",
    "✨",
    "💯",
    "😍",
    "🥳",
    "😎",
    "🙏",
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Create Post
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-3 px-4 py-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                TA
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Tonmoy Ahamed</h3>

                {/* Privacy Dropdown */}
                <div className="relative">
                  <button className="flex items-center space-x-1 text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors">
                    {getPrivacyIcon()}
                    <span>{getPrivacyText()}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {/* Privacy Options - Simple dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 hidden group-hover:block">
                    <button
                      onClick={() => setPrivacy("public")}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Public</span>
                    </button>
                    <button
                      onClick={() => setPrivacy("friends")}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <Users className="w-4 h-4" />
                      <span>Friends</span>
                    </button>
                    <button
                      onClick={() => setPrivacy("onlyme")}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Only me</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Text Input */}
              <textarea
                ref={textareaRef}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's on your mind, Tonmoy?"
                className="w-full min-h-[120px] text-lg resize-none border-none focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-900"
                style={{ outline: "none", boxShadow: "none" }}
              />

              {/* Media Previews */}
              {previewUrls.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {previewUrls.map((url, index) => (
                    <div
                      key={index}
                      className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden"
                    >
                      {selectedFiles[index]?.type.startsWith("video/") ? (
                        <video
                          src={url}
                          className="w-full h-full object-cover"
                          controls
                        />
                      ) : (
                        <img
                          src={url}
                          alt={`Preview ${index}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      {selectedFiles[index]?.type.startsWith("video/") && (
                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 text-white text-xs rounded-full flex items-center space-x-1">
                          <Play className="w-3 h-3 fill-current" />
                          <span>Video</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Emoji Picker */}
              {showEmojiPicker && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-6 gap-2">
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => {
                          setPostText((prev) => prev + emoji);
                          setShowEmojiPicker(false);
                        }}
                        className="p-2 hover:bg-white rounded-lg text-2xl transition-colors"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Post */}
              <div className="mt-4 p-3 border border-gray-200 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Add to your post
                </h4>
                <div className="flex items-center space-x-2">
                  {/* Photo/Video Button */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-3 rounded-full hover:bg-gray-100 text-green-600 transition-colors"
                    title="Photo/Video"
                  >
                    <Image className="w-5 h-5" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) => handleFileSelect(e, "image")}
                    className="hidden"
                  />

                  {/* Video Button */}
                  <button
                    onClick={() => videoInputRef.current?.click()}
                    className="p-3 rounded-full hover:bg-gray-100 text-blue-600 transition-colors"
                    title="Video"
                  >
                    <Video className="w-5 h-5" />
                  </button>
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleFileSelect(e, "video")}
                    className="hidden"
                  />

                  {/* Emoji Button */}
                  <button
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="p-3 rounded-full hover:bg-gray-100 text-yellow-600 transition-colors"
                    title="Emoji"
                  >
                    <Smile className="w-5 h-5" />
                  </button>

                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                disabled={
                  isUploading ||
                  (!postText.trim() && selectedFiles.length === 0)
                }
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                  isUploading ||
                  (!postText.trim() && selectedFiles.length === 0)
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-[1.02]"
                }`}
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Posting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="text-white">Post</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreatePostModal;
