import React from 'react';
import { Link } from "react-router-dom";
import { SidebarData } from '../../data/SideBarData';
const Sidebar = () => {


    return (
        <div className='flex flex-col gap-2 w-full'>
            {SidebarData.map((item, index) => (
                <Link to={item.link} key={index} className='hover:bg-[#1C4E80] rounded-sm capitalize hover:text-white py-[6px] px-3 text-[14px] font-medium text-[#1C4E80] transition-all duration-150'>
                    {item.name}
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;
