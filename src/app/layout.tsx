import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "AiAvatar",
  description: "AI App to work on images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }
    }>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <main className='root'>
            <Sidebar />
            <MobileNav />
            <div className='root-container'>
              <div className='wrapper'>
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider >
  );
}
