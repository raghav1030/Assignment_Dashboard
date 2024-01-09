import React, { useState } from "react";
import dashboardLinks from "../../data/sidebar-data";
import { NavLink } from "react-router-dom";
import CreditInfo from "./CreditInfo";
import { useLocation } from 'react-router-dom';
import userImage from '../../assets/Image.png'

const UserPanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation()
  const activeLink = location.pathname.split('/')[2]
  console.log(activeLink)
  return (

    <div className="bg-SecondaryNavbar flex flex-col items-center justify-between w-[14rem] h-[100vh] gap-4 py-4 px-[0.625rem]  flex-[1_0_0]">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-around w-full px-1 ">
          <img
            className="w-10 h-10  rounded-[0.25rem] "
            src={userImage}
            alt="profilephoto"
          />

          <div className="flex flex-col leading-4">
            <span className="text-white text-lg self-stretch text-[0.9375rem] font-[500] leading-[1.375rem]  ">Nishyan</span>
            <span>
              {" "}
              <a
                className="underline self-stretch text-[0.8125rem] text-[#FFF] leading-4 opacity-[0.8]  "
                href="/"
              >
                Visit Store
              </a>
            </span>
          </div>

          <div className="transition-all duration-500 ease-in-out text-white " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >


                <path
                  d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                  fill="white"
                />
              </svg>
            ) : (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="white"/></svg>)}
          </div>
        </div>
        <div className="w-full mt-6 px-1 flex flex-col  ">

          {
            isOpen && dashboardLinks.map(item => {
              return (
                <NavLink to={item.path} key={item.id}>
                  <div className={`flex items-center  opacity-[0.8] text-[0.875rem] font-[500] leading-[1.25rem]   w-full h-9 gap-3 px-4 py-2 rounded-[0.25rem] hover:bg-[#ffffff1a] transition-colors duration-100 ease-in-out ` + (activeLink === item.title.toLowerCase() && "bg-[#ffffff1a]")}>
                    <div dangerouslySetInnerHTML={{ __html: item.icon }} className=" flex items-center">
                    </div>
                    <div className="text-white  font-[500] leading-4 break-words">
                      {item.title}
                    </div>
                  </div>
                </NavLink>
              )
            })
          }
        </div>

      </div>
      <div className="w-full p-2">

        <CreditInfo></CreditInfo>
      </div>
    </div>
  );
};

export default UserPanel;



