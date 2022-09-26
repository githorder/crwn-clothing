import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="nav">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
