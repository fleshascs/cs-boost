import * as yup from 'yup';
import { fetchServerInfoByIP } from './useFetchServerInfoByIP';

export function isAddressValid(address: string | undefined) {
  if (!address) return false;
  const [ip, port] = address.split(':');
  if (!/^\d+$/.test(port)) return false;
  if (!ip) return false;
  return true;
}

export const validationSchema = yup.object({
  serverIP: yup
    .string()
    .test('is-valid-ip-port', 'invalid Server IP:PORT', function (value, { createError }) {
      if (/(\s)/.test(value)) {
        // eslint-disable-next-line quotes
        return createError({ message: "IP:PORT can't contain spaces" });
      }
      return isAddressValid(value);
    })
    .test('is-server-online', 'Server is offline', function (value) {
      return fetchServerInfoByIP(value);
    })
    .required('ServerIP:Port is required'),
  serviceLength: yup.number().required('Service length is required'),
  paymentMethod: yup.string().required('Payment provider is required'),
  termsAndConditions: yup
    .boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted.')
});
