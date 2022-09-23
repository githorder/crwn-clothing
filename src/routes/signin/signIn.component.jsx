import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  signInGoogleWithRedirect,
  createUserFromAuth,
  auth,
} from '../../utils/firebase/firebase.utils';

import './signIn.styles.scss';

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        await createUserFromAuth(response.user);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={signInGoogleWithRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
