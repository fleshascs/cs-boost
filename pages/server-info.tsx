import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';
import GeneralLoading from '../components/GeneralLoading';
import { useFetchServerInfo, useFetchServers } from '../components/utils';
import Top from '../components/Top';
import Players from '../components/Players';

export default function Info() {
  const { total } = useFetchServers();
  const router = useRouter();
  const { id } = router.query;
  const {
    isLoading: infoIsLoading,
    error: infoError,
    players,
    server
  } = useFetchServerInfo(id as string, router.isReady);

  return (
    <>
      <Top
        servers={total.servers}
        players={total.players}
        maxPlayers={total.maxPlayers}
        percentage={total.percentage}
      />

      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24'>
        <div className='basis-2/3'>
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>Server details</h2>
          {infoIsLoading ? null : (
            <>
              <div className='flex flex-col lg:flex-row mb-10'>
                <img
                  onError={function (e) {
                    e.currentTarget.src = '/maps/nopicture.jpg';
                  }}
                  className='mr-5'
                  width='304'
                  height='135'
                  src={'/maps/' + server['map'] + '.jpg'}
                  alt={'cs map' + server['map']}
                />
                <ul className='list-none'>
                  <li>
                    Server name: <span className='text-amber-300'>{server.hostname}</span>
                  </li>
                  <li>
                    IP Address: <span className='text-amber-300'>{server.address}</span>
                  </li>
                  <li>
                    Map: <span className='text-amber-300'>{server.map}</span>
                  </li>
                </ul>
              </div>
              <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>Players</h2>
              <GeneralLoading error={infoError} isLoading={infoIsLoading}>
                <Players players={players} />
              </GeneralLoading>
            </>
          )}
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
