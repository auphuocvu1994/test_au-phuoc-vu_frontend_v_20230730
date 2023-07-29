// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LogoSvg from '../../img/logo.svg';
import Info from '../../img/icon_info.svg';
import Note2 from '../../img/logo_note2.svg';
import Note from '../../img/icon_note.svg';
import MenuIcon from '../../img/icon_menu.svg';
import CloseIcon from '../../img/icon_close.svg';
import './style.scss'
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar className='bg_dark500 navbar-custom' position="static">
      <div className='container'>
        <Toolbar className='navbar-header'>
          <Typography className='logo' variant="h6" sx={{ flexGrow: 1 }}>
            <img src={LogoSvg} alt="Logo" width="109" height="40" />
          </Typography>
          <Button className="menu-detail" color="inherit" component={NavLink} to="/" activeClassName="active">
            <img src={Note2} alt="Note2" />
            <span className='txt-menu ml-8 '>自分の記録</span>
          </Button>
          <Button className="menu-detail" color="inherit" component={NavLink} to="/myRecord" activeClassName="active">
            <img src={Note} alt="Note" />
            <span className='txt-menu ml-8 '>チャレンジ</span>
          </Button>
          <Button className="menu-detail" color="inherit" component={NavLink} to="/column" activeClassName="active">
            <img src={Info} alt="Info" />
            <span className='txt-menu ml-8 '>お知らせ</span>
          </Button>
          <Button className="btn-sub-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {anchorEl ? (
              <img src={CloseIcon} alt="CloseIcon" />
            ) : (
              <img src={MenuIcon} alt="MenuIcon" />
            )}
          </Button>
          <Menu
            keepMounted
            anchorEl={anchorEl}
            onClose={handleClose}
            open={Boolean(anchorEl)}
          >
            <div className='sub-menu'>
              <MenuItem className='sub-menu-li' onClick={handleClose}>自分の記録</MenuItem>
              <MenuItem className='sub-menu-li' onClick={handleClose}>体重グラフ</MenuItem>
              <MenuItem className='sub-menu-li' onClick={handleClose}>目標</MenuItem>
              <MenuItem className='sub-menu-li' onClick={handleClose}>選択中のコース</MenuItem>
              <MenuItem className='sub-menu-li' onClick={handleClose}>コラム一覧</MenuItem>
              <MenuItem className='sub-menu-li' onClick={handleClose}>設定</MenuItem>
            </div>
          </Menu>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;