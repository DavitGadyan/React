import "./App.css";
import Login from "./components/Login";
import { useEffect, useContext } from "react";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import DataLayerContext from "./store/auth-context";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState();
  const ctxAuth = useContext(DataLayerContext);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      ctxAuth.addToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        ctxAuth.addUser(user);
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("xxxx>>>", playlists);
        ctxAuth.addPlaylists(playlists);
      });
    }
  }, [ctxAuth]);

  console.log("user>>>", ctxAuth.user);
  console.log("token>>>>", ctxAuth.token);
  console.log("playlists>>>>", ctxAuth.playlists);
  return (
    <div className="App">
      <header className="App-header">
        {ctxAuth.token ? <Player spotify={spotify} /> : <Login />}
      </header>
    </div>
  );
}

export default App;
