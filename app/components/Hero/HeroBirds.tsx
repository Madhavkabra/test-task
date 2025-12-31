import BirdIcon from "@/app/assets/icons/BirdIcon";
import FlyingBird_3 from "@/app/assets/icons/FlyingBird_3";

export default function HeroBirds() {
  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {/* Upper left birds without speech bubbles */}
      <div className="absolute top-[20%] left-[5%] md:left-[16%] animate-fly-from-bottom duration-200">
        <BirdIcon />
      </div>
      <div className="absolute top-[38%] left-[7%] md:top-[34%] md:left-[28%] animate-fly-from-bottom duration-200">
        <BirdIcon />
      </div>

      {/* Upper right birds without speech bubbles */}
      <div className="absolute top-[22%] left-[85%] md:top-[31%] md:left-[75%] animate-fly-from-bottom duration-200">
        <BirdIcon />
      </div>
      <div className="absolute top-[40%] left-[86%] md:top-[48%] md:left-[77%] animate-fly-from-bottom duration-200">
        <BirdIcon />
      </div>     

      {/* Animated FlyingBird_3 from left and right diagonally */}
      <div className="absolute bottom-0 left-0 animate-fly-diagonal-left duration-200">
        <FlyingBird_3 />
      </div>
      <div className="absolute bottom-0 right-0 animate-fly-diagonal-right duration-200">
        <FlyingBird_3 />
      </div>
    </div>
  );
}
