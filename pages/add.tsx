import Sidebar from '../components/Sidebar';
import Image from '../components/Image';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';

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
        <div className='basis-2/3'>
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>
            Rules for adding a server
          </h2>
          <ul className='list-disc'>
            <li>Upload any DLL/EXE and similar malicious files</li>
            <li>Use auto-connect plugins</li>
            <li>Modify GameMenu, VGUI or practice any other forms of slowhacking</li>
            <li>
              Bind any default keys (W, A, S, D, SPACE, SHIFT, TAB), or to bind any forbidden cmds
              including CONNECT and SAY
            </li>
            <li>Boost fake servers</li>
            <li>Use any form of redirect</li>
            <li>Send any CMDs via SVC_DIRECTOR</li>
            <li>Change client rates (cl_updaterate, cl_cmdrate etc)</li>
            <li>Use plugins that destroy player's game, like Pika, GameDestroyer, etc</li>
          </ul>
          <h2 className='text-gray-300 py-2 text-sm font-medium uppercase mt-10'>
            What you will need to do
          </h2>
          <span className='text-amber-300'>Add a link</span> of one of our CS download sites in{' '}
          <span className='text-amber-300'>to your website</span>. It can be added to your sidebar
          or a footer, choice is yours. Your website has to meet these{' '}
          <span className='text-amber-300'>criterias</span>:
          <br />
          <br />
          <ul className='list-disc'>
            <li>Has some traffic</li>
            <li>Domain is at least one years old</li>
          </ul>
          <br />
          <br />
          Contact us by <b>Email:</b>{' '}
          <span className='text-amber-300'>cs.fleshas.lt@gmail.com</span> <br />
          <br />
          <Image
            width='304'
            height='135'
            src={require('../images/backlink.png?resize&size=304')}
            webp={require('../images/backlink.png?resize&size=304&format=webp')}
            alt='CS 1.6 server example of backlink'
          />
          <br />
          <br />
          <textarea
            className='bg-gray-900 text-grey-200 border border-gray-600 w-full h-44'
            defaultValue='&lt;a href="https://counterstrike16download.net/" target="_blank" rel="noopener"&gt;CS
            1.6 download&lt;/a&gt;'
          />
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
