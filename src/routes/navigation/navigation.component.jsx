import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import Cart from '../../components/cart/cart.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {
  NavContainer,
  LogoContainerLink,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();

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
            <NavLink as="span" onClick={() => dispatch(signOutStart())}>
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
