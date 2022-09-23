import SignUpForm from '../../components/signUpForm/signUpForm.component';
import SignInForm from '../../components/signInForm/signInForm.component';

import './auth.styles.scss';

const Auth = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
