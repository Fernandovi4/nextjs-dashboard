import '@/app/ui/global.css';
import React from "react";
import { inter } from '@/app/ui/fonts';

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
