import React from "react";
import Header from "./Header";
import { useContext } from "react";
import DataLayerContext from "../store/auth-context";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";
import "./Body.css";

const Body = ({ spotify }) => {
  const ctxAuth = useContext(DataLayerContext);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        {/*kjhdsakjdhj */}
        <img src={ctxAuth?.discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{ctxAuth.discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {ctxAuth?.discover_weekly?.tracks?.items?.map((item) => (
          <SongRow track={item?.track} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
