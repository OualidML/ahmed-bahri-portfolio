import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Oualid Bahri | AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Ahmed Oualid Bahri - AI Engineer, Data Scientist, Full-Stack Developer, and Python Coach. Specialized in multimodal AI, temperature scaling calibration, and offline-first architectures.",
  keywords: [
    "Ahmed Oualid Bahri",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Deep Learning",
    "Full-Stack Developer",
    "Python Coach",
    "Multimodal AI",
    "Next.js",
  ],
  authors: [{ name: "Ahmed Oualid Bahri" }],
  creator: "Ahmed Oualid Bahri",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
