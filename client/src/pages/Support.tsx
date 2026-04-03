import { CTAButton } from "@/components/CTAButton";
import { ANALYTICS_EVENTS } from "@shared/const";
import { Mail, MessageSquare, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function Support() {
  const { trackEvent } = useAnalytics();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent(ANALYTICS_EVENTS.SUPPORT_SUBMIT, { subject: formData.subject });
    alert("Thank you for contacting us! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Support & Help</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We're here to help. Get in touch with our support team
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Mail, title: "Email", desc: "mintifyhq@gmail.com", time: "24-48 hours" },
              { icon: MessageSquare, title: "Chat", desc: "In-app chat support", time: "Usually instant" },
              { icon: Phone, title: "Phone", desc: "+1 (555) 123-4567", time: "Mon-Fri 9am-5pm" },
              { icon: Clock, title: "Response Time", desc: "Average 4 hours", time: "24/7 monitoring" },
            ].map((method, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow">
                <method.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{method.desc}</p>
                <p className="text-xs text-primary font-semibold">{method.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 border border-border">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="bug">Report a Bug</option>
                  <option value="payment">Payment Issue</option>
                  <option value="reward">Reward Problem</option>
                  <option value="account">Account Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Getting Started?</h2>
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
