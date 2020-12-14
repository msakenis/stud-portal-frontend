import React, { useContext } from 'react';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import * as S from './HeaderBase.style';
import { IconInput } from '../';
function HeaderBase() {
  const selectedId = useContext(HighlightIdContext);
  const nav = [
    { id: 1, name: 'Home', to: '/', iconClass: 'fas fa-home' },
    {
      id: 2,
      name: 'Courses',
      to: '/courses',
      iconClass: 'fas fa-graduation-cap',
    },
    {
      id: 3,
      name: 'Students',
      to: '/students',
      iconClass: 'fas fa-user-graduate',
    },
  ];

  return (
    <S.Header>
      <S.LogoText>CodeOp</S.LogoText>
      <S.Actions>
        {nav.map((link) => (
          <S.StyledLink
            highlighted={
              selectedId.selectedId === link.id ? 'marked' : undefined
            }
            key={link.id}
            to={link.to}
          >
            <IconInput className={link.iconClass} /> {link.name}
          </S.StyledLink>
        ))}
      </S.Actions>
    </S.Header>
  );
}

export default HeaderBase;
