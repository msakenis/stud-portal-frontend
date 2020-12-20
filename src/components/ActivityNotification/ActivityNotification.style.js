import styled from 'styled-components';

export const NotifDiv = styled.div`
  :not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.secondary.background};
  }
`;
export const NotifTitle = styled.h4`
  font-weight: 500;

  font-size: 1.1em;
  color: ${({ theme }) => theme.primary.color};
`;

export const DateString = styled.p`
  color: ${({ theme }) => theme.primary.color};
`;

export const NotifText = styled.p`
  color: ${({ theme }) => theme.secondaryHover.background};
  text-align: justify;
  font-size: 0.9em;
`;
