// import { Metadata } from 'next';
import { getData } from '@/utils/api';
import EventDetailsClient from './EventDetailsClient';

// Generate dynamic metadata based on event data
export async function generateMetadata({ searchParams }) {
  const slug = searchParams?.slug;
  
  if (!slug) {
    return {
      title: "Event Details - GoCampus",
      description: "View detailed information about campus events, including dates, venue, tickets, and more on GoCampus.",
    };
  }

  try {
    const response = await getData(`/event?slug=${encodeURIComponent(slug)}&limit=1`);
    const event = response?.response?.[0];
    
    if (!event) {
      return {
        title: "Event Not Found - GoCampus",
        description: "The requested event could not be found.",
      };
    }

    const eventTitle = event.title || 'Campus Event';
    const eventDescription = event.description 
      ? event.description.replace(/<[^>]*>/g, '').substring(0, 160) + '...'
      : `Join us for ${eventTitle} - an exciting campus event. Register now and be part of this amazing experience.`;
    
    const eventDate = event.startDate 
      ? new Date(event.startDate).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      : 'Date TBA';
    
    const eventVenue = event.venue || 'Venue TBA';
    const eventImage = event.banner || event.logo || '/images/og-event-details.jpg';
    
    // Build image URL
    const getImageUrl = (imagePath) => {
      if (!imagePath) return '/images/og-event-details.jpg';
      if (imagePath.startsWith('/')) return imagePath;
      if (imagePath.startsWith('http')) return imagePath;
      const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://event-manager.syd1.cdn.digitaloceanspaces.com';
      return `${cdnUrl}/${imagePath}`;
    };

    return {
      title: `${eventTitle} - Event Details | GoCampus`,
      description: eventDescription,
      keywords: [
        eventTitle.toLowerCase(),
        'campus event',
        'university event',
        'student event',
        eventVenue.toLowerCase(),
        eventDate,
        'event registration',
        'tickets',
        'campus activities'
      ],
      openGraph: {
        title: `${eventTitle} - Event Details`,
        description: eventDescription,
        url: `/event-details?slug=${slug}`,
        siteName: 'GoCampus',
        images: [
          {
            url: getImageUrl(eventImage),
            width: 1200,
            height: 630,
            alt: `${eventTitle} - Event Banner`,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${eventTitle} - Event Details`,
        description: eventDescription,
        images: [getImageUrl(eventImage)],
      },
      alternates: {
        canonical: `/event-details?slug=${slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
      other: {
        'event:start_time': event.startDate,
        'event:end_time': event.endDate,
        'event:location': eventVenue,
        'event:organizer': event.franchise?.name || 'GoCampus',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: "Event Details - GoCampus",
      description: "View detailed information about campus events on GoCampus.",
    };
  }
}

export default function EventDetailsPage() {
  return <EventDetailsClient />;
}
