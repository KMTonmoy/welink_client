"use client";

import React, { useRef, useState } from "react";
import { MoreHorizontal, Ban, Trash2, Flag, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "./useClickOutside";

interface MoreDropdownProps {
  onBlock: () => void;
  onDelete?: () => void;
  onReport?: () => void;
  onMute?: () => void;
  showDelete?: boolean;
  showReport?: boolean;
  showMute?: boolean;
}

const MoreDropdown: React.FC<MoreDropdownProps> = ({
  onBlock,
  onDelete,
  onReport,
  onMute,
  showDelete = false,
  showReport = false,
  showMute = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false), buttonRef);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleAction = (action: () => void) => {
    return (e: React.MouseEvent) => {
      e.stopPropagation();
      action();
      setIsOpen(false);
    };
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="p-2.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
        title="More options"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-1 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Block Option */}
            <button
              onClick={handleAction(onBlock)}
              className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-colors"
            >
              <Ban className="w-4 h-4" />
              <span className="font-medium">Block</span>
            </button>

            {/* Delete Option */}
            {showDelete && onDelete && (
              <button
                onClick={handleAction(onDelete)}
                className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors border-t border-gray-100"
              >
                <Trash2 className="w-4 h-4" />
                <span className="font-medium">Delete request</span>
              </button>
            )}

            {/* Mute Option */}
            {showMute && onMute && (
              <button
                onClick={handleAction(onMute)}
                className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors"
              >
                <VolumeX className="w-4 h-4" />
                <span className="font-medium">Mute</span>
              </button>
            )}

            {/* Report Option */}
            {showReport && onReport && (
              <button
                onClick={handleAction(onReport)}
                className="w-full px-4 py-3 text-left text-sm text-orange-600 hover:bg-orange-50 flex items-center space-x-3 transition-colors border-t border-gray-100"
              >
                <Flag className="w-4 h-4" />
                <span className="font-medium">Report</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoreDropdown;
