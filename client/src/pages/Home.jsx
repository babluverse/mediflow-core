import Button from '../components/Button';
import Card from '../components/Card';
import Skeleton from '../components/Skeleton';

function Home() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-white">MediFlow</h1>

      <Card>
        <p className="text-white mb-3">Sample Card</p>
        <Button variant="primary">Book Token</Button>
      </Card>

      <Card>
        <Skeleton height="h-6" className="mb-2" />
        <Skeleton height="h-4" width="w-2/3" />
      </Card>
    </div>
  );
}

export default Home;