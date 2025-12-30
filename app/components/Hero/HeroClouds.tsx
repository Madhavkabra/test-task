import Image from "next/image";
import cloud1 from "@/app/assets/images/cloud_1.png";

export default function HeroClouds() {
  return (
    <Image
      className="w-full h-full object-cover object-bottom opacity-10"
      src={cloud1}
      alt="Cloud"
      width={1920}
      height={465}
      priority
    />
  );
}

