import React from 'react'

import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { PiHandCoinsBold } from "react-icons/pi";
import { FaShoppingBag } from "react-icons/fa";
import CustomBarChart from './CustomBarChart';
import CircularChart from './CircularChart';
import { IoIosArrowDown } from "react-icons/io";
import LongCard from './LongCard';


function Home() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];



    return (
        <main className='main-container'>

            <div className='main-cards'>
                <div className="card">
                    <div className='card-inner'>
                        <PiCurrencyCircleDollarBold className='card_icon one' />
                    </div>
                    <div className='card-inner-info'>
                        <p className='small-info'>Earning</p>
                        <h2>$198k</h2>
                        <p className='small-info-last'><span className='span-green'>↑ 37.8%</span> this month</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-inner'>
                        <CgNotes className='card_icon two' />
                    </div>
                    <div className='card-inner-info'>
                        <p className='small-info'>Orders</p>
                        <h2>$2.4k</h2>
                        <p className='small-info-last'><span className='span-red'>↓ 2%</span> this month</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-inner'>
                        <PiHandCoinsBold className='card_icon three' />
                    </div>
                    <div className='card-inner-info'>
                        <p className='small-info'>Balance</p>
                        <h2>$2.4k</h2>
                        <p className='small-info-last'><span className='span-red'>↓ 2%</span> this month</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-inner'>
                        <FaShoppingBag className='card_icon four' />
                    </div>
                    <div className='card-inner-info'>
                        <p className='small-info'>Earning</p>
                        <h2>$89k</h2>
                        <p className='small-info-last'><span className='span-green'>↑ 11%</span> this week</p>
                    </div>
                </div>
            </div>


            <div className='charts'>

                <div className='card card-chart'>
                    <div className='chart-text'>
                        <div>
                            <h2>Overview</h2>
                            <p>Monthly Earning</p>
                        </div>
                        <p>Quarterly <IoIosArrowDown /></p>
                    </div>
                    <CustomBarChart />
                </div>

                <div className='card card-chart'>
                    <div className='circular-chart-text'>
                        <h2>Customers</h2>
                        <p>Customers that buy products</p>
                    </div>
                    <div className='circular-chart'>
                        <CircularChart />
                    </div>
                </div>

            </div>
            <div className='long-card'>
                    <LongCard />
                </div>



        </main>
    )
}

export default Home