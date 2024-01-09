import React from 'react'
import TransactionHistoryTable from './TransactionHistoryTable'

const PaymentHistory = ({ timeline }) => {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <h1 className='text-[1.25rem] font-[500] leading-6 text-[#1A181E]   ' >
                Transaction  | {timeline}
            </h1>

            

            <TransactionHistoryTable></TransactionHistoryTable>
        </div>
    )
}

export default PaymentHistory