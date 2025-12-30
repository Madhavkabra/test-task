import ArrowDown from "@/app/assets/icons/ArrowDown";

export default function ScrollIndicator() {
  return (
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 sm:gap-2">
      <span className="font-sans font-medium text-[18px] leading-[130%] tracking-[-0.02em] text-center text-gray-900 px-4 py-2 rounded-full">
        Scroll to learn more
      </span>
      <ArrowDown />
    </div>
  );
}

