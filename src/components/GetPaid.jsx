import React, { useRef, useState } from "react";
import PaidTop from "../assets/images/paid-top.svg";
import Play from "../assets/icons/play.svg";
import VideoThumb from "../assets/images/video-thumb.webp";
import PaidVideo from "../assets/videos/dummy-video.mp4";

const GetPaid = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Track if the video is playing
  const videoRef = useRef(null); // Reference to the video element

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video
    } else {
      videoRef.current.play(); // Play the video
    }
    setIsPlaying(!isPlaying); // Toggle the play state
  };

  return (
    <section className="pt-[140px] pb-[75px] relative max-xl:pt-[100px] max-lg:pt-[60px]">
      <div className="container relative z-[1]">
        <h2 className="text-[84px] text-center text-white font-medium leading-normal mb-[110px] max-xl:mb-[80px] max-xl:text-[64px] max-lg:text-[50px] max-lg:mb-[60px] max-md:text-2xl max-md:mb-[90px] ">
          Share, <span className="text-fundedGreen">Get Paid</span>, Repeat
        </h2>
        <div className="relative max-w-[820px] max-h-[447px] overflow-hidden mx-auto rounded-[10px]">
          {/* Play button */}
          <div
            className="absolute left-0 right-0 top-[35%] z-10 flex w-[140px] h-[140px] p-[32px] justify-center rounded-[56px] mx-auto 
            bg-[rgba(0,90,197,0.10)] shadow-[0_4px_4px_0px_rgba(255,255,255,0.25)_inset,0_-4px_4px_0px_rgba(255,255,255,0.25)_inset] 
            items-center cursor-pointer max-md:p-4 max-md:w-[70px] max-md:h-[70px] max-md:top-[30%] max-md:rounded-[28px]"
            onClick={handlePlayPause} // Add click handler to play/pause the video
          >
            <img src={Play} alt="play-icon" />
          </div>

          {/* Video */}
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            className="w-full h-full object-cover"
            autoPlay={false} // Don't autoplay initially
            muted
            loop
            poster={VideoThumb} // Add the poster image here
          >
            <source src={PaidVideo} type="video/mp4" />
            <source src={PaidVideo} type="video/ogg" />
          </video>
        </div>
      </div>

      {/* Top gradient */}
      <div className="absolute z-0 w-full h-[159px] top-0 max-lg:h-[100px]">
        <img src={PaidTop} alt="paid top" />
      </div>
    </section>
  );
};

export default GetPaid;
