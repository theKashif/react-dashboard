import SearchBar from "./SearchBar";
import dotsIcon from "../assets/svgs/verticalDots.svg";
import leftArrowIcons from "../assets/svgs/arrow-left.svg";
import rightArrowIcons from "../assets/svgs/arrow-right.svg";

const HistoryCard = () => {
  return (
    <div className="mx-auto bg-white rounded-2xl p-3 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-darkGrey font-bold text-lg leading-6">
            Request history
          </div>
          <div className="flex flex-row gap-3">
            <SearchBar />
            <button
              type="button"
              className="px-5 py-2 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Desktop table layout */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#E6EDF3]">
          <table className="w-full text-left border-collapse">
            <thead className="bg-skyBlue text-[#718096] font-bold text-sm leading-6">
              <tr>
                <th className="py-2 px-4 min-w-[140px]">Performed By</th>
                <th className="py-2 px-4 min-w-[140px]">Assigned To</th>
                <th className="py-2 px-4 min-w-[120px]">Date &amp; Time</th>
                <th className="py-2 px-4 min-w-[220px]">Comments</th>
                <th className="py-2 px-4 min-w-[140px]">Action Taken</th>
                <th className="py-2 px-4 w-12"></th>
              </tr>
            </thead>
            <tbody className="text-sm text-[#475569]">
              <tr className="border-t border-[#E6EDF3]">
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">John Doe</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">Contractor</div>
                </td>
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">John Doe</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">ROW</div>
                </td>
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">11/03/2025</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">11:23 AM</div>
                </td>
                <td className="py-4 px-6 align-top">-</td>
                <td className="py-4 px-6 align-top">
                  <span className="inline-block bg-[#E4ECF7] text-[#7480C9] text-xs font-semibold px-3 py-1 rounded-full select-none">
                    Submitted
                  </span>
                </td>

                <td className="py-4 px-6 align-top text-center cursor-pointer w-20">
                  <div className="w-3 h-4 mx-auto"></div>
                  <img
                    src={dotsIcon}
                    alt="Options"
                    // className="w-4 h-6 mx-auto"
                  />
                </td>

              </tr>
              <tr className="border-t border-[#E6EDF3]">
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">John Doe</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">Row</div>
                </td>
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">John Doe</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">
                    Master Coordinator
                  </div>
                </td>
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">11/04/2025</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">12:45 PM</div>
                </td>
                <td className="py-4 px-6 align-top text-[#4B6B82] leading-5">
                  Emphasize thorough requirements gathering and project scope.
                </td>
                <td className="py-4 px-6 align-top">
                  <span className="inline-block bg-[#DEFFEE] text-[#66CB9F] text-xs font-semibold px-3 py-1 rounded-full select-none">
                    Approved
                  </span>
                </td>
                
                <td className="py-4 px-6 align-top text-center cursor-pointer w-20">
                  <div className="w-3 h-4 mx-auto"></div>
                  <img
                    src={dotsIcon}
                    alt="Options"
                    // className="w-4 h-6 mx-auto"
                  />
                </td>

              </tr>
              <tr className="border-t border-[#E6EDF3]">
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">John Doe</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">Consultant</div>
                </td>
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">John Doe</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">
                    Master Coordinator
                  </div>
                </td>
                <td className="py-4 px-6 align-top">
                  <div className="text-[#414042]">11/05/2025</div>
                  <div className="text-[#8D8C8E] mt-1 text-xs">01:10 PM</div>
                </td>
                <td className="py-4 px-6 align-top text-[#4B6B82] leading-5">
                  Remember to capture all project requirements clearly.
                </td>
                <td className="py-4 px-6 align-top">
                  <span className="inline-block bg-[#FFEDE3] text-[#F7936F] text-xs font-semibold px-3 py-1 rounded-full select-none">
                    In Progress
                  </span>
                </td>

                <td className="py-4 px-6 align-top text-center cursor-pointer w-20">
                  <div className="w-3 h-4 mx-auto"></div>
                  <img
                    src={dotsIcon}
                    alt="Options"
                    // className="w-4 h-6 mx-auto"
                  />
                </td>

              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4">
          {[
            {
              performedBy: "John Doe",
              performedRole: "Contractor",
              assignedTo: "John Doe",
              assignedRole: "ROW",
              date: "11/03/2025",
              time: "11:23 AM",
              comments: "-",
              status: "Submitted",
              statusColor: "bg-[#E4ECF7] text-[#7480C9]",
            },
            {
              performedBy: "John Doe",
              performedRole: "Row",
              assignedTo: "John Doe",
              assignedRole: "Master Coordinator",
              date: "11/04/2025",
              time: "12:45 PM",
              comments:
                "Emphasize thorough requirements gathering and project scope.",
              status: "Approved",
              statusColor: "bg-[#DEFFEE] text-[#66CB9F]",
            },
            {
              performedBy: "John Doe",
              performedRole: "Consultant",
              assignedTo: "John Doe",
              assignedRole: "Master Coordinator",
              date: "11/05/2025",
              time: "01:10 PM",
              comments: "Remember to capture all project requirements clearly.",
              status: "In Progress",
              statusColor: "bg-[#FFEDE3] text-[#F7936F]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-[#E6EDF3] p-4 space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-[#414042]">
                    {item.performedBy}
                  </div>
                  <div className="text-xs text-[#8D8C8E]">
                    {item.performedRole}
                  </div>
                </div>
                <img src={dotsIcon} className="w-4 h-6 cursor-pointer" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-[#8D8C8E] text-xs mb-1">Assigned To</div>
                  <div className="text-[#414042]">{item.assignedTo}</div>
                  <div className="text-[#8D8C8E] text-xs">
                    {item.assignedRole}
                  </div>
                </div>
                <div>
                  <div className="text-[#8D8C8E] text-xs mb-1">Date & Time</div>
                  <div className="text-[#414042]">{item.date}</div>
                  <div className="text-[#8D8C8E] text-xs">{item.time}</div>
                </div>
              </div>

              {item.comments !== "-" && (
                <div>
                  <div className="text-[#8D8C8E] text-xs mb-1">Comments</div>
                  <div className="text-[#4B6B82] text-sm leading-5">
                    {item.comments}
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span
                  className={`inline-block ${item.statusColor} text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-6 rounded-2xl border border-[#E6EDF3] flex items-center justify-center gap-2 py-3 text-primary select-none"
          aria-label="Pagination"
        >
          <button aria-label="Previous page" className="text-lg">
            <img src={leftArrowIcons} />
          </button>
          <div className="text-sm font-medium">1 of 1</div>
          <button aria-label="Next page" className="text-lg">
            <img src={rightArrowIcons} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
