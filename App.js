import React from "react";
// import { AppRegistry } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
// import FetchData from "./screens/FetchData";
// import HelloWorld from "./screens/HelloWorld";
import Chats from "./screens/Chats";

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  uri: "http://192.168.2.102:4000/graphql",
  // cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Chats />
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
