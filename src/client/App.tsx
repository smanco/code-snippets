import React from "react";
import { Helmet } from "react-helmet";
import Button from "@ui/ButtonStyled";
import Container from "@styles/ContainerStyle";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Code Snippets - Home page</title>
        <meta name="description" content="Code Snippets home page" />
      </Helmet>
      <Container>
        <h1>Code Snippets</h1>
        <h3>TODO LIST</h3>
        <h5>CLIENT</h5>
        <ul>
          <li>
            <del>Helmet</del>
          </li>
          <li>
            <del>Styled-components</del>
          </li>
          <li>
            <del>Production bundle</del>
          </li>
          <li>
            <del>Typescript</del>
          </li>
          <li>
            <del>Storybook</del>
          </li>
          <li>Storybook components</li>
          <li>Global theme</li>
          <li>test</li>
        </ul>
        <h5>SERVER</h5>
        <ul>
          <li>
            <del>Express</del>
          </li>
        </ul>
        <hr />
        <Button label="Button" />
      </Container>
    </>
  );
};

export default App;
