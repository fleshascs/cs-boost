import * as yup from 'yup';
import { Server } from './types';
import { withServerInfoDefaults } from '../utils';

export function isAddressValid(address: string | undefined) {
  if (!address) return false;
  const [ip, port] = address.split(':');
  if (!/^\d+$/.test(port)) return false;
  if (!ip) return false;
  return true;
}

export function createValidationSchema(setServerDetails: (server: Server) => void) {
  const validationSchema = yup.object({
    serverIP: yup
      .string()
      .test('is-valid-ip-port', 'invalid Server IP:PORT', function (value) {
        return isAddressValid(value);
      })
      // .test('is-server-online', 'Server is offline', function (value) {
      //   if (!isAddressValid(value)) return false;
      //   return fetch(process.env.domain + '/api/server_info_by_ip.php?ip=' + value)
      //     .then((res) => res.json())
      //     .then((data) => {
      //       const { server } = withServerInfoDefaults(data);
      //       setServerDetails(server);
      //       return !!server.status;
      //     });
      // })
      .required('ServerIP:Port is required'),
    serviceLength: yup.number().required('Service length is required'),
    paymentMethod: yup.string().required('Payment provider is required'),
    termsAndConditions: yup
      .boolean()
      .required('The terms and conditions must be accepted.')
      .oneOf([true], 'The terms and conditions must be accepted.')
  });
  return validationSchema;
}

export function validateServer(address: string) {
  if (!isAddressValid(address)) return false;
  return fetch(process.env.domain + '/api/server_info_by_ip.php?ip=' + address)
    .then((res) => res.json())
    .then((data) => {
      const { server } = withServerInfoDefaults(data);

      console.log('validate ' + address);

      if (!server.status) return 'Server is offline @';
    });
}

export function fetchServerDetails(address: string) {
  return fetch(process.env.domain + '/api/server_info_by_ip.php?ip=' + address)
    .then((res) => res.json())
    .then((data) => {
      const { server } = withServerInfoDefaults(data);
      return server;
    });
}
