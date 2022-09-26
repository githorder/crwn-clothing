import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDwot95jJ7qOwmF3LEX4H3RB5bKrV8Vqic',
  authDomain: 'crwn-clothing-db-70ce3.firebaseapp.com',
  projectId: 'crwn-clothing-db-70ce3',
  storageBucket: 'crwn-clothing-db-70ce3.appspot.com',
  messagingSenderId: '212284108436',
  appId: '1:212284108436:web:6553d885ea5d50bc2b8e81',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(firebaseApp);

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInGoogleWithRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  try {
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    }
  } catch (err) {
    console.log('Could not create the user from auth');
  }

  return userDocRef;
};

export const createUserAuthWithEmaiAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  callback && onAuthStateChanged(auth, callback);
