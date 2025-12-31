export default function FeatureBadge() {
  return (
    <div className="w-[265px] m-auto inline-flex items-center bg-white justify-between px-2 pt-1 pb-[5px] rounded-full">
      <div className="flex items-center justify-center h-[17px] w-8 px-1 gap-[3.32px] bg-blue-500 p-1 rounded-full">
        <div className="size-1 bg-white rounded-full"></div>
        <div className="size-1 bg-white rounded-full"></div>
        <div className="size-1 bg-white rounded-full"></div>
      </div>
      <span className="text-blue-600 font-medium text-base tracking-[-0.02em]">
        #1 iMessage Automation Tool
      </span>
    </div>
  );
}

