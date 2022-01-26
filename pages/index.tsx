import Servers, { ServersList, ServersListPlaceholder } from '../components/Servers';
import ServersMini, {
  ServersListMini,
  ServersListPlaceholderMini
} from '../components/ServersMini';
import Sidebar from '../components/Sidebar';
import GeneralLoading from '../components/GeneralLoading';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';

export default function Home() {
  const { isLoading, error, top50servers, boostedServers, total } = useFetchServers();
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
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>BOOSTED SERVERS</h2>
          <Servers>
            <GeneralLoading
              error={error}
              isLoading={isLoading}
              fallback={<ServersListPlaceholder />}
            >
              <ServersList servers={boostedServers} />
            </GeneralLoading>
          </Servers>
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            WORLDS TOP 50 SERVERS
          </h2>
          <Servers>
            <GeneralLoading
              error={error}
              isLoading={isLoading}
              fallback={<ServersListPlaceholder />}
            >
              <ServersList servers={top50servers} />
            </GeneralLoading>
          </Servers>
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar>
            <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
              WORLDS TOP 10 SERVERS
            </h2>
            <ServersMini>
              <GeneralLoading
                error={error}
                isLoading={isLoading}
                fallback={<ServersListPlaceholderMini />}
              >
                <ServersListMini servers={top50servers.slice(0, 10)} />
              </GeneralLoading>
            </ServersMini>
          </Sidebar>
        </div>
      </div>
    </>
  );
}
