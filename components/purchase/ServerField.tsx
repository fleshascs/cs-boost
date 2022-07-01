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
  const { isLoading, server } = useFetchServerInfoByIP(addressToValidate);

  useDebounce(() => setAddressToValidate(props.value), 500, [props.value]);
  const mapImage = useMap(server?.mapname);

  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-4'>
      <TextField {...props} />
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

function useMap(map: string) {
  const [mapImage, setMapImage] = useState<string>('');

  useEffect(() => {
    if (!map) return;
    fetch(mapPath(map)).then((r) => {
      setMapImage(r.ok ? map : '');
    });
  }, [map]);

  return mapImage;
}
