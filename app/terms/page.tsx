import type { Metadata } from "next";
import Terms from "@/pages/Terms";

export const metadata: Metadata = {
  title: "Terms and Conditions | Mintify",
  description:
    "Review Mintify Terms and Conditions, including eligibility, rewards rules, prohibited activities, and account policies.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms and Conditions | Mintify",
    description:
      "Review Mintify Terms and Conditions, including eligibility, rewards rules, prohibited activities, and account policies.",
    url: "/terms",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | Mintify",
    description:
      "Review Mintify Terms and Conditions, including eligibility, rewards rules, prohibited activities, and account policies.",
  },
};

export default function Page() {
  return <Terms />;
}
