import type { Metadata } from "next";
import "../styles/app.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Abid Al Wassie | Portfolio Website",
  description: "Full stack developer. My techstack includes, TypeScript, React, Next.js, Auth.js, Figma, Git, Tailwind, CSS3, Python, MongoDB, Firebase, Supabase, Prisma ORM, etc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
