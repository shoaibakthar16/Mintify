import Link from "next/link";
import Image from "next/image";
import { PAGES } from "@shared/const";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white/90 relative overflow-hidden mt-20">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href={PAGES.HOME} scroll onClick={handleNavClick} className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Image
                src="/logo.png"
                alt="Mintify logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold tracking-tight text-white">Mintify</span>
            </Link>
            <p className="text-white/70 text-sm leading-7 max-w-xs">
              Play games and earn rewards with a simple, secure, and user-friendly experience.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { href: PAGES.HOME, label: "Home" },
                { href: PAGES.HOW_IT_WORKS, label: "How It Works" },
                { href: PAGES.FEATURES, label: "Features" },
                { href: PAGES.REWARDS, label: "Rewards" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll
                  onClick={handleNavClick}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Resources</h3>
            <nav className="space-y-3">
              {[
                { href: PAGES.FAQ, label: "FAQ" },
                { href: PAGES.SUPPORT, label: "Support" },
                { href: PAGES.DELETE_ACCOUNT, label: "Delete Account" },
                { href: PAGES.PRIVACY, label: "Privacy Policy" },
                { href: PAGES.TERMS, label: "Terms & Conditions" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll
                  onClick={handleNavClick}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:mintifyhq@gmail.com"
                className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">mintifyhq@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-white/60 text-sm">
            <p>&copy; {year} Mintify. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href={PAGES.PRIVACY} scroll onClick={handleNavClick} className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href={PAGES.TERMS} scroll onClick={handleNavClick} className="hover:text-white transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link href={PAGES.DELETE_ACCOUNT} scroll onClick={handleNavClick} className="hover:text-white transition-colors duration-200">
                Delete Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
