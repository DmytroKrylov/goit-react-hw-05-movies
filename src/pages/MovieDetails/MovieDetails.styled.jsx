import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 32px;
`;
export const ButtonBack = styled.button`
  display: block;
  margin-bottom: 20px;
  background: white;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 16px;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Item = styled.li`
  background: white;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  }
`;
export const LinkText = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: red;
    &.active {
      color: red;
    }
  }
`;
