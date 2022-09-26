import { useState } from 'react';

import {
  createUserAuthWithEmaiAndPassword,
  createUserFromAuth,
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import FormInput from '../formInput/formInput.component';

import './signUpForm.styles.scss';

const initFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(initFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createUserAuthWithEmaiAndPassword(email, password);
      await createUserFromAuth({ ...user, displayName });
      resetForm();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use');
        return;
      }
      alert('Could not create a user', err);
    }
  };

  return (
    <div className="signUpForm">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
