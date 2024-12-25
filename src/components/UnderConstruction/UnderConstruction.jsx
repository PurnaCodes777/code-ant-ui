import React from 'react'
import { IoCaretBackCircle } from 'react-icons/io5'
import { Link } from 'react-router'

const UnderConstruction = () => {
    return (
        <div className='uc-bg min-h-screen relative'>
            <Link to={'/home'} className='flex items-center gap-1 border w-fit p-4 rounded-lg absolute top-16 left-16 hover:border-[#ec4899] 
            transition-all cursor-pointer custom-range:top-6 custom-range:left-6 custom-range:text-[12px] custom-range:p-2'>
                <IoCaretBackCircle className='text-pink-500 text-[25px]' />
                <span className='text-white'>Go Back</span>
            </Link>
        </div>
    )
}

export default UnderConstruction