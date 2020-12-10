import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

storiesOf('Button', module)
  .add('Primary Button', () => (
    <ThemeProvider theme={theme}>
      <Button color="primary" handleClick={() => console.log('clicked')}>
        Primary Button
      </Button>
    </ThemeProvider>
  ))
  .add('Secondary Button', () => (
    <ThemeProvider theme={theme}>
      <Button color="secondary" handleClick={() => console.log('clicked')}>
        Primary Button
      </Button>
    </ThemeProvider>
  ));
