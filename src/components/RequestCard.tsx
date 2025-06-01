import approveIcon from "../assets/svgs/approve.svg";
import assignIcon from "../assets/svgs/assign.svg";
import rejectIcon from "../assets/svgs/reject.svg";
import returnIcon from "../assets/svgs/return.svg";
import CompanyCard from "./CompanyCard";

const RequestCard = () => {
  return (
    <div className="mx-auto bg-white rounded-2xl p-3 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        <h1 className="text-[#414042] text-[26px] font-semibold">
          Lorem Ipsum Request
        </h1>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-[#2f6674] text-white font-bold text-[14px] px-2 py-1 rounded-lg">
            <img src={assignIcon} />
            Assign
          </button>
          <button className="flex items-center gap-2 bg-[#d9f7e4] text-[#6fcf97] font-bold text-[14px] px-2 py-1 rounded-lg">
            <img src={approveIcon} />
            Approve
          </button>
          <button className="flex items-center gap-2 bg-[#f9d6d6] text-[#d94a4a] font-bold text-[14px] px-2 py-1 rounded-lg">
            <img src={rejectIcon} />
            Reject
          </button>
          <button className="flex items-center gap-2 bg-[#b9d1db] text-[#2f6674] font-bold text-[14px] px-2 py-1 rounded-lg">
            <img src={returnIcon} />
            Return for modification
          </button>
        </div>
      </div>

      <p className="mt-2 text-[#8D8C8E] text-[14px] font-semibold">
        Application no# 1122545266455
      </p>

      <hr className="my-6 border-t border-[#EDF2F7]" />

      <div>
        <nav className="flex gap-6 text-[14px] font-bold text-[#444444] mb-6">
          <button
            className="text-primary font-semibold border-b-[1px] border-[#2f6674] pb-1"
            type="button"
          >
            Company Details
          </button>
          <button
            type="button"
            className="font-semibold text-[#59595B] text-[14px]"
          >
            Company Profile
          </button>
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-6 text-[14px] leading-[20px] text-[#444444]">
          <CompanyCard nameHeading="Company Name (En)" name="Lorem Ipsum" />
          <CompanyCard
            nameHeading="Company Name (Ar)"
            name="اختبار اسم الشركة"
          />
          <CompanyCard nameHeading="Company Type" name="Lorem Ipsum" />
          <CompanyCard nameHeading="Trade License Number" name="CN-1000770" />
          <CompanyCard nameHeading="License Issue Date" name="01-05-2025" />
          <CompanyCard nameHeading="License Expiry Date" name="01-05-2028" />
        </div>
      </div>

      <hr className="my-6 border-t border-[#e6ebf0]" />

      <div>
        <h2 className="text-[16px] leading-[24px] font-bold text-[#8D8C8E] mb-6">
          Contact Person
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-8 gap-x-6 text-[14px] leading-[20px] text-[#444444]">
          <CompanyCard nameHeading="Contact Person Name" name="John Doe" />
          <CompanyCard nameHeading="Email" name="johndoe@yopmail.com" />
          <CompanyCard nameHeading="Mobile" name="123456789" />
          <CompanyCard nameHeading="Phone" name="123456789" />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
