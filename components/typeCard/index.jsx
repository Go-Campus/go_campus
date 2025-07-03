import Image from 'next/image'

const TypeCard = ({
  Image: ImageSrc,
   // Renaming to avoid conflict with Next.js Image component
  className = '',
  ...props
}) => {
  // Log component rendering for debugging
  console.log('TypeCard component rendered:', { name: props.name, className });

  return (
    <div
      className={`justify-center items-center flex border border-[#ADADAD40] rounded-[26px] p-3 sm:p-4 md:p-5 ${className}`}
      {...props}
    >
      {ImageSrc && (
        <div className='flex flex-col justify-center items-center w-full'>
        <Image 
          className='object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' 
          src={ImageSrc}
          alt={`${props.name} icon`}
          width={96}
          height={96}
        />
        <p className='flex justify-center items-center text-xs sm:text-sm md:text-base text-center mt-2'>
            {props.name}
        </p>
        </div>
      )}
    </div>
  )
}

export default TypeCard