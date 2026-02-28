import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickHire — Discover Your Next Career Move",
  description:
    "Great platform for job seekers searching for new career heights. Browse 5000+ jobs and find your dream role.",
  keywords: ["jobs", "hiring", "career", "job board", "remote jobs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/029689055aab954f65aac69f5bdfdd26?family=Clash+Display"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
