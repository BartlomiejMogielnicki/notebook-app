import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Welcome</h1>
    <Button width="220px">Close/Save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
