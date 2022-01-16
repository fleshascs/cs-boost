import Sidebar from '../components/Sidebar';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';
import DownloadButtons from '../components/DownloadButtons';
import Head from 'next/head';

export const schema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': ['VideoGame', 'SoftwareApplication'],
  name: 'Counter-Strike 1.6',
  image: require('../images/header.jpg?webp'),
  author: {
    '@type': 'Organization',
    name: 'Valve',
    url: 'https://www.valvesoftware.com'
  },
  publisher: 'Valve',
  genre: ['Action (Shooter)', '3D', '1st Person'],
  operatingSystem: 'Windows',
  applicationCategory: 'GameApplication',
  softwareVersion: '1.6',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    ratingCount: '2956'
  },
  offers: {
    '@type': 'Offer',
    price: '0'
  }
});

export default function CSDownload() {
  const { total } = useFetchServers();

  return (
    <>
      <Head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: schema }} />
      </Head>
      <Top
        title={<span className='text-amber-300'>Counter-Strike 1.6 Download</span>}
        servers={total.servers}
        players={total.players}
        maxPlayers={total.maxPlayers}
        percentage={total.percentage}
      />

      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24'>
        <div className='basis-2/3'>
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>CS 1.6 FREE download</h2>
          <p>
            Your search for an all-in-one, online team shooter game, ends here!{' '}
            <span className='text-amber-300'>Counter-Strike</span> was first developed in 1999, and
            ever since then, it has evolved through high tech innovations and modifications to
            become the world’s best online game. It gets even better because it is %100 FREE! No
            hidden fees or charges, click on the download button and get ready to enjoy the most
            entertaining first-shooter game ever.
          </p>
          <p>
            Ever since its first release by Valve L.L.C from designers Ming Le and Jesse Cliffe over
            two decades ago, and sill yet, Counter-Strike is still played all over the world till
            today.
          </p>
          <p>
            Jesse Cliffe and Ming Le forged an unbreakable partnership at a time when game creators
            paid little or no attention to realistic games. Science fiction games ruled the day.
            Ming Le and Jesse Cliffe were part of the team who developed Action Quake II, but it was
            Ming Le who proposed the idea to create a multiplayer free game that combines weapons
            and anti-terrorism.
          </p>
          <p>
            Upon creation, several remakes have been made, but{' '}
            <span className='text-amber-300'>Counter-Strike 1.6</span> is the final major software
            update of the game.
          </p>
          <div>
            <DownloadButtons className='px-3 my-10' />
          </div>
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            HOW TO PLAY COUNTERSTRIKE
          </h2>
          <p>
            Counter-Strike is one of the most-played games of all times. As a result of its
            competitive nature, Counter-Strike takes you on an exciting journey that requires hours
            of gameplay to perfection.
          </p>
          <iframe
            title='cs 1.6 game'
            height='345'
            className='w-full my-10'
            loading='lazy'
            src='https://www.youtube.com/embed/lIOAIttydFI'
          />
          <h3 className='text-gray-300 py-2 text-sm font-medium uppercase'>START OF THE GAME</h3>
          <p>
            At the beginning of the game, you’ll be provided with an option that says “new game”.
            Click on this button to create your own server. Make sure to stick to that particular
            server because joining a random server puts your computer at risk of downloading a virus
            or malicious software.
          </p>
          <p>
            You’ll be provided with $800 and a few weapons at the start of the game. The money
            provided can be used to purchase more weapons that are necessary to help you eliminate
            your enemies and win more points! As you continue to achieve victory on every map or
            mission, you earn more money to buy more equipment.
          </p>
          <p>
            One exciting feature of the game is locating or diffusing a bomb. Terrorist will try to
            bomb an area and will then hide the bomb in a conspicuous location too tricky for you to
            find out. Your task will be to prevent them from hiding the bomb or If it has already
            been hidden; fin it and diffuse it. Once you succeed, you’ll earn more points and move
            to another map.
          </p>
          THE KNIFE!
          <p>
            The knife is one of the most important weapons to equip you in CS. Two stabs to the
            enemy, and they’re eliminated. But, the trick is; it requires mastery. Hours of play
            will teach you how to handle the knife in CS properly and guess what, it is entirely
            free!
          </p>
          <h3 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            HOW TO AVOID GETTING HIT
          </h3>
          <p>
            Unlike other games, when you die in Counter-Strike, you’re out for that round. This is
            the main reason why players try to stay alive as much as possible, and that’s highly
            achievable if you decide to implore these strategies:
          </p>
          <ul className='list-decimal ml-5 my-5'>
            <li>
              avoid open gunfights, and whenever you find yourself in such a situation don’t stay
              there for too long.
            </li>
            <li>
              Whenever you approach an enemy from the front, do not be static. Move around; crouch
              as often as you can.
            </li>
            <li>
              Use cover during fights to shield you from snipers especially when you’re out in the
              open.
            </li>
          </ul>
          <h3 className='text-gray-300 py-2 text-sm font-medium uppercase'>Maps</h3>
          <p>
            There are lots of exciting scenes in Counter-Strike 1.6 but here are some of the maps
            you should look forward to Aztec- Aztec is one of the largest maps. Cbble – In light of
            recent government proposals, Lord William has to be protected by every means possible
            even though it means your life. Your main objective is to shield him from every
            terrorist attack and refute their plans as fast as you can. Dust – This is an exciting
            map with a Middle East layout. The design and features in this map are as real as the
            real deal! Inferno – set around Noon, this map has undergone several modifications to
            create a better user experience.
          </p>
          <h3 className='text-gray-300 py-2 text-sm font-medium uppercase'>Tournaments</h3>
          <p>
            Aside from the seamless user experience, this right here is the main reason why Counter
            Strike 1.6 continues to and will always be the best online first-shooter game. In 2018,
            Valve sponsored about four different $50,000 Counter-Strike tournaments in London. This
            year, another round of championships has been announced with prize totaling
            approximately $200,000.
          </p>
          <h3 className='text-gray-300 py-2 text-sm font-medium uppercase'>Call to action</h3>
          <p>
            What are you waiting for, click on the download button and begin your journey to a whole
            new gaming experience and if you play hard, some cool cash too!
          </p>
          <p>
            Footnote: For the uninitiated, Counter-Strike is better enjoyed with friends. You can
            start by playing against bots, but it can get boring sometimes so invite your friends to
            download, create teams and compete. Let the best team win, good luck and may the odds
            forever be in your favor.
          </p>
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

CSDownload.layoutProps = {
  meta: {
    title: 'CS 1.6 Download - Download Counter-Strike 1.6 FREE',
    description:
      "CS 1.6 Non Steam, the download is free, it's a full and original version of the game including the latest updates allowing you to browse server browser and play online"
  }
};
