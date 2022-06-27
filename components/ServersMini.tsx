import { ExternalLinkIcon } from '@heroicons/react/outline';
import { Table, Td, Th } from './table';
import { Server } from './types';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

export const ServersListPlaceholderMini: FC = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <tr key={i}>
          <Td className='sm:w-[2%]'>{i + 1}</Td>
          <Td className='sm:w-[47%]'>
            <div className='w-[230px]' />
          </Td>
          <Td className='sm:w-[8%]'>
            <div className='w-[50px]'>0/32</div>
          </Td>
        </tr>
      ))}
    </>
  );
};

export const ServersListMini: FC<{ servers: Server[] }> = ({ servers }) => {
  return (
    <>
      {servers.map((item) => (
        <tr key={item.address}>
          <Td className='sm:w-[2%]'>{item.num}</Td>
          <Td className='sm:w-[47%] sm:flex-1 sm:max-w-0 sm:overflow-hidden sm:text-ellipsis sm:whitespace-nowrap text-red-700 font-semibold'>
            <Link href={`/server-info?id=${item.id}`}>
              <a className='group' title='View server details'>
                {item.hostname}
                <ExternalLinkIcon className='h-3 w-3 ml-2 invisible group-hover:visible inline' />
              </a>
            </Link>
          </Td>
          <Td className='sm:w-[8%]'>
            {item.players}/{item.maxplayers}
          </Td>
        </tr>
      ))}
    </>
  );
};

export const ServersMini: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className='overflow-x-auto'>
      <Table>
        <thead>
          <tr>
            <Th>Nr.</Th>
            <Th>Name</Th>
            <Th>Players</Th>
          </tr>
        </thead>
        <tbody className='rounded-t-lg py-2.5 border-b border-gray-700'>{children}</tbody>
      </Table>
    </div>
  );
};

export default ServersMini;
