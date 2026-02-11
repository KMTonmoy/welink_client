"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: string;
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
  privacy: "public" | "friends";
  likes: number;
  comments: number;
  shares: number;
}

const ContentHome = () => {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");

  const POSTS_PER_LOAD = 2;
  const INITIAL_POSTS = 3;

  // Fetch posts from API
  const fetchPosts = useCallback(async (pageNum: number, limit: number) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${limit}`,
      );

      // Transform API data to match our Post interface
      const transformedPosts = response.data.map(
        (item: any, index: number) => ({
          id: item.id,
          author: {
            name: `User ${item.userId}`,
            avatar: `U${item.userId}`,
            role: [
              "Product Designer",
              "Frontend Developer",
              "Tech Lead",
              "UX Designer",
            ][item.userId % 4],
            verified: item.userId % 3 === 0,
          },
          content: item.title + ". " + item.body,
          media:
            item.id % 3 === 0
              ? {
                  type: item.id % 2 === 0 ? "image" : "video",
                  url: `https://picsum.photos/800/600?random=${item.id}`,
                  thumbnail: `https://picsum.photos/800/600?random=${item.id + 100}`,
                  alt: `Post image ${item.id}`,
                }
              : null,
          time: `${item.id * 2} hours ago`,
          privacy: item.id % 2 === 0 ? "public" : "friends",
          likes: Math.floor(Math.random() * 1000) + 50,
          comments: Math.floor(Math.random() * 100) + 10,
          shares: Math.floor(Math.random() * 50) + 5,
        }),
      );

      return transformedPosts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }, []);

  // Load initial posts
  useEffect(() => {
    const loadInitialPosts = async () => {
      setIsLoading(true);
      setError("");
      try {
        const initialPosts = await fetchPosts(1, INITIAL_POSTS);
        setVisiblePosts(initialPosts);
        setPage(2);
      } catch (error) {
        setError("Failed to load posts. Please try again.");
        console.error("Error loading initial posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialPosts();
  }, [fetchPosts]);

  // Load more posts
  const loadMorePosts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError("");

    try {
      const newPosts = await fetchPosts(page, POSTS_PER_LOAD);

      if (newPosts.length > 0) {
        setVisiblePosts((prev) => [...prev, ...newPosts]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setError("Failed to load more posts. Please try again.");
      console.error("Error loading more posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasMore, fetchPosts]);

  // Handle like
  const handleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  };

  // Handle save
  const handleSave = (postId: number) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  };

  // Handle comment submit
  const handleCommentSubmit = async (postId: number, comment: string) => {
    try {
      // Send comment to API
      await axios.post(`https://jsonplaceholder.typicode.com/comments`, {
        postId,
        body: comment,
        name: "Current User",
        email: "user@example.com",
      });
      console.log(`Comment on post ${postId}: ${comment}`);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;

      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Load more when 200px from bottom
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMorePosts, isLoading, hasMore]);

  // Retry loading if error occurs
  const handleRetry = () => {
    setError("");
    if (visiblePosts.length === 0) {
      const loadInitialPosts = async () => {
        setIsLoading(true);
        try {
          const initialPosts = await fetchPosts(1, INITIAL_POSTS);
          setVisiblePosts(initialPosts);
          setPage(2);
        } catch (error) {
          setError("Failed to load posts. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
      loadInitialPosts();
    } else {
      loadMorePosts();
    }
  };

  return (
    <div className="max-w-2xl mx-auto pb-20">
      <CreatePost />

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-500 text-lg">!</span>
            </div>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Loading State */}
      {isLoading && visiblePosts.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-purple-600"></div>
          <p className="mt-4 text-gray-500">Loading posts...</p>
        </div>
      )}

      {/* Posts Feed */}
      {!isLoading && visiblePosts.length === 0 && !error && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 text-2xl">📝</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No posts yet
          </h3>
          <p className="text-gray-500">Be the first to share something!</p>
        </div>
      )}

      {/* Posts */}
      <div className="space-y-6">
        {visiblePosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isLiked={likedPosts.includes(post.id)}
            isSaved={savedPosts.includes(post.id)}
            onLike={handleLike}
            onSave={handleSave}
            onCommentSubmit={handleCommentSubmit}
          />
        ))}
      </div>

      {/* Loading More Indicator */}
      {isLoading && visiblePosts.length > 0 && (
        <div className="text-center py-6">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-gray-200 border-t-purple-600"></div>
          <p className="mt-2 text-sm text-gray-500">Loading more posts...</p>
        </div>
      )}

      {/* End of Feed */}
      {!hasMore && visiblePosts.length > 0 && (
        <div className="text-center py-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-3">
            <span className="text-purple-600 text-xl">✨</span>
          </div>
          <p className="text-gray-600 font-medium">You re all caught up!</p>
          <p className="text-gray-400 text-sm mt-1">
            Check back later for new posts
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentHome;
