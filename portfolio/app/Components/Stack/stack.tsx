import React from 'react'
type props ={
    svg:React.JSX.Element,
    name:string,
    discription:string,
}
function Stack({svg,name,discription}:props) {
  return (
    <div className="col-span-4 md:col-span-2   bg-neutral-900/90 rounded-lg  text-xs space-y-2 p-6  ">
        {svg}
       
        <p className=" justify-self-start rounded-md border-2 border-stone-800 p-2 ">{name}</p>
        
        <p className=" justify-self-start rounded-md border-2 border-stone-800 p-1 ">{discription}</p>
      </div>
  )
}

export default Stack