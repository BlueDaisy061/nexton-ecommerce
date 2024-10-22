'use client';

import './globals.css';
import { poppins } from './ui/fonts';
import React from 'react';
import { ThemeProvider } from './(context)/context';
import { Header } from './ui/header';
import { Footer } from './ui/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeProvider>
          <Header />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
