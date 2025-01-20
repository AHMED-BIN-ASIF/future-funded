import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroBg from "../assets/images/hero-bg.webp";
import checkIcon from "../assets/icons/check-icon.svg";
import RightIcon from "../assets/icons/arrow-right.svg";
import UniqueCard from "../assets/images/uniqe-card.svg";
import IncomeCard from "../assets/images/income-card.svg";
import TranactionCard from "../assets/images/transaction-card.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      // Animation for the heading
      gsap.fromTo(
        headingRef.current,
        { y: 0, opacity: 1 },
        {
          y: -100,
          opacity: 0,
          duration: 1.2,
          // ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "5% top",
            end: "20% top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="pb-7">
      <div
        className="pt-[185px] max-xl:pt-[140px] pb-[0px] relative"
        ref={bannerRef}
      >
        <div className="container relative z-[1]">
          <div
            className="text-center max-w-[1014px] max-xl:max-w-[900px] max-lg:max-w-[700px] mx-auto"
            ref={headingRef}
          >
            {/* top pre header  */}
            <div className="max-w-[222px] mx-auto p-[1px] rounded-[11px] bg-[linear-gradient(345deg,_rgba(0,196,135,0)_0%,_rgba(0,196,135,1)_50%,_rgba(0,196,135,0)_100%)] mb-5 max-md:max-w-[175px] bg-rotate-animation">
              <span className="flex items-center gap-[6.5px] text-[13px] px-[13px] py-[7px] text-white rounded-[11px] border border-solid border-[rgba(0,196,135,0)] bg-combined-gradient max-md:text-[10px] max-md:p-[6px_12px] max-md:gap-[6px]">
                <img
                  src={checkIcon}
                  alt="check icon"
                  className="inline-block max-md:w-5 max-md:h-5"
                />
                The power of networking
              </span>
            </div>

            <h1 className="text-[78px] text-white font-medium leading-normal mb-2 max-xl:text-[64px] max-lg:text-[50px] max-md:text-[28px] max-md:mb-2 ">
              Your Journey <span className="text-fundedGreen">Starts Now</span>.
              With WolfBanc
            </h1>
            <p className="text-lg leading-[1.75] font-normal text-[#CCCDCD]   max-md:text-[14px] ">
              Join top industry leaders in the forex and futures space to master
              your craft, or learn from elite marketers to elevate your network
              to new heights.
            </p>
            <div className="flex items-center justify-center mt-9 max-md:mt-6">
              <Link
                to="/"
                className=" btn rounded-[9px] flex items-center gap-[18px] border-[1.125px] h-[60px] pl-[27px] pr-[11px] text-white text-sm leading-none border-solid border-[rgba(255,255,255,0.10)] bg-gradient-to-r from-[#00C88C] to-[#0C7C33] max-md:gap-[16px] max-md:p-[6px_6px_6px_24px] max-md:text-[12px] max-md:h-[40px]"
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
          {/* banner desending cards */}
          <div className="flex grid-cols-3 items-baseline justify-between gap-[10px]  max-md:grid-cols-2 max-md:mt-[45px]">
            <div>
              <img src={UniqueCard} alt="unique-ard" />
            </div>
            <div>
              <img
                src={IncomeCard}
                alt="unique-ard"
                className="pl-[30px] block max-lg:pl-[15px] max-md:p-0"
              />
            </div>
            <div className="hidden md:block">
              <img src={TranactionCard} alt="unique-ard" />
            </div>
          </div>
        </div>
        {/* bg-img  */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={HeroBg}
            alt="hero bg"
            className="w-full h-full object-cover"
          />
        </div>
        {/* btm gradient */}
        <div className="absolute z-10 w-full h-[159px] bottom-0 bg-gradient-to-t from-[#050505] to-transparent max-lg:h-[80px]"></div>
      </div>
      {/* banner-btm cards row */}
      <div className="grid grid-cols-3 gap-[10px] max-w-[1296px] mx-auto px-[30px] max-md:grid-cols-2">
        <div className="flex flex-col justify-center items-center p-[40px] gap-[20px] bg-gradient-to-b from-[rgba(10,10,10,0.9)] to-[#040404] border border-[rgba(255,255,255,0.1)] rounded-[20px]  max-lg:p-[30px_20px] max-lg:gap-3 max-md:col-span-2 max-md:p-[20px]">
          <span className="text-white text-[40px] font-medium leading-none max-lg:text-[30px] max-md:text-[16px]">
            10%
          </span>
          <p className="text-[#B3B3B3] text-center text-base leading-loose max-w-[156px] mx-auto max-lg:text-sm max-md:text-[10px] max-md:max-w-full">
            Earn up to 10% Commission per tier
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-[40px] gap-[20px] bg-gradient-to-b from-[rgba(10,10,10,0.9)] to-[#040404] border border-[rgba(255,255,255,0.1)] rounded-[20px] max-lg:p-[30px_20px] max-lg:gap-3">
          <span className="text-white text-[40px] font-medium leading-none max-lg:text-[30px] max-md:text-[16px] ">
            14
          </span>
          <p className="text-[#999F9F] text-center text-base leading-loose max-w-[130px] mx-auto max-lg:text-sm max-md:text-[10px]">
            Get paid every 14 days
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-[40px] gap-[20px] bg-gradient-to-b from-[rgba(10,10,10,0.9)] to-[#040404] border border-[rgba(255,255,255,0.1)] rounded-[20px] max-lg:p-[30px_20px] max-lg:gap-3">
          <span className="text-fundedGreen text-[40px] font-medium leading-none max-lg:text-[30px] max-md:text-[16px]">
            Recurring
          </span>
          <p className="text-[#999F9F] text-center text-base leading-loose max-lg:text-sm max-md:text-[10px]">
            Earn monthly revenue from your network
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
