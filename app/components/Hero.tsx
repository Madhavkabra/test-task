"use client";

import Image from "next/image";
import cloud1 from "@/app/assets/images/cloud_1.png";
import BirdIcon from "@/app/assets/icons/BirdIcon";
import Header from "./Header";
import AppleLogo from "@/app/assets/icons/AppleLogo";
import FlyingBird_1 from "@/app/assets/icons/FlyingBird_1";
import FlyingBird_2 from "../assets/icons/FlyingBird_2";
import FlyingBird_3 from "../assets/icons/FlyingBird_3";
import FlyingBird_4 from "../assets/icons/FlyingBird_4";
import ArrowDown from "../assets/icons/ArrowDown";
export default function Hero() {
  return (
    <section
      className="min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "#007AFF",
        backgroundImage:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))",
      }}
    >
      {/* Birds with Speech Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Upper left birds without speech bubbles */}
        <div className="absolute top-[291px] left-[298px] opacity-60">
          <BirdIcon />
        </div>
        <div className="absolute top-[329px] left-[495px] opacity-60">
          <BirdIcon />
        </div>

        {/* Upper right birds without speech bubbles */}
        <div className="absolute top-[305px] left-[1406px] opacity-60">
          <BirdIcon />
        </div>
        <div className="absolute top-[465px] left-[1446px] opacity-60">
          <BirdIcon />
        </div>

        {/* Lower birds with speech bubbles */}
        <div className="absolute top-[925px] left-[375px]">
          <FlyingBird_1 />
        </div>
        <div className="absolute top-[881px] left-[665px]">
          <FlyingBird_2 />
        </div>
        <div className="absolute top-[956px] left-[1263px]">
          <FlyingBird_3 />
        </div>
        <div className="absolute top-[882px] left-[1577px]">
          <FlyingBird_4 />
        </div>
      </div>

      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center p-16 flex flex-col gap-6">
        {/* Feature Tag */}
        <div className="w-[265px] m-auto inline-flex items-center bg-white justify-between px-2 py-1 rounded-full">
          <div className="flex items-center justify-center h-[17px] w-8 px-1 gap-[3.32px] bg-blue-500 p-1 rounded-full">
            <div className="size-1 bg-white rounded-full"></div>
            <div className="size-1 bg-white rounded-full"></div>
            <div className="size-1 bg-white rounded-full"></div>
          </div>
          <span className="text-blue-600 font-medium text-base tracking-[-0.02em]">
            #1 iMessage Automation Tool
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="transition-all duration-1000 delay-500 text-center font-sans font-bold text-[64px] leading-[120%] tracking-[-0.02em] w-[720px]">
          <span className="text-primary-color">iMessage </span>
          <span className="text-gray-900">
            {" "}
            Automation for Teams and AI Workflows.
          </span>
        </h1>

        {/* Description */}
        <p className="mb-8 sm:mb-10 max-w-xl mx-auto font-sans font-normal text-[18px] leading-[130%] tracking-[-0.02em] text-center text-gray-700">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="bg-primary-color hover:opacity-90 text-white rounded-[50px] font-medium text-lg transition-opacity cursor-pointer flex items-center justify-center w-[136px] h-[46px] py-3 px-5 tracking-[-0.02em]">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-900 rounded-[50px] border-[0.7px] border-border-button font-medium text-lg transition-colors cursor-pointer flex items-center justify-between w-[266px] h-[46px] py-3 px-5 tracking-[-0.02em]">
            <AppleLogo />
            <div className="w-[1px] h-[18px] self-end bg-gray-500" />
            <span>Download the Mac app</span>
          </button>
        </div>
      </div>

      <Image
        className="w-full h-full object-cover object-bottom opacity-10"
        src={cloud1}
        alt="Cloud"
        width={1920}
        height={465}
        priority
      />
      {/* Scroll Indicator */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 sm:gap-2">
        <span className="font-sans font-medium text-[18px] leading-[130%] tracking-[-0.02em] text-center text-gray-900 px-4 py-2 rounded-full">
          Scroll to learn more
        </span>
        <ArrowDown />
      </div>
    </section>
  );
}
