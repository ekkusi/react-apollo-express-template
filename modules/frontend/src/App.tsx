import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import ApolloProvider from "apollo/ApolloProvider";
import MainView from "./views/main/Main";

import theme from "./theme";

const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider>
        <Container maxWidth="1000px" minHeight="100vh">
          <MainView />
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
