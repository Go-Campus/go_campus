import Image from 'next/image'

const TypeCard = ({
  Image: ImageSrc,
   // Renaming to avoid conflict with Next.js Image component
  className = '',
  ...props
}) => {
  return (
    <div
      className={`  justify-center items-center flex  border border-[#ADADAD40] rounded-[26px] p-5 ${className}`}
      {...props}
    >
      {ImageSrc && (
        <div className='flex flex-col justify-center items-center'>
        <Image 
          className=' object-contain' 
          src={ImageSrc}
          alt="Type card image"
          width={96}
          height={96}
        />
        <p className='flex justify-center items-center text-[16px]'>
            {props.name}
        </p>
        </div>
      )}
    </div>
  )
}

export default TypeCard