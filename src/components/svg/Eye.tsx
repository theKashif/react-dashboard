import React from "react";

interface MyIconProps {
  size?: number | string;
}

const EyeIcon: React.FC<MyIconProps> = ({ size = 24}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8974 7.10244L7.10244 10.8974C6.61494 10.4099 6.31494 9.74244 6.31494 8.99994C6.31494 7.51494 7.51494 6.31494 8.99994 6.31494C9.74244 6.31494 10.4099 6.61494 10.8974 7.10244Z"
        stroke="#8D8C8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3649 4.32761C12.0524 3.33761 10.5524 2.79761 8.99988 2.79761C6.35238 2.79761 3.88488 4.35761 2.16738 7.05761C1.49238 8.11511 1.49238 9.89261 2.16738 10.9501C2.75988 11.8801 3.44988 12.6826 4.19988 13.3276"
        stroke="#8D8C8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.31494 14.6475C7.16994 15.0075 8.07744 15.2025 8.99994 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88501 16.5074 8.10751 15.8324 7.05001C15.5849 6.66001 15.3149 6.29251 15.0374 5.94751"
        stroke="#8D8C8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6326 9.5249C11.4376 10.5824 10.5751 11.4449 9.51758 11.6399"
        stroke="#8D8C8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.1025 10.8975L1.5 16.5"
        stroke="#8D8C8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 1.5L10.8975 7.1025"
        stroke="#8D8C8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
