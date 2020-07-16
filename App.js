import React from "react";
// import { AppRegistry } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// import { InMemoryCache } from "apollo-cache-inmemory";

import { Provider } from "react-redux";
import store from "./redux/store";

import Chats from "./screens/Chats";

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  uri: "http://192.168.2.102:4000/graphql",
  // cache: new InMemoryCache(),
});

console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Chats />
      </ApolloProvider>
    </Provider>
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
