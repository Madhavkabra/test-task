import Image from "next/image";
import cloud1 from "@/app/assets/images/cloud_1.png";
import FlyingBird_1 from "@/app/assets/icons/FlyingBird_1";
import FlyingBird_2 from "@/app/assets/icons/FlyingBird_2";
import FlyingBird_3 from "@/app/assets/icons/FlyingBird_3";
import FlyingBird_4 from "@/app/assets/icons/FlyingBird_4";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroClouds() {
  return (
    <div className="relative">
      <div className="absolute top-[60%] left-[20%]">
        <FlyingBird_1 />
      </div>
      <div className="absolute top-[50%] left-[36%]">
        <FlyingBird_2 />
      </div>
      <div className="absolute top-[80%] left-[65%]">
        <FlyingBird_3 />
      </div>
      <div className="absolute top-[50%] left-[82%]">
        <FlyingBird_4 />
      </div>
      <Image
        className="w-full h-full object-cover object-bottom opacity-10"
        src={cloud1}
        alt="Cloud"
        width={1920}
        height={544}
        priority
      />
      <ScrollIndicator />
    </div>
  );
}
