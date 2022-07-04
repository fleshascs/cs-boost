import { FC, useRef } from 'react';
import { Form, Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { ListGroup, ListGroupItem } from '../ListGroup';
import { RadioButton } from '../RadioButton';
import { Checkbox } from '../Checkbox';
import { PrimaryButton } from '../PrimaryButton';
import Card from '../Card';
import Image from '../Image';
import { ServerField } from './ServerField';

const serviceLength = [
  {
    label: '30 Days boost',
    endLabel: '€ 10 EUR.',
    value: '30'
  },
  {
    label: '60 Days boost',
    endLabel: '€ 20 EUR.',
    value: '60'
  },
  {
    label: '180 Days boost',
    endLabel: '€ 60 EUR.',
    value: '180'
  }
];

const defaultValues = {
  serverIP: '',
  serviceLength: serviceLength[0].value,
  paymentMethod: 'paypal',
  termsAndConditions: false
};

export const PurchaseForm: FC = () => {
  const formEl = useRef(null);
  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={validationSchema}
      onSubmit={() => {
        formEl.current.submit();
      }}
    >
      {({ values, touched, errors, handleChange, isSubmitting }) => (
        <Form ref={formEl} action={process.env.domain + '/api/payment/index.php'} method='POST'>
          <h2 className='py-2 text-md font-medium'>Service details</h2>
          <ListGroup>
            <ListGroupItem>
              <ServerField
                name='serverIP'
                label='Server IP:PORT'
                placeholder='IP:PORT'
                value={values.serverIP}
                onChange={handleChange}
                helperText={touched.serverIP && errors.serverIP}
              />
            </ListGroupItem>
            <ListGroupItem>
              <label className='form-label inline-block mb-1 text-gray-700 pt-2 text-md font-medium'>
                Service length
              </label>
            </ListGroupItem>

            {serviceLength.map((service) => (
              <ListGroupItem key={service.label}>
                <RadioButton
                  label={
                    <>
                      <div>{service.label}</div>
                      <div className='text-md font-bold'>{service.endLabel}</div>
                    </>
                  }
                  name='serviceLength'
                  value={service.value}
                />
              </ListGroupItem>
            ))}
          </ListGroup>

          <h2 className='py-2 text-md font-medium'>Payment method</h2>
          <Card>
            <RadioButton
              label={
                <>
                  <Image
                    width='150'
                    height='65'
                    src={require('../../images/paypal-logo.png?resize&size=304')}
                    webp={require('../../images/paypal-logo.png?resize&size=304&format=webp')}
                    alt='payment method paypal'
                  />
                  <Image
                    width='150'
                    height='35'
                    src={require('../../images/card-payments.png?resize&size=150')}
                    webp={require('../../images/card-payments.png?resize&size=150&format=webp')}
                    alt='payment method'
                  />
                </>
              }
              name='paymentMethod'
              value='paypal'
            />
          </Card>
          <Checkbox
            name='termsAndConditions'
            label={
              <>
                I agree with{' '}
                <a
                  className='font-semibold text-red-700'
                  href='/terms-and-conditions'
                  target='_blank'
                >
                  terms and conditions
                </a>
              </>
            }
            helperText={errors.termsAndConditions}
          />

          <div className='flex justify-end'>
            <PrimaryButton type='submit' disabled={isSubmitting}>
              Complete purchase
            </PrimaryButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};
