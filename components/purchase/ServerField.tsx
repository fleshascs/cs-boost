import { useEffect, FC, useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { TextField, TextFieldProps } from '../TextField';
import useDebounce from 'react-use/lib/useDebounce';
import { useFetchServerInfoByIP } from './useFetchServerInfoByIP';
import { Spinner } from '../Spinner';

const mapPath = (map: string) => '/maps/' + map + '.jpg';

type ServerFieldProps = Omit<TextFieldProps, 'value'> & { value: string };

export const ServerField: FC<ServerFieldProps> = (props) => {
  const [addressToValidate, setAddressToValidate] = useState('');
  const { isLoading, server, error } = useFetchServerInfoByIP(addressToValidate);

  useDebounce(() => setAddressToValidate(props.value), 500, [props.value]);
  const [mapImage, setMapImage] = useState<string>('');

  useEffect(() => {
    if (server?.status !== 1) return;
    fetch(mapPath(server.mapname)).then((r) => {
      setMapImage(r.ok ? server.mapname : '');
    });
  }, [server]);

  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-4'>
      <TextField
        {...props}
        validate={(value) => {
          if (addressToValidate !== value) return;
          if (isLoading) return 'Validating a server...';
          // eslint-disable-next-line quotes
          if (error) return "Can't get server details";
          if (server?.status !== 1) return 'Server is offline';
        }}
      />
      {isLoading ? <Spinner /> : null}
      {!isLoading && server?.status === 1 ? (
        <>
          <div>
            <div className='text-sm'>{server.hostname}</div>
            <div className='text-green-500 text-sm'>
              <CheckIcon className='h-5 w-5 inline' /> Server is online
            </div>
          </div>
          {mapImage ? (
            <img
              key={mapImage}
              className='mr-5'
              width='100'
              height='75'
              src={mapPath(mapImage)}
              alt={'cs map' + mapImage}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};
