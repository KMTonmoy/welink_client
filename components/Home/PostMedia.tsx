"use client";

import React from "react";

interface PostMediaProps {
  media: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
    alt?: string;
  } | null;
}

const PostMedia: React.FC<PostMediaProps> = ({ media }) => {
  if (!media) return null;

  return (
    <div className="mt-4 rounded-lg overflow-hidden">
      {media.type === "image" ? (
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${media.url})` }}
          />
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            PHOTO
          </div>
        </div>
      ) : (
        <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
          <div
            className="w-full h-full bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${media.thumbnail})` }}
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
  );
};

export default PostMedia;
