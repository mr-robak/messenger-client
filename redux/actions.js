import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// APP STATE
export const fetchingData = { type: "FETCHING_DATA" };
export const finishedFetching = { type: "DATA_FETCHED" };

//USER

export const fetchUserData = (userId) => (state) => {
  // fetch user here - this async so use thunk!
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

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

  console.log("=====>   ", data);

  // const userData = state;

  return {
    type: "FETCH_USER_WITH_CHATS",
    payload: data,
  };
};

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

//CHATS

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
