import Image from 'next/image';
import React from 'react'

const AboutCard = ({item}) => {
  return (
    <div className='w-[450px]'>
        <div className="img">
            <Image src={item.src} alt='about card' width={`450px`} height={`450px`} />
        </div>
        <div className="description mt-5 flex gap-3">
            <div className="icons">
                <Image src={item.icon} alt='about card' width={`50px`} height={`50px`} />
            </div>
            <div className="text-desc">
                <h3 className='text-2xl text-[#444] font-semibold'>{item.title}</h3>
                <p className='text-[#300] pt-2'>{item.desc}</p>
                <button className='text-blue-600 font-bold'>See more </button>
            </div>
        </div>
    </div>
  )
}

export default AboutCard;