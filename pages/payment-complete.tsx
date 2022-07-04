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
        <h2 className='py-2 text-md font-medium'>Success</h2>
        The payment has been completed,{' '}
        <a href='/' className='font-semibold text-red-700'>
          Go back to the main page
        </a>
      </div>
    </>
  );
}
