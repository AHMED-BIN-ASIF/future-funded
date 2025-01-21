import React from "react";
import Step1 from "../assets/images/affiliate-step-1.svg";
import Step2 from "../assets/images/affiliate-step-2.svg";
import Step3 from "../assets/images/affiliate-step-3.svg";
import Step4 from "../assets/images/affiliate-step-4.svg";
import Step5 from "../assets/images/affiliate-step-5.svg";
import AffiliateTop from "../assets/images/affiliate-bg.svg";
import AffiliateBottom from "../assets/images/affil-btm.svg";

const Affiliate = () => {
  return (
    <section className="py-[140px] relative max-xl:py-[100px] max-md:pt-[20px] max-md:pb-[40px]"
    style={{
        background: "radial-gradient(38.67% 144.37% at 48.05% 0%, rgba(0, 200, 140, 0.10) 20%, rgba(0, 200, 140, 0.00) 69.27%, rgba(0, 200, 140, 0.00) 100%)",
    }}>
      <div className="container relative z-[2]">
        <h2 className="text-[56px] leading-none font-medium text-white text-center capitalize mb-[80px] max-xl:text-[48px] max-xl:mb-[60px] max-lg:text-[40px] max-md:text-2xl max-sm:max-w-[200px] mx-auto">
          Want To be An WolfBanc affiliate?
        </h2>
        {/* affiliate steps  */}
        <div className="grid grid-cols-1 gap-[20px] max-w-[1267px] mx-auto ">
          {/* step1  */}
          <div
            className="grid grid-cols-2 gap-[80px] p-[20px_20px_20px_40px] rounded-[20px] max-md:grid-cols-1 max-md:p-[20px] max-md:gap-[40px]"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.10)",
              background:
                "radial-gradient(130% 130% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.00) 100%), #04110D",
            }}
          >
            <div className="order-1 flex flex-col justify-center gap-[10px] items-start max-md:order-2">
              <div className="bg-rotate-small p-[1px] rounded-[11px] bg-[linear-gradient(345deg,_rgba(0,196,135,0)_0%,_rgba(0,196,135,1)_50%,_rgba(0,196,135,0)_100%)]">
                <span className="] text-[12px] px-[12px] py-[6px] text-white rounded-[11px] border border-solid border-[rgba(0,196,135,0)] bg-combined-gradient">
                  Step 1
                </span>
              </div>
              <h4 className="text-[32px] text-white font-medium capitalize tracking-[-0.3px] max-lg:text-[24px] max-md:text-[16px]">
                Copy & Share your link
              </h4>
              <p className="text-sm text-[#B3B3B3] leading-loose max-w-[295px]">
                Send directly or share with your subscribers.
              </p>
            </div>
            <div className="order-2 max-md:order-1 ">
              <img src={Step1} alt="step1" />
            </div>
          </div>
          {/* step2  */}
          <div
            className="grid grid-cols-2 gap-[80px] p-[20px_20px_20px_20px] rounded-[20px] max-md:grid-cols-1 max-md:p-[20px] max-md:gap-[40px]"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.10)",
              background:
                "radial-gradient(130% 130% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.00) 100%), #04110D",
            }}
          >
            <div className="order-2 flex flex-col justify-center gap-[10px] items-start">
              <div className="bg-rotate-small p-[1px] rounded-[11px] bg-[linear-gradient(345deg,_rgba(0,196,135,0)_0%,_rgba(0,196,135,1)_50%,_rgba(0,196,135,0)_100%)]">
                <span className="] text-[12px] px-[12px] py-[6px] text-white rounded-[11px] border border-solid border-[rgba(0,196,135,0)] bg-combined-gradient">
                  Step 2
                </span>
              </div>
              <h4 className="text-[32px] text-white font-medium capitalize tracking-[-0.3px] max-lg:text-[24px]  max-md:text-[16px]">
                Wait until someone buys A challenge
              </h4>
              <p className="text-sm text-[#B3B3B3] leading-loose max-w-[280px]">
                The purchase must be made through your unique link.
              </p>
            </div>
            <div className="order-1">
              <img src={Step2} alt="step2" />
            </div>
          </div>
          {/* step3  */}
          <div
            className="grid grid-cols-2 gap-[80px] p-[20px_20px_20px_40px] rounded-[20px] max-md:grid-cols-1 max-md:p-[20px] max-md:gap-[40px]"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.10)",
              background:
                "radial-gradient(130% 130% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.00) 100%), #04110D",
            }}
          >
            <div className="order-1 flex flex-col justify-center gap-[10px] items-start max-md:order-2">
              <div className="bg-rotate-small p-[1px] rounded-[11px] bg-[linear-gradient(345deg,_rgba(0,196,135,0)_0%,_rgba(0,196,135,1)_50%,_rgba(0,196,135,0)_100%)]">
                <span className="] text-[12px] px-[12px] py-[6px] text-white rounded-[11px] border border-solid border-[rgba(0,196,135,0)] bg-combined-gradient">
                  Step 3
                </span>
              </div>
              <h4 className="text-[32px] text-white font-medium capitalize tracking-[-0.3px] max-lg:text-[24px]  max-md:text-[16px]">
                Grow your network
              </h4>
              <p className="text-sm text-[#B3B3B3] leading-loose max-w-[308px]">
                As you refer others and help them succeed, you not only
                contribute to their growth but also unlock greater potential for
                yourself.
              </p>
            </div>
            <div className="order-2 max-md:order-1">
              <img src={Step3} alt="step3" />
            </div>
          </div>
          {/* step4  */}
          <div
            className="grid grid-cols-2 gap-[80px] p-[20px_20px_20px_40px] rounded-[20px] max-md:grid-cols-1 max-md:p-[20px] max-md:gap-[40px]"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.10)",
              background:
                "radial-gradient(130% 130% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.00) 100%), #04110D",
            }}
          >
            <div className="order-1 flex flex-col justify-center gap-[10px] items-start max-md:order-2">
              <div className="bg-rotate-small p-[1px] rounded-[11px] bg-[linear-gradient(345deg,_rgba(0,196,135,0)_0%,_rgba(0,196,135,1)_50%,_rgba(0,196,135,0)_100%)]">
                <span className="] text-[12px] px-[12px] py-[6px] text-white rounded-[11px] border border-solid border-[rgba(0,196,135,0)] bg-combined-gradient">
                  Step 4
                </span>
              </div>
              <h4 className="text-[32px] text-white font-medium capitalize tracking-[-0.3px] max-lg:text-[24px]  max-md:text-[16px]">
              Get 10%
              </h4>
              <p className="text-sm text-[#B3B3B3] leading-loose max-w-[354px]">
              For each purchase through your link, get 15% of the purchase amount.
              </p>
            </div>
            <div className="order-2 max-md:order-1">
              <img src={Step4} alt="step4" />
            </div>
          </div>
          {/* step5  */}
          <div
            className="grid grid-cols-2 gap-[80px] p-[20px_20px_20px_20px] rounded-[20px] max-md:grid-cols-1 max-md:p-[20px] max-md:gap-[40px]"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.10)",
              background:
                "radial-gradient(130% 130% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.00) 100%), #04110D",
            }}
          >
            <div className="order-2 flex flex-col justify-center gap-[10px] items-start">
              <div className="bg-rotate-small p-[1px] rounded-[11px] bg-[linear-gradient(345deg,_rgba(0,196,135,0)_0%,_rgba(0,196,135,1)_50%,_rgba(0,196,135,0)_100%)]">
                <span className=" text-[12px] px-[12px] py-[6px] text-white rounded-[11px] border border-solid border-[rgba(0,196,135,0)] bg-combined-gradient">
                  Step 5
                </span>
              </div>
              <h4 className="text-[32px] text-white font-medium capitalize tracking-[-0.3px] max-lg:text-[24px]  max-md:text-[16px]">
              Request payout
              </h4>
              <p className="text-sm text-[#B3B3B3] leading-loose max-w-[567px]">
              You can do this when you reach a minimum of $100 in total earnings. You will be paid out every 14 days to your desired method.
              </p>
            </div>
            <div className="order-1">
              <img src={Step5} alt="step5" />
            </div>
          </div>
        </div>
      </div>
      {/* top-line  */}
      <div className="absolute top-0 left-0 right-0 mx-auto max-w-[834px] w-full h-[1px] max-lg:max-w-[80%] max-md:max-w-[50%]"
      style={{
        background: "linear-gradient(90deg, rgba(1, 193, 131, 0.00) 0%, #01C183 50%, rgba(1, 193, 131, 0.00) 100%)",
      }}></div>
      {/* top-radial  */}
      <div className="absolute top-[-600px] left-0 max-w-[930px] z-[1] max-xl:max-w-[600px] max-xl:top-[-450px] max-lg:max-w-[400px] max-lg:top-[-250px] max-md:top-[-450px] max-md:max-w-[230px]" >
        <img src={AffiliateTop} alt="AffiliateTop" />
      </div>
      {/* bottom-radial  */}
      <div className="absolute bottom-[620px] left-0 max-w-[930px] z-[1]  max-lg:bottom-[100px] max-lg:max-w-[40%] max-md:hidden" >
        <img src={AffiliateBottom} alt="Affiliatebottom" />
      </div>
    </section>
  );
};

export default Affiliate;
