import { useRef, useEffect, FC, useCallback } from 'react';
import { Form, Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { EditableServerValues } from './types';
import { PrimaryButton } from '../PrimaryButton';
import { TextField } from '../TextField';
import Card from '../Card';
import Image from '../Image';
import { ListGroup, ListGroupItem } from '../ListGroup';
import { RadioButton } from '../RadioButton';
import { Checkbox } from '../Checkbox';
import { useFetchServerInfoByIP } from '../utils';
// const debounce = require('lodash.debounce');

const defaultValues = {
  serverIP: '',
  serviceLength: 30,
  paymentMethod: 'paypal',
  termsAndConditions: false
};

const serviceLength = [
  {
    label: '30 Days boost',
    endLabel: '€ 10 EUR.',
    value: 30,
    checked: true
  },
  {
    label: '60 Days boost',
    endLabel: '€ 20 EUR.',
    value: 60
  },
  {
    label: '180 Days boost',
    endLabel: '€ 60 EUR.',
    value: 180
  }
];

export const PurchaseForm: FC<{
  onSubmit: (values: EditableServerValues) => void;
  initialValues?: EditableServerValues;
}> = ({ onSubmit, initialValues }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (!initialValues) return;
    formRef.current.setValues(initialValues);
  }, [initialValues]);

  const {
    isLoading: infoIsLoading,
    error: infoError,
    server,
    refetch
  } = useFetchServerInfoByIP(formRef.current?.values.serverIP);
  console.log('formRef.current?.values.serverIP', formRef.current?.values.serverIP);

  useEffect(() => {
    refetch();
  }, [formRef.current?.values.serverIP]);

  // formRef.current.values

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  // useCallback(() => {
  //   return debounce(formik.validateForm, 500)
  // },[])

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues ?? defaultValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ values, touched, errors, handleChange, isSubmitting }) => (
        <Form>
          <h2 className='py-2 text-md font-medium'>Service details</h2>
          <ListGroup>
            <ListGroupItem>
              <TextField
                name='serverIP'
                label='Server IP:PORT'
                placeholder='IP:PORT'
                value={values.serverIP}
                onChange={handleChange}
                error={touched.serverIP && Boolean(errors.serverIP)}
                helperText={touched.serverIP && errors.serverIP}
                validate={validateEmail}
              />
              {server ? (
                <>
                  <div className='text-sm'>{server.hostname}</div>
                  <img
                    key={server.mapname}
                    // onError={function (e) {
                    //   e.currentTarget.src = '/maps/nopicture.jpg';
                    // }}
                    className='mr-5'
                    width='100'
                    height='75'
                    src={'/maps/' + server.mapname + '.jpg'}
                    alt={'cs map' + server.mapname}
                  />
                </>
              ) : null}

              {/* <div>{JSON.stringify(server)}</div> */}
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
                  checked={service.checked}
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
              checked
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
