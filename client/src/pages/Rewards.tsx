import { CTAButton } from "@/components/CTAButton";
import { ANALYTICS_EVENTS, TRUST_MESSAGES } from "@shared/const";
import { Gift, CreditCard, Zap, TrendingUp } from "lucide-react";

export default function Rewards() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Rewards & Redemption</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Choose from a wide variety of rewards and redeem your points instantly
          </p>
        </div>
      </section>

      {/* Reward Categories */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Gift, title: "Gift Cards", desc: "Amazon, Google Play, Starbucks, and more" },
              { icon: CreditCard, title: "Cash Rewards", desc: "Direct transfers to your bank account" },
              { icon: Zap, title: "Instant Rewards", desc: "Digital rewards delivered immediately" },
              { icon: TrendingUp, title: "Bonus Points", desc: "Earn extra points with special offers" },
            ].map((cat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
                <cat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-muted-foreground text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redemption Process */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12">How to Redeem</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Accumulate Points", desc: "Play games and earn points" },
              { step: 2, title: "Check Balance", desc: "View your points in your account" },
              { step: 3, title: "Choose Reward", desc: "Select your preferred reward" },
              { step: 4, title: "Receive Reward", desc: "Get your reward instantly" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Details */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12">Popular Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Amazon Gift Card", min: "500 points", value: "$5" },
              { name: "Google Play Card", min: "500 points", value: "$5" },
              { name: "Starbucks Card", min: "750 points", value: "$10" },
              { name: "Direct Cash", min: "1000 points", value: "$10" },
              { name: "Netflix Subscription", min: "2000 points", value: "1 Month" },
              { name: "Gaming Bundle", min: "1500 points", value: "Special" },
            ].map((reward, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-border flex justify-between items-center hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{reward.name}</h3>
                  <p className="text-muted-foreground">Minimum: {reward.min}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{reward.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12">Redemption Terms</h2>
          <div className="max-w-3xl space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Eligibility</h3>
              <p className="text-muted-foreground">{TRUST_MESSAGES.eligibility}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Processing Time</h3>
              <p className="text-muted-foreground">{TRUST_MESSAGES.redemption}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Account Policy</h3>
              <p className="text-muted-foreground">{TRUST_MESSAGES.oneAccount}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Start Earning Rewards Today</h2>
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
