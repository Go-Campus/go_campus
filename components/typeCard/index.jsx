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
      className={`flex border border-[#ADADAD40] rounded-[26px]  ${className}`}
      {...props}
    >
      {ImageSrc && (
        <div className='flex p-5 flex-col justify-center items-center w-full'>
        <Image 
          className='object-contain ' 
          src={ImageSrc}
          alt={`${props.name} icon`}
          width={56}
          // height={96}
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