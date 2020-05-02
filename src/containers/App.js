import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Profile from "./Profile";
import Header from "../components/Header/Header";

import logo from "../logo.svg";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header logo={logo} />
          <Profile />
        </AppWrapper>
      </>
    );
  }
}

export default App;
