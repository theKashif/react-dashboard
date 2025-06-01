import React from "react";

interface CompanyCardProps {
  nameHeading: string;
  name: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ nameHeading, name }) => {
  return (
    <div>
      <p className="text-darkGrey text-[12px] font-normal">{nameHeading}</p>
      <p className="font-bold text-[12px] text-[#222222]">{name}</p>
    </div>
  );
};

export default CompanyCard;
