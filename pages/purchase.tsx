import Sidebar from '../components/Sidebar';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';
import { PurchaseForm } from '../components/purchase/PurchaseForm';

export default function Home() {
  const { total } = useFetchServers();
  return (
    <>
      <Top
        servers={total.servers}
        players={total.players}
        maxPlayers={total.maxPlayers}
        percentage={total.percentage}
      />

      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24'>
        <div className='basis-2/3 '>
          <ul className='list-disc list-inside mb-6'>
            <li>Master-Server server list gets updated every 20 minutes.</li>
            <li>Server list order is decided by player ping.</li>
          </ul>
          <PurchaseForm />
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
