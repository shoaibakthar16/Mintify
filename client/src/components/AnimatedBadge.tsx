import { ReactNode } from "react";

interface AnimatedBadgeProps {
  children: ReactNode;
  variant?: "primary" | "success" | "warning" | "info";
  animated?: boolean;
}

export function AnimatedBadge({ children, variant = "primary", animated = true }: AnimatedBadgeProps) {
  const variantMap = {
    primary: "bg-primary/10 text-primary border-primary/20",
    success: "bg-green-100 text-green-700 border-green-200",
    warning: "bg-orange-100 text-orange-700 border-orange-200",
    info: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
        variantMap[variant]
      } ${animated ? "animate-scale-in" : ""}`}
    >
      {children}
    </span>
  );
}
