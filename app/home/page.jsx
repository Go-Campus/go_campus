// import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata = {
  title: "Home - Discover Campus Events & Activities",
  description: "Discover and register for exciting campus events, workshops, conferences, and activities. Browse featured events, explore categories, and connect with your campus community through GoCampus.",
  keywords: [
    "campus events",
    "university events",
    "student activities", 
    "workshops",
    "conferences",
    "featured events",
    "event categories",
    "campus life",
    "student community",
    "event registration",
    "academic events",
    "cultural events",
    "sports events",
    "entertainment events"
  ],
  openGraph: {
    title: "GoCampus - Discover Campus Events & Activities",
    description: "Discover and register for exciting campus events, workshops, conferences, and activities. Browse featured events and connect with your campus community.",
    url: '/home',
    siteName: 'GoCampus',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'GoCampus Home - Campus Events Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GoCampus - Discover Campus Events & Activities",
    description: "Discover and register for exciting campus events, workshops, and activities.",
    images: ['/images/twitter-home.jpg'],
  },
  alternates: {
    canonical: '/home',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
