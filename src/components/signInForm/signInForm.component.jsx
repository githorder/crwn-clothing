import { useState } from 'react';

import {
  signInUserWithEmailAndPassword,
  signInGoogleWithRedirect,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';

import './signInForm.styles.scss';

const initFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(initFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (err) {
      alert('Incorrect credintials');
    }
  };

  return (
    <div className="signInForm">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="btn-group">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInGoogleWithRedirect}
            buttonType="inverted"
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
