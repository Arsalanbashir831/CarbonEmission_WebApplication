import React from 'react'
import graph from '../assets/Graph.svg'
import chart from '../assets/Chart.svg'
import exporticon from '../assets/export.png'
import importicon from '../assets/import.png'
import talk from '../assets/talk.png'
import { Link } from 'react-router-dom'

const navdata=[
    {id : '1' , name:"Overview" , pic :graph , referenceLink:'/dashboard/'},
    {id : '2' ,name: "Manage Facility" , pic : chart , referenceLink:'/dashboard/Facility'},
    {id : '3' ,name: "Input" , pic : importicon ,  referenceLink:'/dashboard/input'},
    {id : '4' ,name: "Manage Organization" , pic : exporticon ,  referenceLink:'/dashboard/organizations'},
    {id : '5' ,name: "Talk" , pic : talk ,  referenceLink:'/dashboard/help'}
]
const navigation = () => {
  return (
   <>
     <li>
        <div className='flex  flex-col  justify-start gap-3 text-left'>
           {navdata.map((data)=>{
            return(<>
                <div className='flex gap-2 justify-start text-left items-center'>
                <img className=' col-span-6 w-[20px]' src={data.pic} alt="" srcset="" />
               <Link  to={data.referenceLink}> <h5 className='text-left col-span-6 cursor-pointer'>{data.name}</h5></Link>
                </div>
               
            </>)
           })}
         
         
        </div>
     </li>
   </>
        
  )
}


export default navigation