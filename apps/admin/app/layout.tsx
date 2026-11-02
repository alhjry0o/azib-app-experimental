import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'عازب | AZIB — لوحة الإدارة',
  description: 'لوحة إدارة مشروع عازب لتيسير الزواج في اليمن',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#07040D] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
