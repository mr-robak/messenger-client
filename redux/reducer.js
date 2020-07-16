const initialState = {
  loading: false,
  user: { id: 1 },
  chats: [1, 2, 3],
};

const FETCHING_DATA = "FETCHING_DATA";
const DATA_FETCHED = "DATA_FETCHED";
const FETCH_USER_WITH_CHATS = "FETCH_USER_WITH_CHATS";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA: {
      return { ...state, loading: true };
    }
    case DATA_FETCHED: {
      return { ...state, loading: false };
    }
    case FETCH_USER_WITH_CHATS: {
      return state;
    }

    default: {
      return state;
    }
  }
}
