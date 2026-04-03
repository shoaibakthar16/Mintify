import { Shield, Zap, Headphones } from "lucide-react";

export function TrustBar() {
  return (
    <div className="bg-secondary py-4 border-b border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Secure Payouts</p>
              <p className="text-xs text-muted-foreground">Fast and reliable</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Fair Play Checks</p>
              <p className="text-xs text-muted-foreground">Anti-fraud protection</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Responsive Support</p>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
