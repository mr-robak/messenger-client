import React from "react";
// import { AppRegistry } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import HelloWorld from "./screens/HelloWorld";

import { StyleSheet, Text, View } from "react-native";
import FetchData from "./screens/FetchData";

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <FetchData />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
