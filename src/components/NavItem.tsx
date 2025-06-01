import React from "react";

interface NavItemProps {
  src: string;
  name: string;
  count?: number;
    isActive?: boolean;
    isSetting?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ src, name, count, isActive, isSetting }) => {
  return (
    <a
      className={`flex items-center gap-3 ${
        isActive
          ? "text-primary bg-white rounded-lg px-4 py-2 font-bold"
          : "text-white font-semibold"
      }`}
      href="#"
    >
      <img src={src} alt={`${name} icon`} />
      <span>{name}</span>
      {count !== undefined && count > 0 && (
              <span className={`ml-auto text-xs font-bold rounded-full px-2 py-0.5 select-none ${isSetting ? 'text-red-500 bg-red-200' : 'bg-primaryLightest text-primary'}`}>
          {count}
        </span>
      )}
    </a>
  );
};

export default NavItem;
