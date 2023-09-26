import React, { useState } from 'react';
import './styles/confirmbooking.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import HeaderElement from '../components/HeaderElement';

const schema = yup.object({
  name: yup.string().required('Full name is a required field!'),
  email: yup.string().required('Email is a required field!').email('Email is not valid!'),
  telephone: yup
    .string()
    .required('Telephone is a required field!')
    .matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/, 'Phone number must match the form 233 00 000 0000'),
  guests: yup.number().min(1, 'There must be at least 1 guest!').required('Please specify the number of guests per table!'),
  date: yup.string().required('Please select a date and time!'),
});

function Confirmbooking() {
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState(null);

  const formSubmit = (data) => {
    setFormData(data);
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    reset();
  };

  return (
    <>
    <HeaderElement />
    <div>
      {isConfirmed ? (
        <div className="confirmation-message">
          <p>Your booking is confirmed!</p>
          <button onClick={handleReset}>Make Another Reservation</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(formSubmit)}>
          <fieldset>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input type="text" placeholder="John Doe" name="name" {...register('name')} />
              <span className="error-message">{errors.name?.message}</span>
            </div>
            {/* ...other form fields */}
            <button className="reserve-btn" type="submit">Reserve</button>
          </fieldset>
        </form>
      )}
      {formData && (
        <div className="form-data">
          <h2>Reservation Details</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Telephone:</strong> {formData.telephone}</p>
          <p><strong>Occasion:</strong> {formData.occasion || 'Not specified'}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          <p><strong>Date & Time:</strong> {formData.date}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Confirmbooking;
