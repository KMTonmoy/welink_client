"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Settings,
  Shield,
  Moon,
  Globe,
  HelpCircle,
  LogOut,
  Bookmark,
  Users,
  Calendar,
  Gamepad2,
  TrendingUp,
  Newspaper,
  Briefcase,
  Mail,
  Bell,
  Check,
  UserCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface NavbarDropdownProps {
  type: "menu" | "messages" | "notifications" | "profile";
  isOpen: boolean;
  onClose: () => void;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  type,
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
    onClose();
  };

  const profileMenu = [
    {
      icon: <User className="w-4 h-4" />,
      label: "My Profile",
      path: "/profile",
      color: "text-blue-500",
    },
    {
      icon: <Bookmark className="w-4 h-4" />,
      label: "Saved",
      path: "/saved",
      color: "text-yellow-500",
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: "Settings",
      path: "/settings",
      color: "text-gray-500",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      label: "Privacy",
      path: "/privacy",
      color: "text-green-500",
    },
    {
      icon: <Moon className="w-4 h-4" />,
      label: "Dark Mode",
      path: "/dark-mode",
      color: "text-purple-500",
    },
    {
      icon: <Globe className="w-4 h-4" />,
      label: "Language",
      path: "/language",
      color: "text-blue-400",
    },
    {
      icon: <HelpCircle className="w-4 h-4" />,
      label: "Help & Support",
      path: "/help",
      color: "text-orange-500",
    },
    {
      icon: <LogOut className="w-4 h-4" />,
      label: "Logout",
      path: "/logout",
      color: "text-red-500",
    },
  ];

  const menuItems = [
    {
      icon: <Users className="w-4 h-4" />,
      label: "Find Friends",
      color: "text-blue-500",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Events",
      color: "text-green-500",
    },
    {
      icon: <Gamepad2 className="w-4 h-4" />,
      label: "Gaming",
      color: "text-purple-500",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "Trending",
      color: "text-orange-500",
    },
    {
      icon: <Newspaper className="w-4 h-4" />,
      label: "News",
      color: "text-red-500",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Jobs",
      color: "text-indigo-500",
    },
  ];

  const notifications = [
    {
      id: 1,
      user: "Alex Johnson",
      action: "liked your post",
      time: "5 min ago",
      read: false,
    },
    {
      id: 2,
      user: "Sarah Miller",
      action: "commented on your photo",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 3,
      user: "Mike Wilson",
      action: "started following you",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 4,
      user: "WeLink Team",
      action: "New feature announcement",
      time: "1 day ago",
      read: true,
    },
  ];

  const messages = [
    {
      id: 1,
      user: "Emma Davis",
      message: "Hey! How are you doing?",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      user: "Robert Brown",
      message: "Meeting at 3 PM tomorrow",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 3,
      user: "Lisa Wang",
      message: "Check out this article!",
      time: "3 hours ago",
      unread: true,
    },
  ];

  const getDropdownContent = () => {
    switch (type) {
      case "profile":
        return {
          title: "Profile",
          width: "w-64",
          content: (
            <>
              <div className="px-4 py-4 bg-gradient-to-r from-purple-600 to-purple-400">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">
                      JD
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">John Doe</h4>
                    <p className="text-white/80 text-sm">@johndoe</p>
                  </div>
                </div>
              </div>
              <div className="py-2">
                {profileMenu.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleItemClick(item.path)}
                    className="w-full px-4 py-3 flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                  >
                    <div className={item.color}>{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </>
          ),
        };

      case "menu":
        return {
          title: "Explore WeLink",
          width: "w-56",
          content: (
            <>
              <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
                <h3 className="font-semibold text-gray-900">Explore WeLink</h3>
              </div>
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-3 flex items-center space-x-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                  >
                    <div className={item.color}>{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </>
          ),
        };

      case "notifications":
        return {
          title: "Notifications",
          width: "w-80",
          content: (
            <>
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <button className="text-sm text-purple-600 hover:text-purple-700">
                  Mark all as read
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      !notification.read ? "bg-purple-50" : ""
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                        {notification.user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">
                            {notification.user}
                          </span>
                          {` ${notification.action}`}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-100 text-center">
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  View all notifications
                </button>
              </div>
            </>
          ),
        };

      case "messages":
        return {
          title: "Messages",
          width: "w-80",
          content: (
            <>
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Messages</h3>
                <span className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer">
                  New message
                </span>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      message.unread ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                        {message.user.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-sm truncate">
                            {message.user}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {message.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {message.message}
                        </p>
                      </div>
                      {message.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-100 text-center">
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  See all in Messenger
                </button>
              </div>
            </>
          ),
        };

      default:
        return { title: "", width: "w-56", content: null };
    }
  };

  const { width, content } = getDropdownContent();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`absolute right-0 mt-2 ${width} bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50`}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarDropdown;
