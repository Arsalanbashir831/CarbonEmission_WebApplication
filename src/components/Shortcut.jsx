import React from 'react'
import warning from '../assets/Danger.svg'
import setting from '../assets/Setting.svg'
import { Link } from 'react-router-dom'

const shortcutsData = [
    { id:"10", name: 'Help', pic: warning , refrenceLink : '/dashboard/help'},
    {  id:"11", name: 'Data', pic: setting, refrenceLink : '/dashboard/data' },
    {  id:"12", name: 'Settings', pic: setting , refrenceLink : '/dashboard/settings' }
]

const Shortcut = () => {
    return (
        <>
            {shortcutsData.map((data) => {
                return (<>
                    <li>
                        <div className='flex gap-3 cursor-pointer '>
                            <img className='w-[20px]' src={data.pic} alt="" />
                         <Link to={data.refrenceLink}><h5 >{data.name}</h5></Link>  
                        </div>
                    </li>
                </>)
            })}
        </>

    )
}

export default Shortcut