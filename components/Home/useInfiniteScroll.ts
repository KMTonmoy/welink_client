"use client";

import { useEffect, useCallback, useRef } from "react";

const useInfiniteScroll = (
  loadMore: () => Promise<void>,
  hasMore: boolean,
  threshold: number = 100, // pixels from bottom
) => {
  const isLoadingRef = useRef(false);

  const handleScroll = useCallback(async () => {
    if (isLoadingRef.current || !hasMore) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Load more when within threshold of bottom
    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      isLoadingRef.current = true;
      try {
        await loadMore();
      } finally {
        isLoadingRef.current = false;
      }
    }
  }, [loadMore, hasMore, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isLoading: isLoadingRef.current };
};

export default useInfiniteScroll;
