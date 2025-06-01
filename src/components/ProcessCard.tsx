import checkIcon from "../assets/svgs/check.svg";
import documentIcon from "../assets/svgs/dashboard.svg";
import ProcessStatusCard from "./ProcessStatusCard";

const ProcessCard = () => {
  return (
    <div className="bg-white rounded-2xl w-full md:w-[300px] p-6 font-sans text-gray-700 shadow-lg/2">
      <h2 className="font-bold text-xl text-darkGrey mb-1">Process</h2>
      <p className="text-darkGrey text-sm mb-6 font-semibold">
        Current workflow status
      </p>

      <hr className="my-6 border-t border-[#EDF2F7]" />

      <div className="flex justify-end mb-6">
        <p className="text-darkGrey text-xs font-normal select-none">
          Updated 2h ago
        </p>
      </div>

      {/* this line how to controll it with screen height and width, so that it can looking good. */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute top-6 left-3 w-[2px] bg-[#96C3CF] z-0 h-full"
        ></div>

        <div className="flex items-start mb-8 relative z-10">
          {/* circle icon */}
          <div className="flex flex-col items-center mr-4">
            <div
              className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2F5368]"
              aria-hidden="true"
            >
              <img src={checkIcon} className="w-4 h-4" alt="Check Icon" />
            </div>
          </div>

          <ProcessStatusCard
            heading="Request Created"
            subHeading="Great job on the design project, team!"
            statusText="Submitted"
            statusTextColor="#7480C9"
            statusBgColor="#E4ECF7"
          />
        </div>

        <div className="flex items-start mb-8 relative z-10">
          {/* circle icon */}
          <div className="flex flex-col items-center mr-4">
            <div
              className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2F5368]"
              aria-hidden="true"
            >
              <img src={checkIcon} className="w-4 h-4" alt="Check Icon" />
            </div>
          </div>

          <ProcessStatusCard
            heading="Assigned to ROW"
            subHeading="Emphasize thorough requirements gathering and project scope."
            statusText="Completed"
            statusTextColor="#66CB9F"
            statusBgColor="#DEFFEE"
          />
        </div>

        <div className="flex items-start relative z-10">
          {/* circle icon */}
          <div className="flex flex-col items-center mr-4">
            <div
              className="flex items-center justify-center w-6 h-6 rounded-full border-1 bg-white border-[#2F5368] text-[#2F5368]"
              aria-hidden="true"
            >
              <img src={documentIcon} className="w-4 h-4" alt="Check Icon" />
            </div>
          </div>
          <ProcessStatusCard
            heading="Assigned to Master Coordinator"
            subHeading="Remember to capture all project requirements clearly."
            statusText="In Progress"
            statusTextColor="#F7936F"
            statusBgColor="#FFEDE3"
            inProgress={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
