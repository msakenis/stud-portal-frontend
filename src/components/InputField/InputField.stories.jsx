import { storiesOf } from '@storybook/react';
import React from 'react';
import InputField from './InputField';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

storiesOf('InputField', module).add('Input Email or Text', () => (
  <ThemeProvider theme={theme}>
    <InputField
      name={'email'}
      inputId={'email'}
      type={'email'}
      required={true}
      minLength={6}
      maxLength={20}
      placeholder={'john@email.com'}
    />
  </ThemeProvider>
));
