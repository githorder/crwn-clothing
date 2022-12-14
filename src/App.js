import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import {
  onAuthStateChangedListener,
  createUserFromAuth,
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';
import { setCategoriesAsync } from './store/categories/categories.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      user && (await createUserFromAuth(user));
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(setCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
