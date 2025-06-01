import logoSrc from "../../src/assets/images/logo.png";
import homeSvg from "../../src/assets/svgs/home.svg";
import dashboardSvg from "../../src/assets/svgs/dashboard.svg";
import companiedSvg from "../../src/assets/svgs/companies.svg";
import designSvg from "../../src/assets/svgs/design.svg";
import engineerSvg from "../../src/assets/svgs/engineers.svg";
import notificationSvg from "../../src/assets/svgs/notification.svg";
import projectSvg from "../../src/assets/svgs/projects.svg";
import settingSvg from "../../src/assets/svgs/setting.svg";
import patternNav from "../../src/assets/images/pattern-nav.png";
import SidebarIcon from "../components/svg/Sidebar";
import NavItem from "../components/NavItem";

interface SidebarProps {
  handleToggle: () => void;
  toggleSideBar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ handleToggle, toggleSideBar }) => {
  return (
    <>
      {toggleSideBar && (
        <aside className="flex flex-col justify-between bg-primary text-white w-64 min-h-screen rounded-tr-2xl rounded-br-2xl transition-all duration-300">
          <div>
            <div className="flex items-center justify-between m-4">
              <img
                src={logoSrc}
                alt="Logo icon with circular design"
                className="w-[160px] h-auto"
              />
              <button
                onClick={handleToggle}
                className="text-white text-lg focus:outline-none cursor-pointer"
              >
                <SidebarIcon />
              </button>
            </div>

            <hr className="border-primaryLight w-[80%] mx-6 mb-8" />

            <nav className="space-y-6 text-sm font-medium m-4">
              <NavItem src={homeSvg} name="Home" count={6} />
              <NavItem src={dashboardSvg} name="Dashboard" isActive={true} />
              <NavItem src={companiedSvg} name="Companies" />
              <NavItem src={engineerSvg} name="Engineers" />
              <NavItem src={projectSvg} name="Projects" count={3} />
              <NavItem src={designSvg} name="Design documents" count={3} />
              <hr className="border-primaryLight w-[80%] mx-6 my-8" />
              <NavItem src={settingSvg} name="Settings" />
              <NavItem
                src={notificationSvg}
                name="Notifications"
                count={3}
                isSetting={true}
              />
            </nav>
          </div>

          <div className="mt-12 flex justify-center">
            <img
              alt="White abstract logo shape with curved lines on teal background"
              src={patternNav}
              height="73px"
              width="146px"
            />
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
