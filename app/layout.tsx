import '#app/styles/globals.css';

import type { Metadata } from 'next';

import React from 'react';
import { Inter } from 'next/font/google';
import Provider from '#app/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}