import React from 'react';
import { Button, Section } from '../../components';

function Home() {
  return (
    <>
      <Section fullWidth={true} background="888">
        Welcome to your React boilerplate!
      </Section>
      <Section fullWidth={false} background="">
        <Button color="primary" handleClick={() => alert('Hello')}>
          Click Me
        </Button>
      </Section>
    </>
  );
}

export default Home;
