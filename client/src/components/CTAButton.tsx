import { Button } from "@/components/ui/button";
import { PLAYSTORE_URL, ANALYTICS_EVENTS } from "@shared/const";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  className?: string;
  analyticsEvent?: string;
  onClick?: () => void;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  analyticsEvent = ANALYTICS_EVENTS.CTA_PLAYSTORE_MID,
  onClick,
}: CTAButtonProps) {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent(analyticsEvent);
    if (onClick) onClick();
    window.open(PLAYSTORE_URL, "_blank", "noopener,noreferrer");
  };

  const variantMap = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-200 relative overflow-hidden group",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200",
    outline: "border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-200",
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`${variantMap[variant]} font-semibold ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer" />
      )}
    </Button>
  );
}
