import React, { useState } from 'react'

const PaymentHeader = ({timeline , setTimeline}) => {

    



    return (
        <div className='flex flex-col gap-6 bg-[#FFF]   h-full w-full text-black'>
            <div className='flex justify-between items-center w-full h-[2.25rem]'>
                <div className='text-[1.25rem] font-[500] leading-7  '>
                    Overview
                </div>

                <div className='w-[8.5625rem] p-[0.6rem]  flex items-center justify-between flex-shrink-0 rounded-[0.25rem] border-[#D9D9D9] border-[1px] border-solid h-8  ' >

                    <select onChange={(e) => setTimeline(e.target.value)} className='text-[#4D4D4D] bg text-[1rem] w-full font-normal leading-[1.5rem] outline-none transition-all ease-in-out duration-500 appearance-none  ' name="timeline" id="timeline">
                        <option value="Last Week" selected>Last Week</option>
                        <option value="Last Month" > Last Month</option>
                        <option value="Last Year">Last Year</option>
                        <option value="Last Century">Last Century</option>

                    </select>

                    

                </div>
            </div>

            <div className='flex justify-between self-stretch gap-6 w-full items-center  '>
                <div className='p-6 w-1/2    flex flex-col gap-4  items-start justify-center  shadow-[0px_2px_6px_0px] shadow-[#1a181e0a] rounded-[0.5rem] '>
                    <p className='text-[1rem] font-normal leading-6 text-[#4D4D4D] '>
                        Online Orders
                    </p>

                    <p className='text-[2rem] font-[500] leading-[2.375rem] text-[#1A181E] '>
                        231
                    </p>
                </div>


                <div className='p-6 w-1/2  flex flex-col gap-4  justify-center items-start   shadow-[0px_2px_6px_0px] shadow-[#1a181e0a] rounded-[0.5rem] '>
                    <p className='text-[1rem] font-normal leading-6 text-[#4D4D4D] '>
                        Amount received
                    </p>

                    <p className='text-[2rem] font-[500] leading-[2.375rem] text-[#1A181E] '>
                    ₹23,92,312.19
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PaymentHeader