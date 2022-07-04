import { useFetchServers } from '../components/utils';
import Top from '../components/Top';
import { Spinner } from '../components/Spinner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useDummyCountdown = (seconds) => {
  const [time, setTime] = useState<number>(seconds);

  useEffect(() => {
    const task = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => {
      clearInterval(task);
    };
  }, []);

  return time;
};

export default function Contact() {
  const { total } = useFetchServers();
  const router = useRouter();

  const seconds = useDummyCountdown(60);
  useEffect(() => {
    if (seconds === 40) router.push('/');
  }, [seconds]);

  return (
    <>
      <Top
        servers={total.servers}
        players={total.players}
        maxPlayers={total.maxPlayers}
        percentage={total.percentage}
      />

      <div className='pb-24 flex flex-col items-center space-y-4'>
        <h2 className='py-2 text-md font-medium text-green-500 text-3xl'>Payment completed</h2>

        <Spinner />

        <div className='py-2 text-md font-medium'>{seconds}s.</div>

        <div className='py-2 text-md font-medium text-4xl'>Verification in progress...</div>

        <a href='/' className='font-semibold text-red-700'>
          Go back to the main page
        </a>
      </div>
    </>
  );
}
