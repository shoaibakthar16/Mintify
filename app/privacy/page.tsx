import type { Metadata } from "next";
import Privacy from "@/pages/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Mintify",
  description:
    "Read the Mintify Privacy Policy to understand what data we collect, how we use it, and your privacy rights.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Mintify",
    description:
      "Read the Mintify Privacy Policy to understand what data we collect, how we use it, and your privacy rights.",
    url: "/privacy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Mintify",
    description:
      "Read the Mintify Privacy Policy to understand what data we collect, how we use it, and your privacy rights.",
  },
};

export default function Page() {
  return <Privacy />;
}
