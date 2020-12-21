import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 1em;
  padding-left: 3em;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.secondary.color};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1em;
  &&:hover {
    border-bottom: 2px solid ${(props) => props.theme.secondary.color};
  }
`;

export const StyledButton = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.theme.primary.background};
  color: ${(props) => props.theme.primary.color};
  box-shadow: 1px 3px 3px 1px ${(props) => props.theme.primaryHover.background};
  cursor: pointer;
  outline: none;

  &&:hover {
    background-color: ${(props) => props.theme.primaryHover.background};
    color: ${(props) => props.theme.secondary.color};
  }
`;
