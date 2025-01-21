import React from "react";
import { Link } from "react-router-dom";
import Brand from "../assets/images/ff-logo.webp";
import Mark from "../assets/images/footer-mark.png";
import icIcon from "../assets/icons/icshape.svg";
import instaIcon from "../assets/icons/instagram.svg";
import yIcon from "../assets/icons/youtube.svg";
import xIcon from "../assets/icons/x-icon.svg";

const Footer = () => {
  return (
    <footer className="px-[40px] mt-[-50px] relative max-lg:px-[30px] max-md:px-[20px] max-md:mt-[-40px]">
      <div
        className="p-[80px] rounded-[40px] relative z-[2] max-xl:p-[50px_30px] max-md:p-[40px_20px]"
        style={{
          background:
            "linear-gradient(180deg, #04110D 30.59%, rgba(5, 5, 5, 0.00) 100%)",
        }}
      >
        {/* container */}
        <div className="max-w-[1680px] mx-auto w-[90]%">
          {/* newslettr  */}
          <div className="pb-[80px] mb-[80px] border-b border-solid border-[rgba(255,255,255,0.10)] max-xl:pb-[50px] max-xl:mb-[50px] max-md:pb-[40px] max-md:mb-[40px]">
            <span className="text-white text-[32px] font-medium leading-normal tracking-[-0.32px] max-w-[372px] max-lg:text-[26px] max-lg:max-w-[300px] max-md:text-[18px] max-md:max-w-[210px]">
              Join our newsleter to keep up to date with us!
            </span>
          </div>
          <div className="flex justify-between max-md:flex-col max-md:gap-[40px]">
            <div className="flex flex-col gap-[24px] max-md:gap-[19px]">
              <Link to="/" className="max-w-[300px] max-xl:max-w-[280px] max-lg:max-w-[250px] max-md:max-w-[200px]">
                <img src={Brand} alt="ffBrand" className="w-full block " />
              </Link>
              <span className="text-base block text-[#999F9F] leading-relaxed max-lg:text-sm">
                Your Favourite Futures Propfirm
              </span>
            </div>
            <ul className="grid grid-cols-3 gap-[20px_60px] text-white text-base leading-none max-xl:gap-[20px_40px] max-lg:grid-cols-2 max-lg:text-[14px] max-md:grid-cols-1 max-md:text-[12px]">
              <li className="max-md:order-1">
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="max-md:order-4">
                <Link to="/cookie-policy" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
              <li className="max-md:order-6">
                <Link to="/risk-disclosure" className="hover:underline">
                  Risk Disclosure
                </Link>
              </li>
              <li className="max-md:order-2">
                <Link to="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li  className="max-md:order-5 max-md:mb-[20px]">
                <Link to="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li className="max-md:order-7">
                <Link to="/be-a-partner" className="hover:underline">
                  Be a Partner
                </Link>
              </li>
              <li  className="max-md:order-3 max-md:mb-[20px]">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items items-center justify-between py-[80px] max-xl:py-[60px] max-md:py-[40px] max-md:flex-col max-md:gap-[20px] max-md:items-start">
            <span className="text-base block text-white leading-relaxed max-lg:text-sm max-md:text-xs">
              Copyright © 2024 FutureFunded Company. All rights reserved.
            </span>
            <ul className="flex gap-[10px]">
              <li>
                <Link
                  to="/"
                  className="rounded-[4px] p-[7px] text-[#00C487] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(255,255,255,0.10)] flex items-center justify-center w-[34px] h-[34px]"
                >
                  <img src={icIcon} alt="ic" />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="rounded-[4px] p-[7px] text-[#00C487] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(255,255,255,0.10)] flex items-center justify-center w-[34px] h-[34px]"
                >
                  <img src={instaIcon} alt="ic" />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="rounded-[4px] p-[7px] text-[#00C487] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(255,255,255,0.10)] flex items-center justify-center w-[34px] h-[34px]"
                >
                  <img src={yIcon} alt="ic" />
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="rounded-[4px] p-[7px] text-[#00C487] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(255,255,255,0.10)] flex items-center justify-center w-[34px] h-[34px]"
                >
                  <img src={xIcon} alt="ic" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] text-sm leading-[1.85] text-[#8E8E8E] max-md:text-[12px]">
            <p>
              Futures and Forex Trading Risk:
              <br />
              Trading futures and forex involves substantial risk and is not
              suitable for every investor. You could potentially lose all or
              more than your initial investment. Only risk capital—funds that
              can be lost without impacting your financial security or
              lifestyle—should be used for trading. Trading should only be
              considered by those with sufficient risk capital. Past performance
              is not necessarily indicative of future results.
            </p>
            <p>
              Hypothetical Performance Disclosure: <br />
              Hypothetical performance results have significant limitations,
              some of which are described below. There is no guarantee that any
              account will achieve profits or losses similar to those shown on
              the website or in any promotional material.
            </p>
            <p>
              CFTC Rule 4.41:
              <br />
              Hypothetical or simulated performance results have certain
              limitations. Unlike actual performance records, simulated results
              do not represent real trading. Since the trades have not been
              executed, the results may under- or over-compensate for the impact
              of market factors, such as liquidity. Simulated trading programs
              also benefit from hindsight, which can further limit their
              accuracy. No guarantee is made that any account will achieve
              profits or losses similar to those shown.
            </p>
            <p>
              Testimonials:
              <br />
              Testimonials on this website may not reflect the experiences of
              all clients or customers and are not a guarantee of future
              performance or success. No guarantee is made that any evaluation
              account will achieve profits or losses similar to those shown.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-[auto_60px_0_auto] max-w-[809px] w-[40%] z-[1] max-md:mx-auto max-md:inset-[auto_0_0_0] max-md:max-w-[302px] max-md:w-full">
        {" "}
        <img src={Mark} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
               