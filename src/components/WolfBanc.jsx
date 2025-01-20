import React from "react";
import Wolf from "../assets/images/wolf.svg";
// import CardImg1 from "../assets/images/payout-cardimg.svg";
import CardBG1 from "../assets/images/payout-bg-img.png";
import CardImg3 from "../assets/images/trad-condition.svg";
import Trading from "../assets/images/trading.png";
import { Link } from "react-router-dom";
const WolfBanc = () => {
  return (
    <section className="relative px-[30px] pb-[112px] max-lg:pb-14">
      <div className="container">
        <h2 className="text-[56px] text-white text-center mb-[80px] max-xl:text-[44px] max-xl:mb-[60px] max-lg:text-[36px] max-md:text-2xl max-md:mb-0 max-md:hidden">
          The WolfBanc way.
        </h2>
      </div>
      <div className="grid grid-cols-[1fr_1.5fr_1fr] gap-[20px] items-center max-lg:grid-cols-3 max-lg:items-stretch max-md:grid-cols-1">
        <div
          className="flex flex-col items-center justify-end rounded-[20px] gap-[16px] p-[40px] min-h-[480px] relative max-xl:p-[30px] max-xl:min-h-[350px] max-lg:min-h-[300px]  max-lg:p-[20px] max-md:min-h-[420px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 10, 10, 0.90) 0%, #040404 100%)",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          {/* <div className="mb-[68px]">
            <img src={CardImg1} alt="payout" />
          </div> */}
          <div className="relative z-[2]">
            <h4 className="text-2xl leading-none font-medium tracking-[-0.24px] text-white mb-2 max-xl:text-xl max-xl:mb-1 max-lg:text-base">
              Payouts Guaranteed{" "}
            </h4>
            <p className="text-sm text-[#B3B3B3] leading-loose">
              Earn from your network and unlock the power of passive income.
            </p>
            <Link
              to="/"
              className="text-[rgba(248,248,248,0.70)] text-base leading-none p-[12px_32px] rounded-[32px] bg-[rgba(40,40,40,0.70)] mt-[16px] max-xl:text-sm max-xl:mt-[10px]"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.40))",
                boxShadow: "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset",
                // backdropFilter: "blur(50px)",
              }}
            >
              Discover
            </Link>
          </div>
          <div className="absolute inset-0 w-full z-[1]">
            <img src={CardBG1} alt="payout" className="mx-auto" />
          </div>
        </div>
        {/* card 2 */}
        <div
          className="flex flex-col items-center justify-end relative rounded-[30px] gap-[0px] p-[60px] min-h-[720px] max-xl:p-[40px] max-xl:min-h-[500px] max-lg:min-h-[300px]  max-lg:p-[20px] max-md:min-h-[420px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 10, 10, 0.90) 0%, #040404 100%)",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <div className="absolute inset-0 left-0 right-0 mx-auto z-[1] max-md:max-w-[400px]">
            <img src={Trading} alt="Trading" className="mx-auto" />
          </div>
          <div className="relative z-[2]">
            <h4 className="text-2xl leading-none font-medium tracking-[-0.24px] text-white mb-2 hidden max-lg:text-base max-md:block">
              Best Trading Platforms
            </h4>
            <p className="text-[21px] text-[#B3B3B3] leading-loose max-xl:text-lg max-lg:text-sm">
              Trade with MetaTrader 5 for lightning-fast execution and zero
              latency, delivering a seamless and stress-free trading.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div
          className="flex flex-col items-center rounded-[20px] gap-[16px] p-[40px] max-xl:p-[10px_30px_30px] max-xl:min-h-[350px] max-xl:gap-0 max-lg:min-h-[300px]  max-lg:p-[20px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 10, 10, 0.90) 0%, #040404 100%)",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <div className="">
            <img src={CardImg3} alt="payout" />
          </div>
          <div>
            <h4 className="text-2xl leading-none font-medium tracking-[-0.24px] text-white mb-2 max-xl:text-xl max-lg:text-base max-lg:mb-1">
            Best Trading Conditions
            </h4>
            <p className="text-sm text-[#B3B3B3] leading-loose">
            We offer the best trading conditions, combining low spreads, fast execution, and unmatched reliability.
            </p>
          </div>
        </div>
      </div>
      {/* wolf */}
      <div className="absolute top-[-200px] left-0 max-xl:top-[-20px] max-xl:w-[50%]">
        <img src={Wolf} alt="wolf" />
      </div>
    </section>
  );
};

export default WolfBanc;
