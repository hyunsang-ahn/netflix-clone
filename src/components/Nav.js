import React, { useEffect, useState } from 'react';
import './Nav.css'
const Nav = () => {
  const [show, handleShow] = useState(false)
  useEffect(() => {

    window.addEventListener('scroll', () => {
      //화면의 높이가 100이 넘어가면 background color를 활성화 시킴.
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    });
    return (
      () => {
        //component will unmount 의 역할입니다.
        window.removeEventListener("scroll", null)
      }
    )
  }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav_logo' src='https://w.namu.la/s/984a3a524c3a76ef69967a3538f0b655d9e4a9b948314bd8d57f34a1502753104f1613f356c08d4352cdfad86bbea9cd56b2133ea5c9c7a57f1c065b1048cb5bb56d8694ff8f63226fdea6ecdbf37efaedf75baf630a1d786bac559d865631d8' alt='Netflix Logo' />
      <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Logo' />

    </div>
  );
};

export default Nav;