import React from 'react'
type info={
    insitution:string,
    duration:string,
    qualifiation:string
}

function Card(information:info) {
  return (
    <section className='overflow-y-hidden max-w-screen-sm items-center justify-center'>
    <div className='flex flex-col w-full p-4 '>
     <div className='flex flex-row justify-between md:space-x-2'>
     <div className='text-pretty '>
     <p className='text-wrap'>{information.qualifiation}</p>
     </div>
 
       <p>{information.duration}</p>
     </div>
     <div className='border-2 border-[#343434] rounded-md p-1 w-fit mt-2'>
       <p className='text-[10px]'> {information.insitution}</p>
     </div>
    </div>
     </section>
  )
}

export default Card
