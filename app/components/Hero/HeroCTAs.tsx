import AppleLogo from "@/app/assets/icons/AppleLogo";

export default function HeroCTAs() {
  return (
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
  );
}

