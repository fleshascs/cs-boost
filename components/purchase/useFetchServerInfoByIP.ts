import { QueryFunctionContext, useQuery, QueryKey } from 'react-query';
import { queryClient } from '../reactQueryClient';
import { withServerInfoDefaults } from '../utils';
import { ServerValidationResponse } from './types';
import { isAddressValid } from './validationSchema';

export const queryFn =
  (address: string) =>
  <T = unknown, TQueryKey extends QueryKey = QueryKey>({
    signal
  }: QueryFunctionContext<TQueryKey>): T | Promise<T> => {
    if (!isAddressValid(address)) return;
    return fetch(process.env.domain + '/api/server_info_by_ip.php?ip=' + address, {
      signal
    }).then((res) => res.json());
  };

export function useFetchServerInfoByIP(address: string) {
  const { isLoading, error, data } = useQuery<ServerValidationResponse, Error>(
    'server-info-by-address' + address,
    (...args) => queryFn(address)(...args)
  );
  const { server } = withServerInfoDefaults(data);
  return { isLoading, error, server };
}

export async function fetchServerInfoByIP(address: string) {
  try {
    const { server } = await queryClient.fetchQuery<ServerValidationResponse, Error>(
      'server-info-by-address' + address,
      queryFn(address)
    );
    return server?.status === 1;
  } catch (error) {
    console.log('error', error);
  }
}
