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
        <div>
          <del>Helmet</del>
        </div>
        <div>
          <del>Styled-components</del>
        </div>
        <div>
          <del>Production bundle</del>
        </div>
        <div>
          <del>Typescript</del>
        </div>
        <div>
          <del>Storybook</del>
        </div>
        <div>Storybook components</div>
        <div>Global theme</div>
        <div>test</div>
        <h5>SERVER</h5>
        <div>
          <del>Express</del>
        </div>
        <hr />
        <Button label="Button" />
      </Container>
    </>
  );
};

export default App;
