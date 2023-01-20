import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import DataLayerContext from "../store/auth-context";

const Header = ({ spotify }) => {
  const ctxAuth = useContext(DataLayerContext);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artsits, Songs.." type="text" />
      </div>
      <div className="header__right">
        <Avatar
          src={ctxAuth?.user?.images[0]?.url}
          alt={ctxAuth?.user?.display_name}
        />
        <h4>{ctxAuth?.user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
