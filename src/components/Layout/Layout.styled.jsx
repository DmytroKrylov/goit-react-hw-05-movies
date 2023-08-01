import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  width: 100%;
  padding: 25px 30px;
  background: white;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const Nav = styled.nav`
  text-align: center;
`;
export const Navlink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  font-size: 40px;
  color: #000;

  transition: color 250ms linear;
  &:not(:last-child) {
    margin-right: 36px;
  }
  &:hover,
  &:focus {
    color: red;
  }
  &.active {
    color: #e90b0b;
  }
`;
