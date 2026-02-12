"use client";

import { useEffect, RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  excludeRef?: RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!excludeRef?.current ||
          !excludeRef.current.contains(event.target as Node))
      ) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler, excludeRef]);
};
