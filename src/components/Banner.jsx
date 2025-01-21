import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroBg from "../assets/images/her-bg.png";
import HeroTop from "../assets/images/hero-top.png";
import Wolf from "../assets/images/wolf-hero.svg";
import Radial from "../assets/images/hero-radial.svg";
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
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        headingRef.current,
        { y: 0, opacity: 1 },
        {
          y: -100,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "30% top",
            end: "70% top",
            scrub: true,
            markers: false,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="pb-7" ref={bannerRef}>
      <div className="pt-[185px] max-xl:pt-[140px] pb-[0px] relative overflow-hidden">
        <div className="container relative z-[5]">
          <div
            className="text-center max-w-[1014px] max-xl:max-w-[900px] max-lg:max-w-[700px] mx-auto"
            ref={headingRef}
          >
            <div className="max-w-[222px] mx-auto p-[1px] rounded-[11px] bg-[linear-gradient(345deg,_rgba(0,196,135,0)_0%,_rgba(0,196,135,1)_50%,_rgba(0,196,135,0)_100%)] mb-5 max-md:max-w-[175px] bg-rotate-animation">
              <span className="flex items-center gap-[6.5px] text-[13px] px-[13px] py-[7px] text-white rounded-[11px] border border-solid border-[rgba(0,196,135,0)] bg-combined-gradient max-md:text-[10px] max-md:p-[6px_12px] max-md:gap-[6px]">
                <img
                  src={checkIcon}
                  alt="check icon"
                  loading="lazy"
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
                  loading="lazy"
                  className="relative z-[10] w-[38px] h-[38px] max-md:w-6 max-md:h-6"
                />
              </Link>
            </div>
          </div>
          <div className="flex grid-cols-3 items-baseline justify-between gap-[10px]  max-md:grid-cols-2 max-md:mt-[45px] max-md:w-[500px]">
            <div>
              <img src={UniqueCard} alt="unique card" loading="lazy" />
            </div>
            <div>
              <img
                src={IncomeCard}
                alt="income card"
                loading="lazy"
                className="pl-[30px] block max-lg:pl-[15px] max-md:p-0"
              />
            </div>
            <div className="hidden md:block">
              <img src={TranactionCard} alt="transaction card" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full z-[0]">
          <img
            src={HeroBg}
            alt="hero bg"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-[0_0_auto_0] max-w-[1740px] w-[80%] mx-auto z-[2]">
          <img src={HeroTop} alt="hero top" loading="lazy" className="w-full" />
        </div>
        <div className="absolute inset-[0_auto_auto_0] max-w-[852px] w-[80%] z-[3] max-xl:w-[50%] max-md:hidden">
          <img src={Wolf} alt="wolf" loading="lazy" className="w-full" />
        </div>
        <div className="absolute inset-[auto_0_0_auto] max-w-[1140px] w-[90%] z-[1] max-2xl:w-[70%] max-md:w-[100%] max-sm:inset-[auto_0_65px_auto]">
          <img src={Radial} alt="radial" loading="lazy" className="w-full" />
        </div>
        <div className="absolute z-10 w-full h-[159px] bottom-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
      </div>
    </section>
  );
};

export default Banner;
