import StatsCards from "./StatsCards";
import ProfileChart from "./ProfileChart";
import NotificationsPanel from "./NotificationsPanel";

export default function FreelancerDashboard() {
  return (
    <div className="p-6">
      <StatsCards />
      <ProfileChart />
      <NotificationsPanel />
    </div>
  );
}
