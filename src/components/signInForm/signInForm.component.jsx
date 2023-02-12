import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../formInput/formInput.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  SignInFormContainer,
  SignInSubTitle,
  SignInTitle,
  BtnGroup,
  GoogleIcon,
} from './signInForm.styles';
import {
  emailSigninStart,
  googleSigninStart,
} from '../../store/user/user.action';

const initFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();

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
    dispatch(emailSigninStart(email, password));
    resetForm();
  };

  return (
    <SignInFormContainer>
      <SignInTitle>Already have an account?</SignInTitle>
      <SignInSubTitle>Sign in with email and password</SignInSubTitle>
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
        <BtnGroup>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={() => dispatch(googleSigninStart())}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            <GoogleIcon />
          </Button>
        </BtnGroup>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
