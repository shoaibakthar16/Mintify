import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account | Mintify",
  description:
    "Learn how to request Mintify account deletion and what data is deleted or retained.",
  alternates: {
    canonical: "/delete-account",
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="w-full">
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Delete Account</h1>
          <p className="text-lg text-muted-foreground">
            Request deletion of your Mintify account and associated personal data.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">How to Request Deletion</h2>
            <p className="text-muted-foreground mb-4">
              You can delete your account directly from inside the Mintify app or request deletion by email.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-8">
              <li>
                In the app, go to <strong>Profile</strong> (bottom tab) and tap <strong>Delete Account</strong>.
              </li>
              <li>
                If you face any problem or cannot access the app, request deletion by email at{" "}
                <a href="mailto:mintifyhq@gmail.com">mintifyhq@gmail.com</a>.
              </li>
              <li>Use subject line: <strong>Account Deletion Request</strong>.</li>
              <li>Include your registered email and user ID (if available).</li>
            </ol>

            <h2 className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">What Data Is Deleted</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Account profile data (name, email, photo if any)</li>
              <li>In-app identifiers linked to your account</li>
              <li>Support content tied to your identity where deletion is permitted</li>
            </ul>

            <h2 className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">What Data May Be Retained</h2>
            <p className="text-muted-foreground mb-4">
              Some records may be retained for legal, fraud-prevention, dispute, tax, or security reasons.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Financial/reward audit records</li>
              <li>Security and anti-fraud logs</li>
              <li>Records required by applicable law</li>
            </ul>

            <h2 className="scroll-mt-24 text-3xl font-bold text-foreground mb-6">Processing Time</h2>
            <p className="text-muted-foreground mb-8">
              We usually process verified deletion requests within 7-30 days, depending on legal and operational requirements.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
