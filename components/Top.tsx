import Image from '../components/Image';
import { FC, ReactNode } from 'react';
import { Totals } from './types';

interface TopProps extends Totals {
  title?: string | ReactNode;
}

const Top: FC<TopProps> = ({ servers, players, maxPlayers, percentage, title }) => {
  return (
    <div className='py-5 sm:py-16 flex flex-col lg:flex-row text-sm text-gray-500'>
      <div>
        <h1 className='text-2xl font-medium mb-2 uppercase'>
          {title ? (
            title
          ) : (
            <>
              <span className='text-amber-300'>Counter-Strike 1.6</span> servers
            </>
          )}
        </h1>
        Active servers - <span className='text-amber-300'>{servers}</span> <br />
        Filled with <span className='text-amber-300'>{players}</span> players out of
        <span className='text-amber-300'> {maxPlayers}</span> total slots. Percentage player count -{' '}
        <span className='text-amber-300'>{percentage}%</span>
      </div>
      <Image
        className='ml-auto pt-5 sm:pt-0'
        width='460'
        height='60'
        src={require('../images/cb.jpg?resize&size=460')}
        webp={require('../images/cb.jpg?webp&resize&size=460')}
        alt='CS 1.6 Download'
        title='Counter-Strike 1.6'
      />
    </div>
  );
};
export default Top;
