import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      setCurrentUser(user);
      user && (await createUserFromAuth(user));
    });

    return unsubscribe;
  });

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
