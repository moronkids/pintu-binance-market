import React, { useContext, useState } from "react";
import Pintu from "assets/img/pintu.webp";
import { Hooks } from "providers";
function Header() {
  const { setToggle, toggle } = useContext(Hooks);
  return (
    <>
      <div className="header position-fixed">
        <div className="wrap d-flex justify-content-between w-100">
          <div className="">
            <img
              className="rounded-xl shadow-xl"
              src={Pintu}
              alt=""
              srcset=""
              height="40px"
              width="40px"
            />
          </div>
          <div className="wrapBurger">
            <div
              id="nav-icon1"
              className={`mr-2 ${toggle && "open"}`}
              onClick={(e) => setToggle(!toggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
