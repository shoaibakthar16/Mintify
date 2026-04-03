import { CTAButton } from "./CTAButton";
import { ANALYTICS_EVENTS } from "@shared/const";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-border shadow-lg p-4 z-40">
      <CTAButton
        size="lg"
        analyticsEvent={ANALYTICS_EVENTS.CTA_PLAYSTORE_STICKY}
        className="w-full"
      >
        Install Mintify
      </CTAButton>
    </div>
  );
}
