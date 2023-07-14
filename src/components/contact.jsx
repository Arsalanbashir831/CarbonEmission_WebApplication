import React from 'react'

const contact = () => {
  return (
    <form action="">
    <h2 class="text-xl font-bold mb-4 mt-4">Contact Support</h2>
    <input type="text" placeholder="Subject" class="w-full px-4 py-2 mb-4 border border-gray-300 rounded" />
    <textarea  placeholder="Message" rows={3} class="w-full px-4 py-2 border border-gray-300 rounded resize-none"></textarea>
    <div className='text-right my-5'>
    <input className='bg-main text-white p-2 px-4 rounded-sm ' type="submit" value="Submit" />
    </div>
  </form>
  )
}

export default contact