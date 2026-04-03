import { CTAButton } from "@/components/CTAButton";
import { ANALYTICS_EVENTS } from "@shared/const";
import { Star, Zap, Users, Trophy, Smartphone, Shield } from "lucide-react";

export default function Features() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Features That Make Mintify Special</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover what sets Mintify apart from other earning apps
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Variety of Games",
                desc: "From casual puzzles to action-packed adventures, choose games that match your mood and skill level.",
              },
              {
                icon: Zap,
                title: "Instant Rewards",
                desc: "Earn points instantly with every game. Watch your balance grow in real-time.",
              },
              {
                icon: Users,
                title: "Social Features",
                desc: "Compete with friends, join tournaments, and climb the leaderboards.",
              },
              {
                icon: Trophy,
                title: "Daily Challenges",
                desc: "Complete special challenges every day for bonus points and exclusive rewards.",
              },
              {
                icon: Smartphone,
                title: "Smooth Performance",
                desc: "Optimized for all devices. Play smoothly whether you're on WiFi or mobile data.",
              },
              {
                icon: Shield,
                title: "Secure & Safe",
                desc: "Your data is encrypted and protected. Play with confidence knowing you're secure.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-16">Explore Our Features</h2>

          <div className="space-y-16">
            {[
              {
                title: "Diverse Game Library",
                desc: "We constantly update our game collection with new titles. Whether you love strategy, action, or casual games, you'll find something you enjoy.",
                features: [
                  "Hundreds of games to choose from",
                  "New games added weekly",
                  "Games for all skill levels",
                  "Offline play available",
                ],
              },
              {
                title: "Flexible Redemption",
                desc: "Redeem your points for what matters to you. We offer a wide range of rewards to suit every preference.",
                features: [
                  "Gift cards from major retailers",
                  "Direct cash transfers",
                  "Cryptocurrency options",
                  "Exclusive merchandise",
                ],
              },
              {
                title: "Competitive Tournaments",
                desc: "Test your skills against other players and win big prizes. Tournaments run daily with varying difficulty levels.",
                features: [
                  "Daily tournaments",
                  "Weekly championships",
                  "Monthly grand prizes",
                  "Leaderboard rankings",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-bold text-foreground mb-4">{section.title}</h3>
                <p className="text-lg text-muted-foreground mb-8">{section.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, fidx) => (
                    <div key={fidx} className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Experience All Features Today</h2>
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
