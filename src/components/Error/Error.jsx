import React from 'react'

const Error = ({children}) => {
  return (
    <div className="flex items-center gap-x-2 text-red-400">
    <div className="border-1 h-5 w-5 flex items-center justify-center border-red-400 rounded-full">
    <i className="fa-solid text-sm fa-exclamation"></i>
    </div>
    <p>{children}</p>
</div>
  )
}

export default Error