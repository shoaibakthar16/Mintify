import Link from "next/link";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { PAGES, ANALYTICS_EVENTS } from "@shared/const";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect, useState } from "react";

export function Header() {
  const { trackEvent } = useAnalytics();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-border shadow-lg" 
        : "bg-white border-b border-border/50 shadow-sm"
    }`}>
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={PAGES.HOME} className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity duration-200 group">
          <Image
            src="/logo.png"
            alt="Mintify logo"
            width={32}
            height={32}
            className="rounded-lg group-hover:scale-110 transition-transform duration-200"
          />
          <span className="hidden sm:inline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Mintify</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: PAGES.HOW_IT_WORKS, label: "How It Works", event: ANALYTICS_EVENTS.HOW_IT_WORKS_CLICK },
            { href: PAGES.FEATURES, label: "Features", event: ANALYTICS_EVENTS.FEATURES_VIEW },
            { href: PAGES.REWARDS, label: "Rewards", event: ANALYTICS_EVENTS.REWARDS_VIEW },
            { href: PAGES.FAQ, label: "FAQ", event: null },
            { href: PAGES.PRIVACY, label: "Privacy", event: null },
            { href: PAGES.TERMS, label: "Terms & Conditions", event: null },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              onClick={() => {
                if (item.event) trackEvent(item.event);
                handleNavClick();
              }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <CTAButton
          size="sm"
          analyticsEvent={ANALYTICS_EVENTS.CTA_PLAYSTORE_NAV}
          className="animate-bounce-in"
        >
          Download App
        </CTAButton>
      </div>
    </header>
  );
}
