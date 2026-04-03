import { CTAButton } from "@/components/CTAButton";
import { ANALYTICS_EVENTS } from "@shared/const";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useAnalytics } from "@/hooks/useAnalytics";
import Link from "next/link";

export default function FAQ() {
  const { trackEvent } = useAnalytics();

  const faqs = [
    { category: "Getting Started", items: [
      { q: "Is Mintify free to download?", a: "Yes, Mintify is completely free to download and play. There are no hidden fees or charges." },
      { q: "How do I sign up?", a: "Download Mintify from Google Play, open the app, and follow the simple sign-up process. You can sign up with email or social media." },
      { q: "What devices does Mintify work on?", a: "Mintify works on all Android devices running Android 8.0 or higher." },
      { q: "Do I need an internet connection?", a: "You need internet to download and sync your account. Some games can be played offline." },
    ]},
    { category: "Earning & Points", items: [
      { q: "How do I earn points?", a: "You earn points by playing games. Different games offer different point values based on difficulty and duration." },
      { q: "How much can I earn?", a: "Earnings depend on how much you play and which games you play. Most players earn $5-$20 per week." },
      { q: "Are points earned instantly?", a: "Yes, points are credited to your account immediately after completing a game." },
      { q: "Can I lose points?", a: "No, points never decrease. You can only earn more." },
    ]},
    { category: "Rewards & Redemption", items: [
      { q: "What rewards can I redeem?", a: "You can redeem points for gift cards, cash, cryptocurrency, and exclusive merchandise." },
      { q: "How long does redemption take?", a: "Most rewards are delivered within 24-48 hours. Some instant rewards are available immediately." },
      { q: "Is there a minimum redemption amount?", a: "Yes, most rewards require a minimum of 500-1000 points depending on the reward." },
      { q: "Can I redeem multiple times?", a: "Yes, you can redeem as many times as you want as long as you have enough points." },
    ]},
    { category: "Account & Security", items: [
      { q: "Is my personal information safe?", a: "Yes, we use industry-standard encryption to protect your data. Your information is never shared with third parties." },
      { q: "Can I have multiple accounts?", a: "One account per user/device policy applies. Multiple accounts will be flagged for anti-fraud checks." },
      { q: "What if I forget my password?", a: "You can reset your password using the 'Forgot Password' option on the login screen." },
      { q: "How do I delete my account?", a: "You can request account deletion from the settings menu. Your data will be permanently removed." },
    ]},
    { category: "Troubleshooting", items: [
      { q: "Why aren't my points showing up?", a: "Points usually appear instantly. If there's a delay, try refreshing the app or restarting your device." },
      { q: "I can't download a game. What should I do?", a: "Check your internet connection and available storage space. Try clearing the app cache and try again." },
      { q: "The app keeps crashing. How do I fix it?", a: "Try updating to the latest version, clearing the cache, or reinstalling the app." },
      { q: "I didn't receive my reward. What now?", a: "Contact our support team with your order number. We'll investigate and resolve it within 24 hours." },
    ]},
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Find answers to common questions about Mintify
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-16">
            {faqs.map((section, sidx) => (
              <div key={sidx}>
                <h2 className="text-3xl font-bold text-foreground mb-8">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4 max-w-3xl">
                  {section.items.map((item, idx) => (
                    <AccordionItem key={idx} value={`${sidx}-${idx}`} className="border border-border rounded-lg px-6">
                      <AccordionTrigger
                        onClick={() => trackEvent(ANALYTICS_EVENTS.FAQ_EXPAND, { question: item.q, category: section.category })}
                        className="text-lg font-semibold text-foreground hover:text-primary"
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us anytime and we'll get back to you within 24 hours.
          </p>
          <Link href="/support" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1">
            Contact Support
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <CTAButton
            size="lg"
            analyticsEvent={ANALYTICS_EVENTS.CTA_PLAYSTORE_MID}
            className="bg-white text-primary hover:bg-white/90"
          >
            Download Mintify
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
