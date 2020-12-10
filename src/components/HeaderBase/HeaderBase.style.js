import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  color: #444;
  font-size: 0.8em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
