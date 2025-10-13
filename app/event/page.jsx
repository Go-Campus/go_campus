// import { Metadata } from 'next';
import EventPageClient from './EventPageClient';

export const metadata = {
  title: "Events - Browse Campus Events & Activities",
  description: "Browse and discover exciting campus events, workshops, conferences, and activities. Find events by category, location, and date. Register for your favorite campus events on GoCampus.",
  keywords: [
    "campus events",
    "university events",
    "event listings",
    "workshops",
    "conferences",
    "student activities",
    "event categories",
    "event registration",
    "campus activities",
    "academic events",
    "cultural events",
    "sports events",
    "networking events"
  ],
  openGraph: {
    title: "Events - Browse Campus Events & Activities",
    description: "Browse and discover exciting campus events, workshops, conferences, and activities. Find events by category, location, and date.",
    url: '/event',
    siteName: 'GoCampus',
    images: [
      {
        url: '/images/og-events.jpg',
        width: 1200,
        height: 630,
        alt: 'GoCampus Events - Browse Campus Events',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Events - Browse Campus Events & Activities",
    description: "Browse and discover exciting campus events, workshops, and activities.",
    images: ['/images/twitter-events.jpg'],
  },
  alternates: {
    canonical: '/event',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EventPage() {
  return <EventPageClient />;
}