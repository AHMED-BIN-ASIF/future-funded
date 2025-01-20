import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import AwardsTop from "../assets/images/awards-top.svg";
import Award1 from "../assets/images/10-referal-award.svg";
import Award2 from "../assets/images/50-referal-award.svg";
import Award3 from "../assets/images/100-referal-award.svg";
import Award4 from "../assets/images/500-referal-award.svg";
import Award5 from "../assets/images/1k-referal-award.svg";
import Award6 from "../assets/images/5k-referal-award.svg";
import Award7 from "../assets/images/10k-referal-award.svg";
import Award8 from "../assets/images/25k-referal-award.svg";

const awardsData = [
  {
    id: 1,
    title: "10 Referrals",
    subtitle: "Rookie",
    description: "Get affiliate material",
    image: Award1,
    gradient:
      "linear-gradient(180deg, rgba(147, 178, 93, 0.20) 0%, rgba(147, 178, 93, 0.00) 100%), #080B10",
    borderColor: "rgba(147,178,93,0.20)",
    subtitleBorderColor: "rgba(147, 178, 93, 0.60)",
    subtitleBgColor: "rgba(147, 178, 93, 0.40)",

  },
  {
    id: 2,
    title: "50 Referrals",
    subtitle: "Pro",
    description:
      "Bonus of $150 and a featured spot on the affiliate leaderboard.",
    image: Award2,
    gradient:
      "linear-gradient(180deg, rgba(93, 178, 110, 0.20) 0%, rgba(93, 178, 110, 0.00) 100%), #080B10",
    borderColor: "rgba(93, 178, 110, 0.20)",
    subtitleBorderColor: "rgba(93, 178, 110, 0.60)",
    subtitleBgColor: "rgba(93, 178, 110, 0.40)",
  },
  {
    id: 3,
    title: "100 Referrals",
    subtitle: "Elite Affiliate",
    description: "Reward: $500 on top of your commissions.",
    image: Award3,
    gradient:
      "linear-gradient(180deg, rgba(93, 178, 168, 0.20) 0%, rgba(93, 178, 168, 0.00) 100%), #080B10",
    borderColor: "rgba(93, 178, 168, 0.20)",
    subtitleBorderColor: "rgba(105, 184, 174, 0.60",
    subtitleBgColor: "rgba(105, 184, 174, 0.40)",
  },
  {
    id: 4,
    title: "500 Referrals",
    subtitle: "Super Affiliate",
    description: "Reward: $1000 on top of your commissions.",
    image: Award4,
    gradient: "linear-gradient(180deg, rgba(93, 123, 178, 0.20) 0%, rgba(93, 123, 178, 0.00) 100%), #080B10",
    borderColor: "rgba(93, 123, 178, 0.20)",
    subtitleBorderColor: "rgba(93, 123, 178, 0.60)",
    subtitleBgColor: "rgba(93, 123, 178, 0.40)",
  },
  {
    id: 5,
    title: "1000 Referrals",
    subtitle: "Super Affiliate",
    description: "Reward: $2500 on top of your commissions.",
    image: Award5,
    gradient:
      "linear-gradient(180deg, rgba(93, 123, 178, 0.20) 0%, rgba(93, 123, 178, 0.00) 100%), #080B10",
    borderColor: "rgba(93, 123, 178, 0.20)",
    subtitleBorderColor: "rgba(93, 123, 178, 0.60)",
    subtitleBgColor: "rgba(93, 123, 178, 0.40)",
  },
  {
    id: 6,
    title: "5000 Referrals",
    subtitle: "Legendary Affiliate",
    description: "Reward: $5000 on top of your commissions. ",
    image: Award6,
    gradient:
      "linear-gradient(180deg, rgba(93, 178, 168, 0.20) 0%, rgba(93, 178, 168, 0.00) 100%), #080B10",
    borderColor: "rgba(93, 178, 168, 0.20)",
    shadow: "0px 4px 40px 0px rgba(156, 144, 32, 0.25) inset",
    subtitleBorderColor: "rgba(93, 178, 168, 0.60)",
    subtitleBgColor: "rgba(93, 178, 168, 0.40)",
  },
  {
    id: 7,
    title: "10,000 Referrals",
    subtitle: "Network Champion",
    description: "Reward: $25,000 cash bonus, a luxury gift, and a personal feature in FutureFunded marketing campaigns.",
    image: Award7,
    gradient:
      "linear-gradient(180deg, rgba(93, 178, 110, 0.20) 0%, rgba(93, 178, 110, 0.00) 100%), #080B10",
    borderColor: "rgba(93, 178, 110, 0.20)",
    shadow: "0px 4px 40px 0px rgba(156, 144, 32, 0.25) inset",
    subtitleBorderColor: "rgba(93, 178, 110, 0.60)",
    subtitleBgColor: "rgba(93, 178, 110, 0.40)",
  },
  {
    id: 8,
    title: "25,000 Referrals",
    subtitle: "Global Ambassador",
    description: "Reward: $75,000 cash bonus, travel incentives to international events, and a share in the company’s profit pool.",
    image: Award8,
    gradient:
      " linear-gradient(180deg, rgba(147, 178, 93, 0.20) 0%, rgba(147, 178, 93, 0.00) 100%), #080B10",
    borderColor: "rgba(147, 178, 93, 0.20)",
    shadow: "0px 4px 40px 0px rgba(156, 144, 32, 0.25) inset",
    subtitleBorderColor: "rgba(147, 178, 93, 0.60)",
    subtitleBgColor: "rgba(147, 178, 93, 0.40)",
  },
];

const BigAwards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="pt-[88px] pb-[150px] relative  max-xl:pt-10 max-lg:pb-24 max-md:pb-[350px]">
      <div className="container relative z-[1]">
        <h2 className="text-[84px] text-center text-white font-medium leading-normal 
        mb-[103px] max-xl:mb-20 max-xl:text-[64px] max-lg:text-[48px] max-lg:mb-12 max-md:text-2xl 
        max-md:mb-16 ">
          <span className="text-fundedGreen">Big awards</span>, you can achieve
        </h2>

        {isMobile ? (
          <Slider {...sliderSettings}>
            {awardsData.map((award) => (
              <div key={award.id}>
                <div
                  className="flex flex-col p-[32px_20px_24px] text-center justify-between items-center rounded-[32px] border  max-md:mx-6 max-md:min-h-[350px] "
                  style={{
                    background: award.gradient,
                    borderColor: award.borderColor,
                    boxShadow: award.shadow,
                  }}
                >
                  <div>
                    <span
                      className="p-[10px] text-sm leading-none text-white rounded-full border"
                      style={{
                        borderColor: award.subtitleBorderColor,
                        backgroundColor: award.subtitleBgColor,
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      {award.subtitle}
                    </span>
                    <h4 className="text-xl font-semibold mb-[14px] text-white mt-[20px]">
                      {award.title}
                    </h4>
                    <p className="text-xs text-[rgba(255,255,255,0.60)] leading-relaxed max-w-[230px] max-md:text-[12px]">
                      {award.description}
                    </p>
                  </div>
                  <div className="max-w[160px]">
                    <img
                      src={award.image}
                      alt={`award ${award.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-4 gap-4 max-w-[1158px] mx-auto max-lg:grid-cols-3  max-md:grid-cols-2  max-sm:grid-cols-1">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="flex flex-col p-[32px_20px_24px] text-center justify-between items-center rounded-[32px] border max-xl:rounded-[26px]"
                style={{
                  background: award.gradient,
                  borderColor: award.borderColor,
                  boxShadow: award.shadow,
                }}
              >
                <div>
                  <span
                    className="p-[10px] text-sm leading-none text-white rounded-full border"
                    style={{
                      borderColor: award.subtitleBorderColor,
                      backgroundColor: award.subtitleBgColor,
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    {award.subtitle}
                  </span>
                  <h4 className="text-xl font-semibold mb-[14px] text-white mt-[20px]">
                    {award.title}
                  </h4>
                  <p className="text-xs text-[rgba(255,255,255,0.60)] leading-relaxed max-w-[230px]">
                    {award.description}
                  </p>
                </div>
                <div className="max-w[160px]">
                  <img
                    src={award.image}
                    alt={`award ${award.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-[14px] text-[#00C88C] mt-[40px] text-center max-md:hidden">
          These referrals encompass both your direct sales and sales generated
          within your network.
        </p>
      </div>

      {/* Top gradient */}
      <div className="absolute z-0 w-full h-[159px] top-[-85px] max-xl:top-[-40px] max-lg:h-[100px] max-lg:inset-[0_0_0_auto]">
        <img src={AwardsTop} alt="paid top" />
      </div>
    </section>
  );
};

export default BigAwards;

