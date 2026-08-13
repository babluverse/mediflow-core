import Card from '../components/Card';
import Skeleton from '../components/Skeleton';

function Dashboard() {
  return (
    <div className="p-6 space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-white/50 text-sm">Welcome back to MediFlow</p>
      </div>

      <Card>
        <h2 className="text-white font-semibold mb-3">Your Active Token</h2>
        <Skeleton height="h-6" className="mb-2" />
        <Skeleton height="h-4" width="w-1/2" />
      </Card>

      <Card>
        <h2 className="text-white font-semibold mb-3">Upcoming Appointments</h2>
        <div className="space-y-3">
          <Skeleton height="h-14" />
          <Skeleton height="h-14" />
        </div>
      </Card>

      <Card>
        <h2 className="text-white font-semibold mb-3">Quick Stats</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-navy rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-teal-light">0</p>
            <p className="text-white/50 text-xs">Tokens Booked</p>
          </div>
          <div className="bg-navy rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-teal-light">0</p>
            <p className="text-white/50 text-xs">Visits Completed</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;