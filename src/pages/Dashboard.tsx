import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";
import ProcessCard from "../components/ProcessCard";
import HistoryCard from "../components/HistoryCard";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen min-w-screen bg-dashboardBG">
      <Sidebar />

      <div className="flex flex-col flex-1 gap-2 w-full px-2">
        <Navbar />
        <main className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 w-[100%]">
            <RequestCard />
            <HistoryCard />
          </div>
          <ProcessCard />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
