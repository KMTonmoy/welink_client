"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import friendsData from "../../public/data/friends.json";
import FriendsHeader from "../../components/friends/FriendsHeader";
import FriendsTabs from "../../components/friends/FriendsTabs";
import FriendRequestCard from "../../components/friends/FriendRequestCard";
import SentRequestCard from "../../components/friends/SentRequestCard";
import BlockedUserCard from "../../components/friends/BlockedUserCard";
import FriendsSummary from "../../components/friends/FriendsSummary";
import { Ban, Clock, UserPlus } from "lucide-react";

const FriendsPage = () => {
  const [activeTab, setActiveTab] = useState("requests");
  const [searchQuery, setSearchQuery] = useState("");
  const [friendRequests, setFriendRequests] = useState(
    friendsData.friendRequests,
  );
  const [sentRequests, setSentRequests] = useState(friendsData.sentRequests);
  const [blockedUsers, setBlockedUsers] = useState(friendsData.blockedUsers);

  // Accept friend request
  const handleAcceptRequest = (id: number) => {
    setFriendRequests((prev) => prev.filter((req) => req.id !== id));
    alert("Friend request accepted!");
  };

  // Decline friend request
  const handleDeclineRequest = (id: number) => {
    setFriendRequests((prev) => prev.filter((req) => req.id !== id));
  };

  // Cancel sent request
  const handleCancelRequest = (id: number) => {
    setSentRequests((prev) => prev.filter((req) => req.id !== id));
  };

  // Block user
  const handleBlockUser = (id: number, name: string) => {
    if (confirm(`Are you sure you want to block ${name}?`)) {
      // Remove from requests if exists
      setFriendRequests((prev) => prev.filter((req) => req.id !== id));
      setSentRequests((prev) => prev.filter((req) => req.id !== id));

      // Add to blocked list
      const newBlocked = {
        id,
        name,
        username: `@${name.toLowerCase().replace(/\s+/g, "")}`,
        avatar: name
          .split(" ")
          .map((n) => n[0])
          .join(""),
        blockedDate: "Just now",
      };
      setBlockedUsers((prev) => [...prev, newBlocked]);
    }
  };

  // Unblock user
  const handleUnblockUser = (id: number) => {
    if (confirm("Are you sure you want to unblock this user?")) {
      setBlockedUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  // Delete request
  const handleDeleteRequest = (id: number) => {
    setFriendRequests((prev) => prev.filter((req) => req.id !== id));
  };

  // Filter based on search
  const filteredRequests = friendRequests.filter(
    (req) =>
      req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredSent = sentRequests.filter(
    (req) =>
      req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredBlocked = blockedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <FriendsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <FriendsTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        requestCount={friendRequests.length}
        sentCount={sentRequests.length}
        blockedCount={blockedUsers.length}
      />

      {/* Content */}
      <AnimatePresence mode="wait">
        {/* Friend Requests Tab */}
        {activeTab === "requests" && (
          <motion.div
            key="requests"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <FriendRequestCard
                  key={request.id}
                  request={request}
                  onAccept={handleAcceptRequest}
                  onDecline={handleDeclineRequest}
                  onBlock={handleBlockUser}
                  onDelete={handleDeleteRequest}
                />
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <UserPlus className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No friend requests
                </h3>
                <p className="text-gray-500">
                  When someone sends you a request, it will appear here
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Sent Requests Tab */}
        {activeTab === "sent" && (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {filteredSent.length > 0 ? (
              filteredSent.map((request) => (
                <SentRequestCard
                  key={request.id}
                  request={request}
                  onCancel={handleCancelRequest}
                  onBlock={handleBlockUser}
                />
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No sent requests
                </h3>
                <p className="text-gray-500">
                  You havent sent any friend requests yet
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Blocked Users Tab */}
        {activeTab === "blocked" && (
          <motion.div
            key="blocked"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {filteredBlocked.length > 0 ? (
              filteredBlocked.map((user) => (
                <BlockedUserCard
                  key={user.id}
                  user={user}
                  onUnblock={handleUnblockUser}
                />
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Ban className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No blocked users
                </h3>
                <p className="text-gray-500">
                  When you block someone, they will appear here
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <FriendsSummary
        totalFriends={friendsData.stats.totalFriends}
        pendingRequests={friendRequests.length}
        blockedCount={blockedUsers.length}
      />
    </div>
  );
};

export default FriendsPage;
