import React from "react";
import Logo from '../assets/KonaDeroin.svg'
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          {/* logo */}
          <a href="#">
            <img src={Logo}></img>
          </a>
          <button className="btn btn-sm">Contact Me</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
