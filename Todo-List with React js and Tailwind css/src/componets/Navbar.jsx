import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#588157] text-black py-4 '>
      <div className='logo'>
        <span className='font-bold text-xl mx-8 my-2'>i-Task</span>
      </div>

        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Your-Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
