import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import Cart from '../../components/cart/cart.component';

import { selectCurrentUser } from '../../store/user/user.selector';

import {
  NavContainer,
  LogoContainerLink,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <NavContainer>
        <LogoContainerLink to="/">
          <CrwnLogo />
        </LogoContainerLink>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <Cart />
        </NavLinksContainer>
      </NavContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
