import React from "react";
import AffilImg from "../assets/images/affil-img.webp";
import FFLogo from "../assets/images/ff-logo.webp";
import Star from "../assets/icons/star.svg";
const TopAffiliate = () => {
  return (
    <section
      className="relative py-[140px] max-xl:py-[100px] max-lg:py-[60px] max-md:pt-[20px] max-md:pb-[45px]"
      style={{
        background:
          "radial-gradient(38.67% 144.37% at 48.05% 0%, rgba(255, 255, 255, 0.10) 20%, rgba(5, 5, 5, 0.00) 69.27%, rgba(5, 5, 5, 0.00) 100%)",
      }}
    >
      <div className="container">
        <h2 className="text-[56px] text-white text-center mb-[80px] max-xl:text-5xl max-xl:mb-[60px] max-lg:text-4xl max-lg:mb-12 max-md:text-2xl max-md:mb-8">
          Top Affiliate
        </h2>
        <div
          className="grid grid-cols-[.5fr_1fr] gap-[25px] p-[40px] rounded-[20px] max-w-[1149px] mx-auto max-lg:p-[20px] max-lg:gap-[20px] max-md:grid-cols-1 max-md:gap-[25px]"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.10)",
            background:
              "linear-gradient(180deg, rgba(10, 10, 10, 0.90) 0%, #040404 100%)",
          }}
        >
          <div className="relative rounded-[32px] overflow-hidden max-lg:rounded-[20px]">
            <img
              src={AffilImg}
              alt="AffilImg"
              className="w-full h-full object-cover"
            />
            <img
              src={FFLogo}
              alt="Brand"
              className="absolute w-[150px] left-[15px] bottom-[25px]"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center mb-[16px]">
              <div className="flex-1 p-[28px] text-white text-sm leading-none font-medium bg-[radial-gradient(110%_110%_at_50%_-10%,rgba(0,200,140,0.40)_0%,rgba(0,200,140,0.00)_50%,rgba(0,200,140,0.00)_100%)] border border-solid border-[rgba(255,255,255,0.10)] rounded-[100px] max-md:p-[20px]">
                <span>Tyler Francis</span>
              </div>
              <div className="w-[80px] h-[80px] p-[28px] bg-[radial-gradient(110%_110%_at_50%_-10%,rgba(0,200,140,0.40)_0%,rgba(0,200,140,0.00)_50%,rgba(0,200,140,0.00)_100%)] border border-solid border-[rgba(255,255,255,0.10)] rounded-full max-md:p-[20px] max-md:w-[64px] max-md:h-[64px]">
                <img src={Star} alt="star" className="block" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
              {[
                { label: "Referrals", value: "21" },
                { label: "Clicks", value: "206" },
                { label: "Customers", value: "122" },
                { label: "Paid Earnings", value: "$12,182" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-[20px] relative rounded-[20px] gap-[5px] max-md:p-4"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                    background:
                      "radial-gradient(120.75% 120.75% at 50.14% 0%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, rgba(10, 10, 10, 0.90) 0%, #040404 100%)",
                  }}
                >
                  <span className="text-[28px] leading-none text-white max-md:text-[16px]">
                    {item.value}
                  </span>
                  <span className="text-sm text-[#999F9F] leading-[1.7] max-md:text-[12px]">
                    {item.label}
                  </span>
                  <div
                    className="absolute left-0 bottom-[29px] rounded-[0px_4px_4px_0px] w-[4px] h-[40px] max-md:bottom-4"
                    style={{
                      background: "rgba(0, 200, 140, 0.50)",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* top-line  */}
      <div
        className="absolute top-0 left-0 right-0 mx-auto max-w-[834px] w-full h-[1px] max-lg:max-w-[80%] max-md:max-w-[50%]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      ></div>
    </section>
  );
};

export default TopAffiliate;
