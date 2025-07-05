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
  console.log(event)

  return (
    <div className='w-full flex flex-col mb-[10px] border border-[#E2E4E9] rounded-[25px]'>
      <div className='w-full'>
        <Image className='w-full object-cover' src={CardImage} />
      </div>
      <div className='flex flex-col py-3 gap-[30px]'>
        <div className='px-4 flex flex-col gap-[5px]'>
          <p className='font-[600] text-[14px] text-[#FF5F4A]'>
            {event.dateRange} | {event.time}
          </p>
          <h2 className='font-[600] text-[18px] text-[#31353F]'>
            {event.title}
          </h2>
          <p className='font-[500] text-[14px] text-[#868C98] '>
            {event.location}
          </p>
        </div>
        <div className='flex items-center justify-between px-4'>
          <p className='font-[600] text-[18px] text-[#000000] '>
            ₹{event.price}
          </p>
          {event.discount &&
            <p className='font-[400] text-[12px] text-[#FFFFFF] text-center bg-[#FF5F4A] rounded-[5px] px-[6px] py-[4px]'>
              {event.discount}
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default EventCard;