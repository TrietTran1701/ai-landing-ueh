import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World AI Creativity Award",
  description: "The 1st World AI-Powered Image & Visual Awards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sf-pro antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
