import React, { memo } from 'react';

const Navbar = memo(function Navbar() {
  return (
    <div className="menu fixed top-10 left-0 w-full z-[50] opacity-60">
      <div className="enu-top">
        <div className="brand from-top box">
          <img
            src="/imgs/logo.jpeg"
            alt="Logo"
            className="logo mb-3"
            loading="eager"
            decoding="sync"
            width="120"
            height="120"
          />
          <div className="brand-name">
            <span className="italianno ran">Ra</span>
            <span className="italianno ntika">ntika</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navbar;

