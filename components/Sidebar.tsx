import { FC, ReactNode } from 'react';
import AdSense from 'react-adsense';
import DownloadButtons from './DownloadButtons';
import Card from './Card';
import { ListGroup, ListGroupItem } from './ListGroup';
import Image from './Image';
export interface SidebarProps {
  children?: ReactNode;
}

const externalLinks = [
  {
    href: 'http://counter-strike-download.lt',
    title: 'Counter-Strike 1.6 Download'
  },
  {
    href: 'https://counterstrike16download.net',
    title: 'CS 1.6 download'
  },
  {
    href: 'https://fleshas.lt/csdownload',
    title: 'Fleshas.lt - CS 1.6 download'
  }
];

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <>
      <h2 className='font-semibold py-2 text-md font-medium '>Links</h2>

      <ListGroup>
        {externalLinks.map((link) => (
          <ListGroupItem key={link.href}>
            <Image
              width='25'
              height='25'
              src={require('../images/cs-boost-b.png?resize&size=25')}
              webp={require('../images/cs-boost-b.png?resize&size=25&format=webp')}
              alt='CS 1.6 Download'
              title='Counter-Strike 1.6'
            />
            <a target='_blank' rel='noopener' href={link.href}>
              {link.title}
            </a>
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* <Card innerPadding={false}>
        <div className='p-2'>
          <a
            target='_blank'
            rel='noopener'
            href='http://counter-strike-download.lt'
            title='Counter-Strike 1.6 Download'
          >
            Counter-Strike 1.6 Download
          </a>
        </div>
        <div className='p-2'>
          <a href='https://counterstrike16download.net' target='_blank' rel='noopener'>
            CS 1.6 download
          </a>
        </div>
        <div className='p-2'>
          <a href='https://fleshas.lt/csdownload' target='_blank' rel='noopener'>
            CS 1.6 download original
          </a>
        </div>
      </Card> */}

      <h2 className='font-semibold py-2 text-md font-medium'>Download Counter-Strike 1.6</h2>

      <DownloadButtons className='w-full mb-4' />

      <div className='pt-2' />
      <AdSense.Google
        client='ca-pub-3219722052726085'
        slot='4021017786'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      />
      {children}
    </>
  );
};
export default Sidebar;
