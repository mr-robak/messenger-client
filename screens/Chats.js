import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CHAT = gql`
  query getCompleteChat($id: Int!) {
    getCompleteChat(id: $id) {
      id
      title
      creatorId
      participants {
        firstName
        email
      }
      messages {
        senderId
        content
        contentType
      }
    }
  }
`;
const GET_USER = gql`
  query getUser($id: Int!) {
    user(id: $id) {
      id
      firstName
      lastName
      # email
      # password
      # isLoggedin
      # preferences
      user_contacts {
        id
        firstName
        lastName
      }
      participants {
        id
        title
        creatorId
      }
    }
  }
`;

export default function Chats() {
  // console.log(dataFetch);
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: 1 },
  });
  // const { loading, error, data } = useQuery(GET_CHAT, {
  //   variables: { id: 2 },
  // });
  // console.log(data.user.chat_users);
  console.log("=====>   ", data);

  if (loading)
    return (
      <View style={s.container}>
        <Text style={s.text2}>Loading...</Text>
      </View>
    );

  if (error)
    return (
      <View style={s.container}>
        <Text style={s.text2}>Error: {error.message}</Text>
      </View>
    );

  // const userData =()=>{
  //   return (<Text style={s.text1}>Hello {data.user.firstName}!</Text>
  //   <Text style={s.text2}>Here are your contacts:</Text>
  //   {data.user.user_contacts.map((user) => {
  //     return (
  //       <Text key={user.id} style={s.text3}>
  //         {user.firstName}
  //       </Text>
  //     );
  //   })}
  //   )
  // }

  return (
    <View style={s.container}>
      {/* {userData()} */}
      <Text style={s.text1}>Chat</Text>

      {data.user.participants.map((chat) => {
        return (
          <Text key={chat.id} style={s.text2}>
            {chat.id}
            {chat.title === null ? `creatorId:${chat.creatorId}` : chat.title}
          </Text>
        );
      })}

      {/* <Text style={s.text1}>Hello {data.user.firstName}!</Text>
      <Text style={s.text2}>Here are your contacts:</Text>
      {data.user.user_contacts.map((user) => {
        return (
          <Text key={user.id} style={s.text3}>
            {user.firstName}
          </Text>
        );
      })} */}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 40,
    fontWeight: "500",
  },
  text2: {
    fontSize: 25,
    fontWeight: "500",
  },
  text3: {
    fontSize: 30,
    fontWeight: "500",
  },
});
