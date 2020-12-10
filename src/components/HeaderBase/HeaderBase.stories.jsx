import { storiesOf } from '@storybook/react';
import React from 'react';
import HeaderBase from './HeaderBase';
import StoryRouter from 'storybook-react-router';

storiesOf('HeaderBase', module)
  .addDecorator(StoryRouter())
  .add('HeaderBase', () => <HeaderBase />);
