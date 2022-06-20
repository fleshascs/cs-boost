import Image from '../components/Image';
import { FC, ReactNode } from 'react';
import { Totals } from './types';

interface TopProps extends Totals {
  title?: string | ReactNode;
}

const Top: FC<TopProps> = ({ servers, players, maxPlayers, percentage, title }) => {
  return (
    <div className='py-5 sm:py-16 flex flex-col lg:flex-row text-sm text-gray-400'>
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
        Active servers -{' '}
        <span className='text-amber-300 inline-block min-w-[1rem] text-center'>{servers}</span>{' '}
        <br />
        Filled with{' '}
        <span className='text-amber-300 inline-block min-w-[2rem] text-center'>{players}</span>{' '}
        players out of
        <span className='text-amber-300 ml-1 inline-block min-w-[2rem] text-center'>
          {' '}
          {maxPlayers}
        </span>{' '}
        total slots. Percentage player count -{' '}
        <span className='text-amber-300 inline-block min-w-[1rem] text-center'>{percentage}%</span>
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
