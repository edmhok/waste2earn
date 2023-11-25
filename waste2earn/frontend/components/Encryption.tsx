import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motion";
import phone from "../assets/4phones.png";
import video from "../assets/encryption.webm";

const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full mt-10">
      <div className="w-auto h-auto top-0 absolute z-[21]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium flex flex-col justify-center text-gray-200"
        >
          <div>Mobile MockUp Design</div>
          <div className="Welcome-box px-[15px] my-[20px] border border-[#7042f88b] opacity-[0.9]">
            <h1 className="Welcome-text text-[12px]">Click to Navigate Figma</h1>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-30px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col mt-[30px] items-center group cursor-pointer w-auto h-auto">
          <a target="_blank" href="https://www.figma.com/proto/ybbj6pw7vYJc8I9kxjn4zE/waste2earn--UI-Design-for-Recycle?type=design&node-id=26-77&t=TwBIlOvvPZzhHPKd-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A6&mode=design">
            <img
              src={phone}
              width={580}
              height={200}
              className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
          </a>
        </div>


      </div>


      <div className="flex items-start justify-center absolute z-1">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src={video}
        />
      </div>
    </div>
  );
};

export default Encryption;
