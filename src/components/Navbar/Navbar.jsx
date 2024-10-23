import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-[#F1F1F1] px-4 flex justify-between py-2'>

            <div className='text-[#1C4E80] flex items-center font-medium'>
                Br Tutor Dashboard

            </div>


            <div className='flex gap-5'>
                <Link to={"https://brtutor.com"} className=' bg-[#1C4E80] transition-all py-[6px] duration-150 hover:bg-[#1C4E80]/80 text-white px-3 flex items-center rounded-sm text-[14px]'>
                    Visit Website
                </Link>
                <div className='block sm:hidden text-white rounded-sm transition-all duration-150  px-2 py-[6px] bg-[#1C4E80] hover:bg-[#1C4E80]/80'>
                    <GiHamburgerMenu size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar