import React from 'react'
import TableHeader from './TableHeader'
import TableData from './TableData'
const TransactionHistoryTable = () => {
    return (
        <div className='w-full p-[0.75rem] pb-[1.5rem] flex flex-col gap-6  '>

            <TableHeader></TableHeader>


            <TableData></TableData>


        </div>
    )
}

export default TransactionHistoryTable