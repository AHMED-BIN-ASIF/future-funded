import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/ff-logo.webp";
import RightIconGreen from "../assets/icons/arrow-right.svg";
import RightIcon from "../assets/icons/arrow-right-white.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerContentRef = useRef(null);
  const [familyBtnIcon, setFamilyBtnIcon] = useState(RightIcon); // State for "Join The Family" button icon

  useEffect(() => {
    const mm = gsap.matchMedia(); // Initialize GSAP matchMedia
    mm.add("(min-width: 768px)", () => {
      // Animation for screens wider than 768px
      gsap.fromTo(
        headerContentRef.current,
        { opacity: 1, y: 0 }, // Initial state
        {
          y: -100, // Moves up when scrolling down
          opacity: 0, // Fades out
          ease: "power3.out",
          duration: 1.5,
          scrollTrigger: {
            // trigger: headerContentRef.current,
            // start: "top top",
            // end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              if (self.direction === 1) {
                // Scroll down
                gsap.to(headerContentRef.current, {
                  opacity: 0,
                  y: -100,
                });
              } else if (self.direction === -1) {
                // Scroll up
                gsap.to(headerContentRef.current, {
                  opacity: 1,
                  y: 0,
                });
              }
            },
          },
        }
      );
    });

    return () => {
      mm.revert(); // Revert GSAP matchMedia on cleanup
    };
  }, []);

  const handleMouseEnter = () => {
    setFamilyBtnIcon(RightIconGreen); // Change to green icon when hover over "Join The Family" button
  };

  const handleMouseLeave = () => {
    setFamilyBtnIcon(RightIcon); // Reset to original icon when hover leaves
  };

  const ButtonLink = ({ to, text, icon, iconAlt, btnClass, onMouseEnter, onMouseLeave }) => (
    <Link
      to={to}
      className={`${btnClass} btn rounded-[9px] flex items-center gap-[18px] border-[1.125px] h-[54px] pl-[24px] pr-[10px] text-sm leading-none border-solid max-md:text-[9px] max-md:h-[31px] max-md:pr-[5px] max-md:pl-[14px] max-md:rounded-[5px] max-md:gap-[9px]`}
      onMouseEnter={onMouseEnter} // Apply hover state to this button only
      onMouseLeave={onMouseLeave} // Reset hover state for this button
    >
      <span className="relative z-[10]">{text}</span>
      <img
        src={icon}
        alt={iconAlt}
        className="relative z-[10] w-[34px] h-[34px] max-md:w-6 max-md:h-6"
      />
    </Link>
  );

  return (
    <header
      className="py-5 md:p-5 fixed left-0 top-0 w-full z-[9999] max-md:px-4"
      style={{
        transition: "opacity 0.3s ease-in-out", // Smooth opacity change on hover
      }}
    >
      <div
        className="w-full max-w-[1640px] mx-auto rounded-[14px] p-[10px_20px] max-md:p-[6px_12px]"
        ref={headerContentRef}
        style={{
          background: "linear-gradient(180deg, rgba(10, 10, 10, 0.90) 0%, #040404 100%)",
        }}
      >
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-wrap gap-[36px]">
            <Link className="flex items-center justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="max-w-[200px] max-md:max-w-[140px]"
                loading="lazy"
              />
            </Link>

            <ButtonLink
              to="/"
              text="Website Home Page"
              icon={RightIconGreen}
              iconAlt="arrow"
              btnClass="max-lg:hidden text-white bg-gradient-to-r from-[#00C88C] to-[#0C7C33] border-[rgba(255,255,255,0.10)]"
            />
          </div>

          {/* "Join The Family" button with icon change on hover */}
          <ButtonLink
            to="/"
            text="Join The Family"
            icon={familyBtnIcon} // Use dynamic icon based on hover state
            iconAlt="arrow"
            btnClass="text-[#011E19] bg-white border-[rgba(255,255,255,0.10)] hover:border-[#00C88C] max-lg:hidden"
            onMouseEnter={handleMouseEnter} // Hover effect for icon
            onMouseLeave={handleMouseLeave} // Reset effect when hover leaves
          />
          <ButtonLink
            to="/"
            text="Website Home"
            icon={familyBtnIcon} // Use dynamic icon based on hover state
            iconAlt="arrow"
            btnClass="text-[#011E19] bg-white border-[rgba(255,255,255,0.10)] hover:border-[#00C88C] lg:hidden"
            onMouseEnter={handleMouseEnter} // Hover effect for icon
            onMouseLeave={handleMouseLeave} // Reset effect when hover leaves
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
