import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 20%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.secondary.color};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    position: absolute;
    z-index: 3;
    width: 35%;
    font-size: 1.5em;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 60%;
  }
`;

export const Actions = styled.nav`
  display: flex;
  flex-direction: column;

  width: 100%;
  top: 103px;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  padding: 2em 0;
  padding-left: ${(props) =>
    props.highlighted === 'marked' ? '35px' : '40px'};
  cursor: pointer;

  background: ${(props) =>
    props.highlighted === 'marked'
      ? props.theme.secondaryHover.color
      : 'unset'};
  border-left: ${(props) =>
    props.highlighted === 'marked' ? '5px solid #fff;' : 'none'};
  @media (max-width: ${({ theme }) => theme.bigTablet}) {
    padding-left: ${(props) =>
      props.highlighted === 'marked' ? '25px' : '30px'};
  }
  &:hover {
    background: ${(props) => props.theme.secondaryHover.color};
    border-left: 5px solid #fff;

    padding-left: 35px;
    @media (max-width: ${({ theme }) => theme.bigTablet}) {
      padding-left: 25px;
    }
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
  @media (max-width: ${({ theme }) => theme.bigTablet}) {
    padding-left: 25px;
    font-size: 1.6em;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding-left: 80px;
    font-size: 1.6em;
  }
`;
