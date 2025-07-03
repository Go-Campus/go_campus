// components/EventCard.jsx
import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';
import { CardImage } from '@/public';

const EventCard = ({ event }) => {
  const {
    headerText,
    title,
    dateRange,
    time,
    location,
    price,
    artists
  } = event;

  return (
   <div className='w-full'>
<Image   className='' src={CardImage}/>
   </div>
  );
};

export default EventCard;