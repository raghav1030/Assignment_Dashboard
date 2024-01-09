import React, { useEffect, useState } from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import TablePagination from './TablePagination';


const TableData = () => {

    const sampleData = Array.from({ length: 200 }, (_, index) => ({
        orderId: `#${281209 + index}`,
        orderDate: `01 January, 2024`,
        orderAmount: getRandomAmount(),
        transactionFees: getRandomFees(),
    }));

    // function getRandomDate() {
    //     const start = new Date(2022, 0, 1);
    //     const end = new Date();
    //     const randomDate = new Date(
    //         start.getTime() + Math.random() * (end.getTime() - start.getTime())
    //     );
    //     const options = { day: 'numeric', month: 'long', year: 'numeric' };
    //     return randomDate.toLocaleDateString('en-US', options);
    // }

    function getRandomAmount() {
        return (Math.random() * 1000).toFixed(2);
    }

    function getRandomFees() {
        return (Math.random() * 10).toFixed(2);
    }

    const recordPerPage = 19
    const totalPages = Math.ceil(sampleData.length/recordPerPage)
    const [currentPage , setCurrentPage] = useState(1)
    const lastIndex = currentPage * recordPerPage 
    const firstIndex = lastIndex - recordPerPage 
    const [currentPageData, setCurrentPageData] = useState(sampleData.slice(firstIndex, lastIndex))

    useEffect(()=>{
        setCurrentPageData(sampleData.slice(firstIndex, lastIndex))
    },[currentPage])



    return (
        <div className='flex flex-col gap-6'>
            <Table className='w-full flex flex-col justify-center' >
                <Tbody className='w-full' >
                    <Tr className='flex w-full py-[0.625rem] px-[0.75rem] items-center  gap-9 rounded-[0.25rem] bg-[#F2F2F2] '>

                        <Td className='w-full flex justify-start items-center text-[0.875rem] font-[500] leading-[1.25rem] text-[#4D4D4D] flex-[1_0_0]  '>
                            Order ID
                        </Td>
                        <Td className='flex-[1_0_0] w-full flex items-center gap-1 text-[0.875rem] font-[500] leading-[1.25rem] text-[#4D4D4D]  '>Order Date <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z" fill="#4D4D4D" />
                        </svg> </Td>
                        <Td className='w-full flex justify-end items-center flex-[1_0_0]  text-[0.875rem] font-[500] leading-[1.25rem] text-[#4D4D4D]  '> Order Amount</Td>
                        <Td className='w-full flex flex-[1_0_0]  items-center justify-end  gap-1 text-[0.875rem] font-[500] leading-[1.25rem] text-[#4D4D4D]  '> Transaction fees <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_0_5817)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z" fill="#4D4D4D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_5817">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></span></Td>
                    </Tr>


                    {currentPageData.map(data => {
                        return (
                            <Tr key={data.orderId} className='flex w-full py-[0.88rem] px-[0.75rem] h-[3rem] items-center  gap-9 rounded-[0.25rem] bg-[#FFF] '>
                                <Td className='w-full flex justify-start items-center text-[0.875rem] font-[500] leading-[1.25rem]  flex-[1_0_0] text-[#146EB4]  '>
                                    {data.orderId}
                                </Td>
                                <Td className='w-full flex justify-start items-center text-[0.875rem] font-[400] leading-[1.25rem]  flex-[1_0_0] text-[#1A181E]  gap-[-0.0625rem]'>
                                    {data.orderDate}  
                                </Td>
                                <Td className='w-full flex justify-end items-center text-[0.875rem] font-[400] leading-[1.25rem]  flex-[1_0_0] text-[#1A181E]  gap-[-0.0625rem]' >
                                    {data.orderAmount}
                                </Td>
                                <Td className='w-full flex justify-end items-center text-[0.875rem] font-[400] leading-[1.25rem]  flex-[1_0_0] text-[#1A181E]  gap-[-0.0625rem]' >
                                    {data.transactionFees}
                                </Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
            

            <TablePagination setCurrentPage={setCurrentPage} currentPage={currentPage} currentPageData={currentPageData} totalPages={totalPages} ></TablePagination>

        </div>
    )
}

export default TableData