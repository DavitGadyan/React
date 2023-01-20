import { createContext } from "react";

const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  playing: false,
  item: null,
  token: null,
  selectedPlaylistId: null,
  addUser: (user) => {},
  addToken: (token) => {},
  addPlaylists: (playlists) => {},
  addDiscoverWeekly: (response) => {},
  addDSelectedPlaylistId: (id) => {},
};
const DataLayerContext = createContext(initialState);

export default DataLayerContext;
