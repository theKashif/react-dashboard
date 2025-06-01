import React from "react";
import personIcon from "../assets/svgs/userBlack.svg";
import clockIcon from "../assets/svgs/clock.svg";

interface props {
  heading: string;
  subHeading: string;
  statusText: string;
  statusTextColor: string;
  statusBgColor: string;
  inProgress?: boolean;
}

const ProcessStatusCard: React.FC<props> = ({
  heading,
  subHeading,
  statusText,
  statusTextColor,
  statusBgColor,
  inProgress = false,
}) => {
  return (
    <div className="flex-1">
      <h3 className="font-semibold text-sm text-[#59595B] mb-1">{heading}</h3>
      <p className="text-[#718096] text-xs mb-2 font-normal">{subHeading}</p>

      {inProgress && (
        <div className="flex items-center justify-between mb-1">
          <div className="w-full max-w-[180px] h-2 rounded-full bg-[#D9D9D9] mr-3 overflow-hidden">
            <div className="h-2 rounded-full bg-primary w-[65%]"></div>
          </div>
          <span className="text-primary text-sm font-semibold select-none">
            65%
          </span>
        </div>
      )}

      <span
        style={{ color: statusTextColor, backgroundColor: statusBgColor }}
        className="inline-block text-[10px] font-bold rounded-full px-3 py-1 mb-3 select-none"
      >
        {statusText}
      </span>
      <div className="flex flex-wrap items-center text-[#5B7A8F] text-xs space-x-1 space-y-1">
        <div className="flex items-center space-x-1 mr-4 text-[10px] font-normal">
          <img src={personIcon} />
          <span>Lorem Ipsum</span>
          <span className="pl-2">Contractor</span>
        </div>
        <div className="flex items-center space-x-1 text-[10px] font-normal">
          <img src={clockIcon} />
          <time>12 Mar 2025, 11:00 am</time>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProcessStatusCard);
