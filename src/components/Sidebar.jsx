import React from 'react'
import { TbSettings2 } from "react-icons/tb";
import { VscKey } from "react-icons/vsc";
import { HiOutlineCube } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";

import { FaAngleRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";






function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <TbSettings2 className='icon_header' />Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <div><VscKey className='icon' /> Dashboard</div>
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <div><HiOutlineCube className='icon' /> Product</div><FaAngleRight className='icon' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <div><CgProfile className='icon' /> Customer</div><FaAngleRight className='icon' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <div><PiHandCoinsDuotone className='icon' /> Income</div><FaAngleRight className='icon' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <div><RiDiscountPercentLine className='icon' /> Promote</div><FaAngleRight className='icon' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <div><MdOutlineLiveHelp className='icon' /> Help</div><FaAngleRight className='icon' />
                    </a>
                </li>
            </ul>

            <div className='sidebar-profile'>
                <img src="https://via.placeholder.com/40" alt="" />
                <div>
                    <p className='profile-name'>Enano</p>
                    <p className='profile-post'>Project Manager</p>
                </div>
                <IoIosArrowDown className='icon'/>
            </div>
        </aside>
    )
}

export default Sidebar