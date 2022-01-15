import { useFetchServers } from '../components/utils';
import Top from '../components/Top';

export default function Contact() {
  const { total } = useFetchServers();
  return (
    <>
      <Top
        servers={total.servers}
        players={total.players}
        maxPlayers={total.maxPlayers}
        percentage={total.percentage}
      />

      <div className='pb-24'>
        <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>Have any questions?</h2>
        Email: cs.fleshas.lt@gmail.com
      </div>
    </>
  );
}
