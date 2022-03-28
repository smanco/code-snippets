import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Button from './layout/base/Button';

const App:React.FC = () => {
  const Container = styled.div`
    text-align: center;
    `;

  return (
    <>
      <Helmet>
        <title>Graphbook - Home page</title>
        <meta name="description" content="Graphbook home page" />
      </Helmet>
      <Container>
        <h1>Graphbook</h1>
        <h3>ToDo list</h3>
        <h5>CLIENT</h5>
        <div><del>Helmet</del></div>
        <div><del>Styled-components</del></div>
        <div><del>Production bundle</del></div>
        <div><del>Typescript</del></div>
        <div><del>Storybook</del></div>
        <div>Storybook components</div>
        <div>Global theme</div>
        <div>test</div>
        <h5>SERVER</h5>
        <div><del>Express</del></div>
        <hr />
        <Button>Button</Button>

      </Container>
    </>
  );
}

export default App;
