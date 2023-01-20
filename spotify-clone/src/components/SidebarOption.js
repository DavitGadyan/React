import React, { useState, useContext } from "react";
import DataLayerContext from "../store/auth-context";
import "./SidebarOption.css";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const SidebarOption = ({ title, Icon, playlistId }) => {
  const ctxAuth = useContext(DataLayerContext);

  const PlaylistChangeHandler = (event) => {
    ctxAuth.addDSelectedPlaylistId(
      event.currentTarget.getAttribute("playlistId")
    );
    if (ctxAuth.token) {
      spotify.setAccessToken(ctxAuth.token);

      spotify
        .getPlaylist(event.currentTarget.getAttribute("playlistId"))
        .then((response) => ctxAuth.addDiscoverWeekly(response));
    }
  };
  //   console.log("Playlist>>>", ctxAuth.selectedPlaylistId);

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h2>{title}</h2>
      ) : (
        <p onClick={PlaylistChangeHandler} playlistId={playlistId}>
          {title}
        </p>
      )}
    </div>
  );
};

export default SidebarOption;
