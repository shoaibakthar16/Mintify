import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { ANALYTICS_EVENTS } from "@shared/const";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="container text-center py-20">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
            Back to Home
          </Link>
          <CTAButton
            size="lg"
            analyticsEvent={ANALYTICS_EVENTS.CTA_PLAYSTORE_MID}
          >
            Download Mintify
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
