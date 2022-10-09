import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainerLink = styled(Link)`
  height: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  letter-spacing: 1px;
`;
