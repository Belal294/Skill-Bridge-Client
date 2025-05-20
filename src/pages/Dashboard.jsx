import FreelancerDashboard from '../pages/DashboardComponents/FreelancerDashboard';
import DashboardPage from '../pages/DashboardPage'

export default function Dashboard() {
  return (
    <div>
      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={FiPackage} title="Total Products" value="245" />
        <StatCard icon={FiShoppingCart} title="Total Orders" value={128} />
        <StatCard icon={FiUsers} title="Total Users" value={573} />
        <StatCard icon={FiStar} title="Average Rating" value={4.8} />
      </div>


      <Order /> */}
      {/* <DashboardPage/> */}
      <FreelancerDashboard/>


    </div>
  );
}