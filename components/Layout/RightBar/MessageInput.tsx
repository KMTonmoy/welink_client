"use client";

import React, { useState, useRef } from "react";
import { Send, Image, Smile, Paperclip, X } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (text: string, image?: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim() || previewImage) {
      onSendMessage(message, previewImage || undefined);
      setMessage("");
      setPreviewImage(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const emojis = ["😊", "😂", "❤️", "👍", "🎉", "🔥", "✨", "💯"];

  return (
    <div className="border-t border-gray-200 p-3">
      {/* Image Preview */}
      {previewImage && (
        <div className="relative mb-3 inline-block">
          <img
            src={previewImage}
            alt="Preview"
            className="h-20 w-20 object-cover rounded-lg"
          />
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute -top-2 -right-2 p-1 bg-gray-800 text-white rounded-full hover:bg-red-600"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Input Area */}
      <div className="flex items-end space-x-2">
        <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Write a message..."
            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 resize-none text-sm max-h-32"
            rows={1}
          />

          {/* Attachment Buttons */}
          <div className="flex items-center space-x-1 mt-1">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-1 rounded-full hover:bg-gray-200 text-gray-500"
            >
              <Image className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-200 text-gray-500">
              <Paperclip className="w-4 h-4" />
            </button>
            <div className="relative group">
              <button className="p-1 rounded-full hover:bg-gray-200 text-gray-500">
                <Smile className="w-4 h-4" />
              </button>
              <div className="absolute bottom-full left-0 mb-2 p-2 bg-white rounded-lg shadow-lg border border-gray-200 hidden group-hover:flex space-x-1">
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => setMessage((prev) => prev + emoji)}
                    className="p-1 hover:bg-gray-100 rounded text-lg"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!message.trim() && !previewImage}
          className={`p-3 rounded-full ${
            message.trim() || previewImage
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          } transition-colors`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default MessageInput;
