import React from 'react'
import { Link } from 'react-router-dom'
import RightIcon from "../assets/icons/arrow-right.svg";


const BuildNetwork = () => {
  return (
    <section className='px-[40px] max-lg:px-[30px] max-md:px-5'>
      <div className="pt-[225px] pb-[265px] rounded-[40px_40px_0px_0px] max-xl:py-[150px] max-lg:py-20"
      style={{
        background: "radial-gradient(107.13% 140% at 50% 10%, rgba(5, 5, 5, 0.00) 20%, #00C88C 69.27%, #00C88C 100%)",
      }}>
        <div className="container">
            <h2 className="text-[60px] text-white font-medium text-center mb-[10px] max-xl:text-[48px] max-lg:text-4xl max-md:text-2xl max-sm:max-w-[300px] max-md:mx-auto ">Build your biggest network</h2>
            <p className="text-center text-base leading-[1.75] text-[#999F9F] max-w-[942px] mx-auto mb-[32px] max-lg:max-w-[602px] max-md:text-[12px] max-sm:max-w-[350px]">Build your biggest network and unlock endless opportunities for growth, success, and passive income. Connect, inspire, and earn as you take your journey to the next level.</p>
            <div className="flex items-center justify-center">
            <Link
                to="/"
                className="btn rounded-[9px] flex items-center gap-[18px] border-[1.125px] h-[60px] pl-[27px] pr-[11px] text-white text-sm leading-none border-solid border-[rgba(255,255,255,0.10)] bg-gradient-to-r from-[#00C88C] to-[#0C7C33] max-md:gap-[16px] max-md:p-[6px_6px_6px_24px] max-md:text-[12px] max-md:h-[40px]"
              >
                 <span className="relative z-[10]">Join The Family</span>
                <img
                  src={RightIcon}
                  alt="arrow"
                  className="relative z-[10] w-[38px] h-[38px] max-md:w-6 max-md:h-6"
                />
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BuildNetwork
