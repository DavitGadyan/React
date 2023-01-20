import DataLayerContext from "./auth-context";
import { useReducer } from "react";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  selectedPlaylistId: null,
  // remove when in production
  //   token:
  //     "BQAfclVrcELK-8wLvobpS9jWQQRAaZSYIf5EXeGZBdRz1qbsiZLaVws0qH9YFc4La9Ng0WhAtw75vCgdR_G5-oObsZ0mGfTjZeva4FfNiYgZ8dZ8QWythYr7l6q0nUK0QhZNZDvJ4Fqg8IhgcHgyoO1gjuawFZ2ZXMujYggWnYKGxkCdae_QaaSwQZAq6iFTYzAHMCBd1uvPln3GU5P4",
  token: null,
};

const reducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    case "SET_SELECTED_PLAYLIST":
      return { ...state, selectedPlaylistId: action.selectedPlaylistId };

    default:
      return state;
  }
};

export const DataLayer = (props) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addUserHandler = (user) => {
    dispatch({ type: "SET_USER", user: user });
  };

  const addTokenHandler = (token) => {
    dispatch({ type: "SET_TOKEN", token: token });
  };

  const addPlaylistsHandler = (playlists) => {
    dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
  };

  const addDiscoverWeeklyHandler = (response) => {
    dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response });
  };

  const addDSelectedPlaylistIdHandler = (id) => {
    dispatch({ type: "SET_SELECTED_PLAYLIST", selectedPlaylistId: id });
  };

  const cartContext = {
    ...cartState,
    user: cartState.user,
    token: cartState.token,
    addUser: addUserHandler,
    addToken: addTokenHandler,
    addPlaylists: addPlaylistsHandler,
    addDiscoverWeekly: addDiscoverWeeklyHandler,
    addDSelectedPlaylistId: addDSelectedPlaylistIdHandler,
  };

  return (
    <DataLayerContext.Provider value={cartContext}>
      {props.children}
    </DataLayerContext.Provider>
  );
};

export default DataLayer;
