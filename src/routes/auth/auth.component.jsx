import SignUpForm from '../../components/signUpForm/signUpForm.component';
import SignInForm from '../../components/signInForm/signInForm.component';

import { AuthContainer } from './auth.styles';

const Auth = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Auth;
