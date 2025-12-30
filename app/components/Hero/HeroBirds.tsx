import BirdIcon from "@/app/assets/icons/BirdIcon";
import FlyingBird_1 from "@/app/assets/icons/FlyingBird_1";
import FlyingBird_2 from "@/app/assets/icons/FlyingBird_2";
import FlyingBird_3 from "@/app/assets/icons/FlyingBird_3";
import FlyingBird_4 from "@/app/assets/icons/FlyingBird_4";

export default function HeroBirds() {
  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {/* Upper left birds without speech bubbles */}
      <div className="absolute top-[291px] left-[298px] opacity-60 animate-fly-from-bottom duration-200">
        <BirdIcon />
      </div>
      <div className="absolute top-[329px] left-[495px] opacity-60 animate-fly-from-bottom duration-200">
        <BirdIcon />
      </div>

      {/* Upper right birds without speech bubbles */}
      <div className="absolute top-[305px] left-[1406px] opacity-60 animate-fly-from-bottom duration-200">
        <BirdIcon />
      </div>
      <div className="absolute top-[465px] left-[1446px] opacity-60 animate-fly-from-bottom duration-200">
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
  );
}
