import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 20%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary.color};
`;

export const Actions = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  padding: 2em 0;
  padding-left: 40px;
  cursor: pointer;
  background: ${(props) =>
    props.highlighted === 'marked'
      ? props.theme.secondaryHover.color
      : 'unset'};
  &:hover {
    background: ${(props) => props.theme.secondaryHover.color};
  }
  & i {
    padding-right: 5px;
  }
`;

export const LogoText = styled.h1`
  color: #fff;
  margin: 0;
  padding: 1em 0;
  padding-left: 40px;
  border-bottom: 2px solid #999;
`;
