import { FC, ReactNode } from 'react';
import DownloadButtons from './DownloadButtons';
import Card from './Card';

export interface SidebarProps {
  children?: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <>
      <h2 className='text-amber-300 py-2 text-sm font-medium uppercase'>
        Download COUNTER-STRIKE 1.6
      </h2>

      <DownloadButtons className='w-full' />
      <h2 className='text-amber-300 py-2 text-sm font-medium uppercase mt-5'>links</h2>
      <Card>
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
        <div className='p-2'>
          <a target='_blank' rel='noopener' href='https://www.hey.lt/details.php?id=csboost'>
            <img
              width='83'
              height='31'
              src='https://www.hey.lt/count.php?id=csboost'
              alt='Hey.lt - Nemokamas lankytojų skaitliukas'
            />
          </a>
        </div>
        {children}
      </Card>
    </>
  );
};
export default Sidebar;
