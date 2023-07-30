// Header.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LogoSvg from "../../img/logo.svg";
import Info from "../../img/icon_info.svg";
import Note2 from "../../img/logo_note2.svg";
import Note from "../../img/icon_note.svg";
import MenuIcon from "../../img/icon_menu.svg";
import CloseIcon from "../../img/icon_close.svg";
import "./style.scss";

const listItemMenu = [
  {
    text: "自分の記録",
    href: "/",
  },
  {
    text: "体重グラフ",
    href: "",
  },
  {
    text: "目標",
    href: "",
  },
  {
    text: "選択中のコース",
    href: "",
  },
  {
    text: "コラム一覧",
    href: "/column",
  },
  {
    text: "設定",
    href: "",
  },
  {
    text: "Logout",
    href: "/login",
  },
];

const IconHasNoti = ({ icon, countNoti }) => {
  return (
    <div className={"wrapIconHasNoti"}>
      <img src={icon} alt="" />
      {
        countNoti && <span className={"countNoti"}>{countNoti}</span>
      }
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = (item) => {
    if (item.href) {
      if (item.href === "/login") {
        // If the user clicks on "Logout" button, remove the "isLogin" item from localStorage
        localStorage.removeItem("isLogin");
      }
      navigate(item.href);
    }
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar className="bg_dark500 navbar-custom" position="static">
      <div className="container">
        <Toolbar className="navbar-header">
          <Typography
            className="logo"
            variant="h6"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/home")}
          >
            <img src={LogoSvg} alt="Logo" width="109" height="40" />
          </Typography>
          <Button
            className="menu-detail"
            color="inherit"
            component={NavLink}
            to="/home"
          >
            <IconHasNoti icon={Note2} />
            {/*<img src={Note2} alt="Note2" />*/}
            <span className="txt-menu ml-8 ">自分の記録</span>
          </Button>
          <Button
            className="menu-detail"
            color="inherit"
            component={NavLink}
            to="/myRecord"
          >
            <IconHasNoti icon={Note} />
            {/*<img src={Note} alt="Note" />*/}
            <span className="txt-menu ml-8 ">チャレンジ</span>
          </Button>
          <Button
            className="menu-detail"
            color="inherit"
            component={NavLink}
            to="/column"
          >
            <IconHasNoti icon={Info} countNoti={1} />
            <span className="txt-menu ml-8 ">お知らせ</span>
          </Button>
          <div
            className="btn-sub-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {anchorEl ? (
              <img src={CloseIcon} alt="CloseIcon" />
            ) : (
              <img src={MenuIcon} alt="MenuIcon" />
            )}
          </div>
          <Menu
            keepMounted
            anchorEl={anchorEl}
            onClose={handleClose}
            open={Boolean(anchorEl)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            disableScrollLock={true}
          >
            <div className="sub-menu">
              {listItemMenu.map((item, index) => (
                <MenuItem
                  key={index}
                  className="sub-menu-li"
                  onClick={() => handleClose(item)}
                >
                  {item.text}
                </MenuItem>
              ))}
            </div>
          </Menu>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;
