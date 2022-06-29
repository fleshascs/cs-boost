import { useQuery } from 'react-query';
import { ServerInfoResponse } from '../types';
import { withServerInfoDefaults } from '../utils';
import { isAddressValid } from './validationSchema';

export function useFetchServerInfoByIP(address: string) {
  const { isLoading, error, data } = useQuery<ServerInfoResponse, Error>(
    ['server-info', address],
    ({ signal }) => {
      if (!isAddressValid(address)) return;
      return fetch(process.env.domain + '/api/server_info_by_ip.php?ip=' + address, {
        signal
      }).then((res) => res.json());
    }
  );

  const { server } = withServerInfoDefaults(data);

  return { isLoading, error, server };
}
