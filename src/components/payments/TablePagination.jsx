import React from "react";
import ReactPaginate from "react-paginate";

const TablePagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex items-center justify-center gap-6 transition-all duration-200 ease-in-out">
      {currentPage > 1 && (
        <span
          className="flex p-[0.375rem] pr-[0.75rem] items-center justify-center gap-[0.375rem] rounded-[0.25rem] border-[1px] border-[#D9D9D9] bg-[#FFF] cursor-pointer "
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
              fill="#4D4D4D"
            />
          </svg>{" "}
          <p className="flex-[1_0_0] w-full flex items-center gap-1 text-[0.875rem] font-[500] leading-[1.25rem] text-[#4D4D4D]">
            Previous
          </p>{" "}
        </span>
      )}

      <span className="flex items-center gap-2  ">
        {pageArray.map((page) => {
          return (
            <span
              className={
                ` cursor-pointer w-7 h-7  flex flex-col justify-center items-center  rounded-[0.25rem] font-normal leading-[1.25rem] text-[0.875rem] self-stretch text-[#4D4D4D] hover:bg-[#146EB4] hover:text-white hover:px-2 hover:py-[0.375rem] hover:gap-[0.375rem]   ` +
                 ( page === currentPage
                  ? "bg-[#146EB4] text-white px-2 py-[0.375rem] gap-[0.375rem] "
                  : "py-[0.125rem] px-0 gap-2")
              }
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </span>
          );
        })}
      </span>

      {currentPage < totalPages && (
        <span
          className="flex cursor-pointer p-[0.375rem] pr-[0.75rem] items-center justify-center gap-[0.375rem] rounded-[0.25rem] border-[1px] border-[#D9D9D9] bg-[#FFF] "
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {" "}
          <p className="flex-[1_0_0] w-full flex items-center gap-1 text-[0.875rem] font-[500] leading-[1.25rem] text-[#4D4D4D]">
            Next
          </p>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
              fill="#4D4D4D"
            />
          </svg>
        </span>
      )}

      {/* {
                currentPage > totalPages &&
                <span onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </span>
            } */}
    </div>
  );
};

export default TablePagination;
