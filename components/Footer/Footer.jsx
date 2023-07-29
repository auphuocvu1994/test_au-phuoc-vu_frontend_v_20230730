// Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import './style.scss'
const Footer = () => {

  return (
    <footer className='bg_dark500'>
      <div className='container'>
        <Button className='btn-link' color="inherit" component={NavLink} to="/" >
          <span className='txt-menu '>会員登録</span>
        </Button>
        <Button className='btn-link' color="inherit" component={NavLink} to="/myRecord" >
          <span className='txt-menu '>運営会社</span>
        </Button>
        <Button className='btn-link' color="inherit" component={NavLink} to="/column" >
          <span className='txt-menu '>利用規約</span>
        </Button>
        <Button className='btn-link' color="inherit" component={NavLink} to="/column" >
          <span className='txt-menu '>個人情報の取扱について</span>
        </Button>
        <Button className='btn-link' color="inherit" component={NavLink} to="/column" >
          <span className='txt-menu '>特定商取引法に基づく表記</span>
        </Button>
        <Button className='btn-link' color="inherit" component={NavLink} to="/column" >
          <span className='txt-menu '>お問い合わせ</span>
        </Button>
      </div>
    </footer >
  );
};

export default Footer;