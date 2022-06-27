import Sidebar from '../components/Sidebar';
import Image from '../components/Image';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';
import { EditableServerValues } from '../components/purchase/types';
import { PurchaseForm } from '../components/purchase/PurchaseForm';

export default function Home() {
  const { total } = useFetchServers();

  const onSubmit = (values: EditableServerValues) => {
    console.log('values', values);

    // addUpdateServer({ ...values, serverId: pid as string })
    //   .then(() => {
    //     snackbar.showSuccess('Saved!');
    //     refetch();
    //   })
    //   .catch(() => {
    //     snackbar.showError('Failed to save');
    //   });
  };

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
          <PurchaseForm onSubmit={onSubmit} />
        </div>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
