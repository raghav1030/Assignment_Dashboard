import React, { useState } from 'react'
import PaymentHeader from '../components/payments/PaymentHeader'
import PaymentHistory from '../components/payments/PaymentHistory'


const Payments = () => {

  const [timeline, setTimeline]  = useState("Last Week")

  return (
    <div className='w-full h-auto p-8 self-stretch flex flex-col gap-8  items-start  bg-[#FAFAFA] '>

      <PaymentHeader timeline={timeline} setTimeline={setTimeline}></PaymentHeader>

      <PaymentHistory timeline={timeline}></PaymentHistory>
    </div>
  )
}

export default Payments