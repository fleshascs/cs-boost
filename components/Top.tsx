import Image from '../components/Image';
import { FC, ReactNode } from 'react';
import { Totals } from './types';

interface TopProps extends Totals {
  title?: string | ReactNode;
}

const Top: FC<TopProps> = ({ servers, players, maxPlayers, percentage, title }) => {
  return (
    <div className='py-5 sm:py-16 flex flex-col lg:flex-row text-md'>
      <div>
        <h1 className='font-bold text-7xl mb-2 leading-[4rem] uppercase'>
          {title ? (
            title
          ) : (
            <>
              <span style={{ color: '#a91c1c' }}>Counter-Strike 1.6</span> Boost
            </>
          )}
        </h1>
        Active servers -{' '}
        <span className='font-semibold text-red-700 inline-block min-w-[1rem] text-center'>
          {servers}
        </span>{' '}
        <br />
        Filled with{' '}
        <span className='font-semibold text-red-700 inline-block min-w-[2rem] text-center'>
          {players}
        </span>{' '}
        players out of
        <span className='font-semibold text-red-700 ml-1 inline-block min-w-[2rem] text-center'>
          {' '}
          {maxPlayers}
        </span>{' '}
        total slots. Percentage player count -{' '}
        <span className='font-semibold text-red-700 inline-block min-w-[1rem] text-center'>
          {percentage}%
        </span>
      </div>
      <Image
        className='ml-auto pt-5 sm:pt-0'
        width='460'
        height='60'
        src={require('../images/cb.jpg?resize&size=460')}
        webp={require('../images/cb.jpg?resize&size=460&format=webp')}
        alt='CS 1.6 Download'
        title='Counter-Strike 1.6'
      />
      {/* <source media="(max-width: 800px)" srcSet="elva-800w.jpg"/> */}
      {/* <Image
        className='ml-auto pt-5 sm:pt-0'
        width='460'
        height='60'
        sources={[
          {
            type: 'default',
            media: '(max-width: 800px)',
            src: require('../images/cb.jpg?resize&size=460')
          },
          {
            type: 'webp',
            media: '(max-width: 800px)',
            src: require('../images/cb.jpg?resize&size=688&format=webp')
          },
          {
            type: 'webp',
            src: require('../images/cb.jpg?resize&size=460&format=webp')
          },
          {
            type: 'default',
            src: require('../images/cb.jpg?resize&size=460')
          }
        ]}
        alt='CS 1.6 Download'
        title='Counter-Strike 1.6'
      /> */}
    </div>
  );
};
export default Top;
