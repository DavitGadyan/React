import { createContext } from "react";

const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  addUser: (user) => {},
  addToken: (token) => {},
};
const DataLayerContext = createContext(initialState);

export default DataLayerContext;
