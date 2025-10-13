import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "GoCampus - Discover & Register for Campus Events",
    template: "%s | GoCampus"
  },
  description: "Discover and register for exciting campus events, workshops, and activities. Connect with your community through GoCampus - your gateway to campus life.",
  keywords: [
    "campus events",
    "university events", 
    "student activities",
    "workshops",
    "conferences",
    "networking events",
    "academic events",
    "cultural events",
    "sports events",
    "entertainment",
    "event registration",
    "campus life",
    "student community"
  ],
  authors: [{ name: "GoCampus Team" }],
  creator: "GoCampus",
  publisher: "GoCampus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://gocampus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'GoCampus - Discover & Register for Campus Events',
    description: 'Discover and register for exciting campus events, workshops, and activities. Connect with your community through GoCampus.',
    siteName: 'GoCampus',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GoCampus - Campus Events Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoCampus - Discover & Register for Campus Events',
    description: 'Discover and register for exciting campus events, workshops, and activities.',
    images: ['/images/twitter-image.jpg'],
    creator: '@gocampus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
