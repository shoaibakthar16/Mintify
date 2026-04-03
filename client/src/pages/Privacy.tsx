export default function Privacy() {
  return (
    <div className="w-full">
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container text-center">
          <h1
            id="privacy-policy-heading"
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: 2026-04-03</p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <article className="prose prose-lg max-w-none" aria-labelledby="privacy-policy-heading">
            <p className="text-muted-foreground mb-8">
              Mintify (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides a mobile app where users can play
              skill-based games, earn points, join tournaments, and redeem eligible rewards.
            </p>
            <p className="text-muted-foreground mb-8">
              This Privacy Policy explains what information we collect, how we use it, and your
              rights.
            </p>

            <h2 id="information-we-collect" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">We may collect the following categories of data:</p>
            <p className="text-muted-foreground mb-2">1. Account and profile information</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Email address</li>
              <li>Name/display name</li>
              <li>Profile photo URL (if provided)</li>
              <li>Country and language preferences</li>
              <li>User account ID</li>
            </ul>
            <p className="text-muted-foreground mb-2">2. App usage and rewards information</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Game scores and gameplay outcomes</li>
              <li>Tournament participation and rankings</li>
              <li>Reward points earned/spent</li>
              <li>Ledger and redemption history</li>
            </ul>
            <p className="text-muted-foreground mb-2">3. Redemption and payout information</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Payout destination details (for example PayPal email, Airtm details, eSewa/Khalti
                number)
              </li>
              <li>
                Account holder name, phone number, and bank name when required
              </li>
              <li>Redemption status and related records</li>
            </ul>
            <p className="text-muted-foreground mb-2">4. Support information</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Support ticket description</li>
              <li>Screenshot/image attachments submitted by you</li>
            </ul>
            <p className="text-muted-foreground mb-2">5. Device and technical information</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                Device/app identifiers and diagnostics necessary for app operation, anti-fraud, and
                analytics
              </li>
              <li>Ad-related identifiers (including Android Advertising ID where applicable)</li>
              <li>
                Security signals (for example emulator/root/mock-location checks, where supported)
              </li>
            </ul>
            <p className="text-muted-foreground mb-2">6. Advertising and monetization data</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Rewarded/interstitial ad interaction events</li>
              <li>Offerwall/postback transaction references where applicable</li>
            </ul>

            <h2 id="how-we-use-your-information" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">We use your data to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Create and manage your account</li>
              <li>Provide gameplay, tournaments, and rewards features</li>
              <li>Process and review redemption requests</li>
              <li>Prevent abuse, fraud, and security violations</li>
              <li>Provide customer support and resolve disputes</li>
              <li>Improve app quality, performance, and reliability</li>
              <li>Deliver and measure ads and monetization events</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h2 id="legal-basis" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              3. Legal Basis (where applicable)
            </h2>
            <p className="text-muted-foreground mb-4">Depending on your location, we process data based on:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Contract performance (providing app services)</li>
              <li>Legitimate interests (security, fraud prevention, service improvement)</li>
              <li>Consent (where required)</li>
              <li>Legal compliance obligations</li>
            </ul>

            <h2 id="sharing-of-information" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              4. Sharing of Information
            </h2>
            <p className="text-muted-foreground mb-4">We may share data with:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Cloud/backend providers for authentication, storage, and app functionality</li>
              <li>Advertising and attribution/measurement partners</li>
              <li>
                Payment/reward operations partners (only as needed for redemption processing)
              </li>
              <li>Customer support and infrastructure vendors</li>
              <li>Authorities where required by law</li>
            </ul>
            <p className="text-muted-foreground mb-8">We do not sell your personal information in exchange for money.</p>

            <h2 id="data-retention" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              5. Data Retention
            </h2>
            <p className="text-muted-foreground mb-8">
              We keep data only as long as needed for service operation, security and fraud
              prevention, financial/reward audit trails, and legal/compliance requirements.
              Retention periods may vary by data type and jurisdiction.
            </p>

            <h2 id="data-security" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              6. Data Security
            </h2>
            <p className="text-muted-foreground mb-8">
              We use reasonable administrative, technical, and organizational safeguards to protect
              your information. No method of transmission or storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>

            <h2 id="your-rights" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              7. Your Rights
            </h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and associated personal data</li>
              <li>Object to or restrict certain processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-muted-foreground mb-8">To submit a request, contact us using the details below.</p>

            <h2 id="account-deletion" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              8. Account Deletion
            </h2>
            <p className="text-muted-foreground mb-8">
              You can request account deletion from within the app and/or by contacting support.
              When deletion is completed, we delete or anonymize personal data unless retention is
              required by law, security, fraud prevention, dispute handling, or legitimate business
              records.
            </p>

            <h2 id="childrens-privacy" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              9. Children
            </h2>
            <p className="text-muted-foreground mb-8">
              Mintify is not directed to children under 13 (or the minimum age required in your
              region). If you believe a child provided personal data, contact us and we will take
              appropriate action.
            </p>

            <h2 id="international-transfers" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              10. International Transfers
            </h2>
            <p className="text-muted-foreground mb-8">
              Your data may be processed in countries other than your own. We use appropriate
              safeguards as required by applicable law.
            </p>

            <h2 id="third-party-services" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              11. Third-Party Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Our app may use third-party services (for example ads, authentication, storage,
              analytics, and payment-related systems). Their processing is governed by their own
              privacy notices.
            </p>

            <h2 id="changes-to-this-policy" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              12. Changes to This Policy
            </h2>
            <p className="text-muted-foreground mb-8">
              We may update this Privacy Policy from time to time. Material updates will be notified
              through the app or by other appropriate means. Continued use after updates means you
              accept the revised policy.
            </p>

            <h2 id="contact-us" className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">
              13. Contact Us
            </h2>
            <p className="text-muted-foreground mb-4">If you have privacy questions or requests, contact:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>
                <a href="mailto:mintifyhq@gmail.com">mintifyhq@gmail.com</a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
