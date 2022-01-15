import { Table, Td, Th } from './table';
import { Player } from './types';

export default function Players({ players }: { players: Player[] }) {
  if (!players.length) {
    return <div>Server is empty</div>;
  }
  return (
    <Table>
      <thead>
        <tr>
          <Th>Nr.</Th>
          <Th>Name</Th>
          <Th>Frags</Th>
        </tr>
      </thead>
      <tbody className='rounded-t-lg py-2.5 border-b border-gray-700'>
        {players.map((item) => (
          <tr key={item.Id}>
            <Td>{item.Id + 1}</Td>
            <Td className='text-amber-300'>{item.Name}</Td>
            <Td>{item.Frags}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
