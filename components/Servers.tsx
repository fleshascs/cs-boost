import { ExternalLinkIcon } from '@heroicons/react/outline';
import { Table, Td, Th } from './table';
import Image from './Image';
import { Server } from './types';
import Link from 'next/link';

export default function Servers({ servers }: { servers: Server[] }) {
  return (
    <div className='overflow-x-auto'>
      <Table>
        <thead>
          <tr>
            <Th>Nr.</Th>
            <Th>Name</Th>
            <Th>IP address</Th>
            <Th>Map</Th>
            <Th>Players</Th>
          </tr>
        </thead>

        <tbody className='rounded-t-lg py-2.5 border-b border-gray-700'>
          {/* <tr className='border-b-2 border-dashed border-gray-300'>
          <Td>Total</Td>
          <Td>today</Td>
          <Td>yesterday</Td>
          <Td>firstMonth</Td>
          <Td>secondMonth</Td>
        </tr> */}
          {servers.map((item) => (
            <tr key={item.address}>
              <Td>{item.num}</Td>
              <Td className='text-amber-300'>
                <Link href={`/server-info?id=${item.id}`}>
                  <a className='group' title='View server details'>
                    {item.hostname}
                    <ExternalLinkIcon className='h-3 w-3 ml-2 invisible group-hover:visible inline' />
                  </a>
                </Link>
              </Td>
              <Td>
                <a
                  href={`steam://connect/${item.address}`}
                  title='Connect to the counter-strike server'
                  className='hover:underline whitespace-nowrap'
                >
                  <Image
                    className='inline mr-1'
                    width='16'
                    height='16'
                    alt='Connect to the counter-strike server'
                    src={require('../images/steam4.png?resize&size=16')}
                    webp={require('../images/steam4.png?resize&size=16&format=webp')}
                  />
                  {item.address}
                </a>
              </Td>
              <Td>{item.map}</Td>
              <Td>
                {item.players}/{item.maxplayers}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
  //   return (
  //     <table className='text-left w-full'>
  //       <thead className='bg-black flex text-white w-full'>
  //         <tr className='flex w-full mb-4'>
  //           <th className='p-4 w-1/4'>One</th>
  //           <th className='p-4 w-1/4'>Two</th>
  //           <th className='p-4 w-1/4'>Three</th>
  //           <th className='p-4 w-1/4'>Four</th>
  //         </tr>
  //       </thead>

  //       <tbody
  //         // className='bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full'
  //         className='bg-grey-light flex flex-col items-center justify-between'
  //         // style='height: 50vh;'
  //       >
  //         <tr className='flex w-full mb-4'>
  //           <td className='p-4 w-1/4'>Dogs</td>
  //           <td className='p-4 w-1/4'>Cats</td>
  //           <td className='p-4 w-1/4'>Birds</td>
  //           <td className='p-4 w-1/4'>Fish</td>
  //         </tr>
  //         <tr className='flex w-full mb-4'>
  //           <td className='p-4 w-1/4'>Dogs</td>
  //           <td className='p-4 w-1/4'>Cats</td>
  //           <td className='p-4 w-1/4'>Birds</td>
  //           <td className='p-4 w-1/4'>Fish</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   );
}
