import React from 'react'

const header = ({headLogo}) => {
  return (
    <div className="flex items-center justify-end m-3">
              <img className="w-[40px]" src={headLogo} alt="" />
            </div>
  )
}

export default header