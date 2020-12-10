import { storiesOf } from '@storybook/react';
import React from 'react';
import Section from './Section';

storiesOf('Section', module)
  .add('Full-width-Section', () => (
    <Section background="eee" fullWidth={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet
      ipsa repudiandae vitae debitis atque? Mollitia, eius provident quis harum
      fugit, doloremque amet officiis ea sint a praesentium, suscipit doloribus?
    </Section>
  ))
  .add('Container-section', () => (
    <Section background="eee" fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet
      ipsa repudiandae vitae debitis atque? Mollitia, eius provident quis harum
      fugit, doloremque amet officiis ea sint a praesentium, suscipit doloribus?
    </Section>
  ))
  .add('Transparent-Section', () => (
    <Section background="" fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet
      ipsa repudiandae vitae debitis atque? Mollitia, eius provident quis harum
      fugit, doloremque amet officiis ea sint a praesentium, suscipit doloribus?
    </Section>
  ));
