import React from 'react'

import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify } from 'react-icons/bs'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Header({ OpenSidebar }) {
    return (
        <header className='header'>
            <div className="menu-icon">
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>

            <div className='header-right'>
                <h3>Hello Shahrukh👋🏻,</h3>
            </div>
            <div className='header-left'>
                <div className="wrap">
                    <div className="search">
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                        <input type="text" className="searchTerm" placeholder="Search" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header