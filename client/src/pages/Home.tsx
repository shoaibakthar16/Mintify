import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { ANALYTICS_EVENTS, TRUST_MESSAGES } from "@shared/const";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gamepad2, Gift, TrendingUp, Users, Star, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { trackEvent } = useAnalytics();
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollDepth(Math.round(scrollPercent));

      if (scrollPercent > 25 && scrollPercent <= 26) {
        trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, { depth: 25 });
      } else if (scrollPercent > 50 && scrollPercent <= 51) {
        trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, { depth: 50 });
      } else if (scrollPercent > 75 && scrollPercent <= 76) {
        trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, { depth: 75 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackEvent]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Play Games, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Earn Rewards</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enjoy quick, fun games and collect points that you can redeem for real rewards. It's that simple.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <CTAButton
                  size="lg"
                  analyticsEvent={ANALYTICS_EVENTS.CTA_PLAYSTORE_HERO}
                >
                  Get it on Google Play
                </CTAButton>
                <Link href="/how-it-works" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200 group">
                  How It Works
                  <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full flex items-center justify-center animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-float" />
              <div className="absolute -top-6 -right-8 w-24 h-24 rounded-full bg-primary/25 blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-float" style={{ animationDelay: "0.6s" }} />

              <div className="relative group bg-white rounded-3xl shadow-2xl p-4 md:p-5 border border-primary/15 w-full max-w-md hover:shadow-[0_24px_60px_rgba(16,185,129,0.25)] transition-all duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-secondary">
                  <Image
                    src="/photo.png"
                    alt="Mintify app preview"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <div className="absolute -inset-x-20 -top-16 h-24 bg-white/30 blur-2xl rotate-12 translate-y-0 group-hover:translate-y-44 transition-transform duration-700" />
                </div>

                <div className="absolute top-8 left-8 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 border border-primary/20 shadow-sm animate-bounce-in">
                  <span className="text-xs font-semibold text-primary">Live Rewards</span>
                </div>

                <div className="absolute bottom-8 right-8 rounded-xl bg-white/90 backdrop-blur px-3 py-2 border border-border shadow-sm animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <p className="text-[11px] text-muted-foreground leading-none mb-1">Daily Earnings</p>
                  <p className="text-sm font-bold text-foreground">Up to 10,000 pts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-white">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How Mintify Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to start earning rewards today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {[
              { icon: Gamepad2, title: "Play", desc: "Download Mintify and enjoy fun, quick games" },
              { icon: TrendingUp, title: "Earn", desc: "Collect points with every game you play" },
              { icon: Gift, title: "Redeem", desc: "Convert points into real rewards" },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronDown className="w-8 h-8 text-primary/30 rotate-90 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/how-it-works" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1 group">
              Learn More <ChevronDown className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Mintify?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for players who want to earn while having fun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
            {[
              { icon: Star, title: "Variety of Games", desc: "From puzzles to action games, there's something for everyone" },
              { icon: Gift, title: "Real Rewards", desc: "Redeem points for gift cards, cash, and exclusive perks" },
              { icon: Users, title: "Fair & Transparent", desc: "No hidden rules. Earn what you play, guaranteed" },
              { icon: TrendingUp, title: "Fast Payouts", desc: "Get your rewards quickly and securely" },
            ].map((feature, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6 py-4 hover:pl-8 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/features" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1 group">
              Explore All Features <ChevronDown className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Rewards You'll Love</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Redeem your points for amazing rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {[
              { title: "Gift Cards", desc: "Amazon, Google Play, and more" },
              { title: "Cash Rewards", desc: "Direct transfers to your account" },
              { title: "Exclusive Perks", desc: "VIP access and special offers" },
            ].map((reward, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform duration-300">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reward.title}</h3>
                <p className="text-muted-foreground">{reward.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/rewards" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1 group">
              See All Rewards <ChevronDown className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Players Love Mintify</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy players earning rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {[
              { name: "Sarah M.", quote: "Finally an app where I can actually earn money playing games!" },
              { name: "James T.", quote: "The rewards are real and the payouts are fast. Highly recommend!" },
              { name: "Emma L.", quote: "Love the variety of games. Never gets boring and the rewards are great!" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-secondary to-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-white">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "Is Mintify really free?", a: "Yes, Mintify is completely free to download and play. No hidden fees!" },
                { q: "How do I get paid?", a: "You can redeem points for gift cards, cash transfers, or exclusive rewards. Payouts are processed within 24-48 hours." },
                { q: "Can I play on multiple devices?", a: "One account per user/device policy applies. This ensures fair play for everyone." },
                { q: "Are the rewards guaranteed?", a: "Rewards are subject to eligibility and anti-fraud checks. We ensure fair play for all players." },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors duration-200">
                  <AccordionTrigger
                    onClick={() => trackEvent(ANALYTICS_EVENTS.FAQ_EXPAND, { question: item.q })}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
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

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/faq" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1 group">
              View All FAQs <ChevronDown className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/95 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Ready to Start Earning?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Download Mintify today and join thousands of players earning real rewards
          </p>
          <CTAButton
            size="lg"
            analyticsEvent={ANALYTICS_EVENTS.CTA_PLAYSTORE_MID}
            className="bg-white text-primary hover:bg-white/90 animate-bounce-in"
          >
            Download Mintify on Google Play
          </CTAButton>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="py-12 bg-muted/50">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            {TRUST_MESSAGES.eligibility} {TRUST_MESSAGES.redemption} {TRUST_MESSAGES.oneAccount}
          </p>
        </div>
      </section>
    </div>
  );
}
