import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import { SmoothCursor } from "@/components/basic/smooth-cursor";
import { ProjectDrawer } from "@/components/basic/project-drawer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apoorva",
  description: "Apoorva's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <SmoothCursor />
        <main data-vaul-drawer-wrapper className="bg-background">
          {children}
          <ProjectDrawer />
        </main>
      </body>
    </html>
  );
}
