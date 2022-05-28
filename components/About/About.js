import React from 'react'
import AboutCard from './AboutCard'

const aboutItems = [
  {
    id:1,
    title: 'Fast delivery',
    desc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero!',
    src: '/images/adult-blur-blurred-background-687824.png',
    icon: '/images/icons/fast-delivery.png'
  },
  {
    id:2,
    title: 'A Good Auto Responder',
    desc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero!',
    src: '/images/chef-cook-food-33614.png',
    icon: '/images/icons/auto.png'
  },
  {
    id:3,
    title: 'Home delivery',
    desc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero!',
    src: '/images/architecture-building-city-2047397.png',
    icon: '/images/icons/home-delivery.png'
  }
]



const About = () => {
  return (
    <div className='about py-10 px-[10%]'>
        <div className="upper-text">
          <h3 className='font-bold text-4xl text-[#333]'>Why you choose us</h3>  
          <p className='py-5 pb-20 font-semibold  text-[#333]'>Barton waited twenty always repair in within we do.
              An delighted offending <br/> curiosity my is dashwoods at. 
              Boy prosperous increasing surrounded.</p>
        </div>
        <div className='flex justify-between flex-wrap'>
          {
            aboutItems.map( item => <AboutCard key={item.id} item={item} />)
          }

        </div>
        
    </div>
  )
}

export default About;