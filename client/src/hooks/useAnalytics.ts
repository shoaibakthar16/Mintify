import { useCallback } from "react";

export function useAnalytics() {
  const trackEvent = useCallback((eventName: string, data?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(eventName, data);
    }
  }, []);

  const trackScroll = useCallback((depth: number) => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("scroll_depth", { depth });
    }
  }, []);

  return { trackEvent, trackScroll };
}
