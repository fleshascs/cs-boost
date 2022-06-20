// import AdSense from 'react-adsense';
import Servers, { ServersList, ServersListPlaceholder } from '../components/Servers';

import Sidebar from '../components/Sidebar';
import GeneralLoading from '../components/GeneralLoading';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';
import MasterServerVisitsChart from '../components/masterServerAnalytics/VisitsChart';

export default function Home() {
  const { isLoading, error, boostedServers, total } = useFetchServers();
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
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            Master Server unique visits
          </h2>
          <MasterServerVisitsChart />
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
          <div className='pt-2' />
          {/* <AdSense.Google
            client='ca-pub-3219722052726085'
            slot='4013757856'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
          /> */}
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            Counter-Strike 1.6 Boost Service Buy, Counter-Strike 1.6 Boost Player
          </h2>

          <p>
            Counter-Strike 1.6 boost is a service for publishing and advertising your Counter-Strike
            1.6 server. In short, CS 1.6 Boost is an advertising service for Counter-Strike servers.
            Through it, you will be able to increase the kind of traffic on the server in
            Counter-Strike 1.6.
          </p>
          <p>
            A player launches Counter-Strike and looks for a server. After clicking on "Find
            servers," the player is presented with a list of available servers. You can play
            Counter-Strike with hundreds of players every day via CS boost.
          </p>
          <p>
            Your advertised server will be viewed by all these players who will join. Therefore, you
            will have many players visiting your server each day, and the server will gain more and
            more popularity.
          </p>
          <p>
            Site users and potential players will be made aware of the CS 1.6 server by offering
            paid services. Your server can be located in a popular and prominent area on the site.
            You can thus make your server visible to the site visitors via boosting.
          </p>
          <p>
            Paid customers have access to a range of paid services, including getting their
            Counter-Strike 1.6 server displayed prominently on the website, placing it in VIP
            blocks, giving the server a special color, including decorative elements, and adding
            text messages to the server block.
          </p>

          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            What Is CS 1.6 Boost?
          </h2>
          <p>
            CS 1.6 Boost is a service that advertises and publishes Counter-Strike 1.6 servers. This
            advertising service targets Counter-Strike servers. Using it, you can ensure the server
            gets more traffic in Counter-Strike 1.6.
          </p>
          <p>
            Whenever you play Counter-Strike, you look for a server. When the player clicks on "find
            servers, a list of servers is shown. With CS boost, you can play Counter-Strike with
            hundreds of people every day. All the players you advertise will view your server.
          </p>
          <p>
            Your server will grow in popularity because many players will visit every day. The
            first-person shooting game Counter-Strike 1.6 is fun and action-packed. A
            counter-terrorist or a terrorist typically has an objective to achieve.
          </p>
          <p>
            A player's in-game currency increases each time they win a round or kill an enemy.
            Uncooperative team members and those who kill each other will be punished. In
            Counter-Strike 1.6, there are a variety of gameplay modes, each with strengths and
            weaknesses.
          </p>
          <p>
            While Deathmatch and Casual do not allow friendly fire, Competitive mode does. How much
            in-game currency a player earns is determined by their performance in the game. The
            in-game currency is then spent on purchasing upgrades for weapons.
          </p>
          <p>
            There are a lot of things to enjoy about Counter-Strike 1.6. Counter-Strike has evolved
            since it was released for the first time in 1999. Players must accomplish different
            tasks to earn points or win in the different types of gameplay available today.
          </p>

          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            About Counter-Strike 1.6
          </h2>
          <p>
            One of the most popular games worldwide is Counter-Strike 1.6 due to its many features.
            This kind of game is great for people who want to have fun when they have time to kill.
          </p>
          <p>
            This game is available in numerous editions, so most fans will find at least one they
            enjoy. As each edition is updated, new features and elements are added that make it even
            more enjoyable.
          </p>
          <p>
            In Counter-Strike, a terrorist attempts to commit a terror attack while the
            counter-terrorists prevent it. The players can also use different game modes for
            securing hostages or rescuing them from terrorists, planting bombs, and defusing them.
          </p>
          <p>
            In Counter-Strike 1.6, you engage in first-person action. Counter-Strike 1.6 includes
            Half-Life, a game created by Valve and released with CS 1.0. While initially unknown,
            Half-Life has gained an immense following and has been played worldwide.
          </p>
          <p>
            A larger budget was given to the game by Valve. In this way, the game was constantly
            updated, developed, and maintained. Different game modes allow Counter-Terrorists and
            Terrorists to accomplish different tasks, such as defusing bombs or rescuing hostages.
          </p>
          <p>
            The game allows players to acquire in-game currency, which they can use to buy more
            powerful weapons. The Counter-Strike 1.6 is available at{' '}
            <a
              href='https://csdownload.net'
              target='_blank'
              rel='noopener'
              className='text-amber-300'
            >
              https://csdownload.net
            </a>
            .
          </p>

          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>Conclusion</h2>
          <p>
            The Boost is a service meant to advertise and publish Counter-Strike 1.6 servers.
            Counter-Strike 1.6 servers are the target audience for the Boost service. It enables
            Counter-Strike 1.6 players to increase the number of players on their server.
          </p>
          <p>
            As soon as you start playing Counter-Strike, your first step is to find a server. Having
            clicked on "Find servers," the player is taken to a page showing a list of all servers.
          </p>
          <p>
            It is possible to play Counter-Strike with hundreds of people simultaneously with CS
            boost. If you advertise your server, all players will be able to see it. The number of
            players visiting your server every day will increase.
          </p>
          <p>
            Despite its action-packed nature, Counter-Strike 1.6 is a fun first-person shooter.
            Counter-terrorists and terrorists generally have objectives in mind. As players win
            rounds or kill enemies, their in-game currency increases.
          </p>
          <p>
            Killing each other or being uncooperative will earn you points. In Counter-Strike 1.6,
            the gameplay modes are varied, offering strengths and weaknesses for each.
          </p>
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
