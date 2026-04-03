import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Mintify - Play & Earn Rewards | Download on Google Play",
  description:
    "Play fun games, earn points, and redeem rewards with Mintify. Fast, secure, and easy to start. Download Mintify on Google Play today.",
  keywords: [
    "mintify",
    "play and earn",
    "rewards app",
    "mobile earning games",
    "cash rewards games",
  ],
  metadataBase: new URL("https://mintify.manus.space"),
  openGraph: {
    type: "website",
    url: "https://mintify.manus.space",
    title: "Mintify - Play & Earn Rewards",
    description: "Play, earn points, and redeem rewards. Start with Mintify on Google Play.",
    images: ["https://mintify.manus.space/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mintify - Play & Earn Rewards",
    description: "Play, earn points, and redeem rewards. Start with Mintify on Google Play.",
    images: ["https://mintify.manus.space/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script
          id="hydration-attr-cleanup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const exactAttrs = new Set(["bis_skin_checked", "bis_register", "cz-shortcut-listen"]);
  const prefixAttrs = ["__processed_"];

  const shouldRemove = (name) => exactAttrs.has(name) || prefixAttrs.some((p) => name.startsWith(p));

  const cleanElement = (el) => {
    if (!el || !el.attributes) return;
    const attrs = Array.from(el.attributes);
    for (const attr of attrs) {
      if (shouldRemove(attr.name)) el.removeAttribute(attr.name);
    }
  };

  const cleanTree = () => {
    cleanElement(document.documentElement);
    cleanElement(document.body);
    const nodes = document.querySelectorAll("*");
    for (const el of nodes) cleanElement(el);
  };

  cleanTree();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "attributes" || !mutation.attributeName) continue;
      if (shouldRemove(mutation.attributeName)) {
        mutation.target.removeAttribute(mutation.attributeName);
      }
    }
  });

  observer.observe(document.documentElement, { subtree: true, attributes: true });
})();`,
          }}
        />
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
        {process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT && process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID ? (
          <Script
            src={`${process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT}/umami`}
            data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
