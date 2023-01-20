import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useContext } from "react";
import DataLayerContext from "../store/auth-context";

const Sidebar = () => {
  const ctxAuth = useContext(DataLayerContext);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      ></img>
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {ctxAuth.playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          key={playlist.id}
          playlistId={playlist.id}
        />
      ))}
    </div>
  );
};

export default Sidebar;
