import React from 'react'
import logo from '../assets/ChatGPT_logo.png'
import profile from '../assets/profile.png'
const Talk = () => {
  return (
    <>
<div className='chat_container bg-[#ffff] p-10 h-[70vh] overflow-y-scroll flex flex-col gap-5'>
<div className=' Ai_reply grid grid-cols-1 p-5'>
    <div className='flex justify-start gap-5'>
        <img className='w-[30px]' src={logo} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iste?</p>
    </div>
</div>



{/* user reply */}
<div className=' User_reply grid grid-cols-1 bg-[#efefef] p-5'>
    <div className='flex flex-row-reverse justify-start gap-5'>
        <img className='w-[30px]' src={profile} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, iste?</p>
    </div>
</div>
</div>

<div><form className='flex justify-center items-center' action="">
    <input className='w-full p-2' type="text" name="Query" id=""  placeholder='Enter your Query'/>
    <input className=' text-white p-2 bg-[#367e2c]' type="submit" value="Submit" />
</form></div>
    </>
  )
}

export default Talk