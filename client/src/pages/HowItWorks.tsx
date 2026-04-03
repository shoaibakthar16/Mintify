import { CTAButton } from "@/components/CTAButton";
import { ANALYTICS_EVENTS } from "@shared/const";
import { Gamepad2, TrendingUp, Gift, Zap, Users, Award } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary via-white to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">How Mintify Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Get started in minutes and start earning rewards today
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-16 stagger-container">
            {[
              {
                step: 1,
                icon: Gamepad2,
                title: "Download & Sign Up",
                desc: "Get Mintify from Google Play and create your account in seconds. No complicated setup required.",
              },
              {
                step: 2,
                icon: Zap,
                title: "Play Your Favorite Games",
                desc: "Choose from our collection of fun, engaging games. Play at your own pace—no time limits or pressure.",
              },
              {
                step: 3,
                icon: TrendingUp,
                title: "Earn Points",
                desc: "Every game you play earns you points. The more you play, the more you earn. It's that simple.",
              },
              {
                step: 4,
                icon: Gift,
                title: "Redeem Rewards",
                desc: "Convert your points into gift cards, cash, or exclusive rewards. Redeem whenever you want.",
              },
              {
                step: 5,
                icon: Award,
                title: "Get Paid",
                desc: "Receive your rewards via your preferred method. Fast, secure, and transparent payouts.",
              },
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group hover:pl-4 transition-all duration-300">
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                          <item.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                        </div>
                        <div>
                          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Step {item.step}</p>
                          <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-white rounded-2xl p-12 flex items-center justify-center h-64 border border-border group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                      <item.icon className="w-32 h-32 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 animate-float" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gradient-to-br from-secondary to-white rounded-2xl p-12 flex items-center justify-center h-64 border border-border group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 order-2 md:order-1">
                      <item.icon className="w-32 h-32 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 animate-float" style={{ animationDelay: "0.5s" }} />
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                          <item.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                        </div>
                        <div>
                          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Step {item.step}</p>
                          <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12 animate-fade-in-up">Tips to Maximize Your Earnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
            {[
              "Play daily to build a consistent earning streak",
              "Try different games to find your favorites",
              "Complete bonus challenges for extra points",
              "Refer friends and earn commission rewards",
              "Participate in tournaments for big prizes",
              "Check for limited-time offers regularly",
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-4 group p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 hover:pl-6">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-foreground group-hover:text-primary transition-colors duration-300">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary/95 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Start?</h2>
          <CTAButton
            size="lg"
            analyticsEvent={ANALYTICS_EVENTS.CTA_PLAYSTORE_MID}
            className="bg-white text-primary hover:bg-white/90 animate-bounce-in"
          >
            Download Mintify Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
