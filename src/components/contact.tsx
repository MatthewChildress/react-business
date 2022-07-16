import e from 'express';
import React, { FormEvent, useState } from 'react'

const Contact = () => {
    const [status, setStatus] = useState('submit');
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        const { name, email, phone, streetAddress, city, postalCode, message, } = (e.target as HTMLFormElement).value;
        let details = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            streetAddress: streetAddress.value,
            city: city.value,
            postalCode: postalCode.value,
            message: message.value,
        };
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json, charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setStatus('Submit');
        let result = await response.json();
        alert(result.status);
    };
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label><br />
            <input type='text' id='name' required />
        </div>
        <div>
            <label htmlFor='email'>Email:</label><br />
            <input type='email' id='email' required />
        </div>
        <div>
            <label htmlFor='phone'>Phone Nunmber:</label><br />
            <input type='tel' id='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
        </div>
        <div>
            <label htmlFor='streetAddress'>Street Address:</label>
            <input type='text' id='streetAddress' required />
            <label htmlFor='city'>City:</label>
            <input type='text' id='city' required />
            <label htmlFor='postalCode'>ZIP or Postal Code:</label>
            <input type='text' id='postalCode' />
        </div>
        <div>
            <p>
            Services Requested
            </p>
            <div>
                <input type='radio' id='landscape' name='services' value='landscape' checked />
                <label htmlFor='landscape'>Landscaping</label>
                <input type='radio' id='brush' name='services' value='brush' />
                <label htmlFor='brush'>Brush Removal</label>
                <input type='radio' id='other' name='services' value='other' />
                <label htmlFor='landscape'>Other Stuff</label>
            </div>
        </div>
        <div>
            <label htmlFor='message'>Any Additional Information:</label>
            <textarea id='message' />
        </div>
        <button type='submit'>{status}</button>
    </form>
  );
};

export default Contact;