import React, { useContext, useEffect, useState } from "react";
import Pintu from "assets/img/pintu.webp";
import IconHome from "assets/img/icons/Home.svg";
import IconHomeWhite from "assets/img/icons/Home_w.svg";
import IconTransaction from "assets/img/icons/Transaction.svg";
import IconTransactionWhite from "assets/img/icons/Transaction_w.svg";
import IconProfile from "assets/img/icons/Profile.svg";
import IconProfileWhite from "assets/img/icons/Profile_w.svg";
import IconLogout from "assets/img/icons/Logout.svg";
import { Hooks } from "providers";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Sidebar(props) {
  const { activeTab, setActiveTab } = useContext(Hooks);
  // eslint-disable-next-line no-undef
  const loc = useLocation();
  useEffect(() => {}, [localStorage.getItem("token")]);

  return (
    <div className="sidebar">
      {props.role === "customer" ? (
        <div className="sidebar__wrap-vertical">
          <div className="">
            <Link to="/home">
              <div className="position-relative">
                <div
                  className={`iconBri position-absolute radiusBottomRight ${
                    loc.pathname === "/home" || loc.pathname === "/"
                      ? `d-block`
                      : `d-none`
                  }`}
                  style={{ background: "#f5f5f5", height: "200px" }}
                />
                <div
                  className={`iconBri ${
                    (loc.pathname === "/home" || loc.pathname === "/") &&
                    "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img
                    src={Pintu}
                    data-testid="logos"
                    alt=""
                    srcset=""
                    width="70px"
                    height="70px"
                    className="rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </Link>

            <Link to="/home">
              <div
                className="position-relative"
                onClick={(e) => setActiveTab("home")}
              >
                <div
                  className={`iconBri position-absolute radiusBottomRightMini ${
                    activeTab === "transaction" ? `d-block` : `d-none`
                  }`}
                  style={{ background: "#f5f5f5", height: "200px" }}
                />
                <div
                  className={`iconMenus ${
                    (loc.pathname === "/home" || loc.pathname === "/") &&
                    `active`
                  } ${
                    activeTab === "transaction" && "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img
                    src={
                      loc.pathname === "/home" || loc.pathname === "/"
                        ? IconHome
                        : IconHomeWhite
                    }
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="sidebar__wrap-vertical">
          <div className="">
            <Link to="/home">
              <div className="position-relative">
                <div
                  className={`iconBri position-absolute radiusBottomRight ${
                    loc.pathname === "/home" || loc.pathname === "/"
                      ? `d-block`
                      : `d-none`
                  }`}
                  style={{ background: "#f5f5f5", height: "200px" }}
                />
                <div
                  className={`iconBri ${
                    (loc.pathname === "/home" || loc.pathname === "/") &&
                    "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img src={Pintu} alt="" srcset="" />
                </div>
              </div>
            </Link>

            <Link to="/home">
              <div
                className="position-relative"
                onClick={(e) => setActiveTab("home")}
              >
                <div
                  className={`iconBri position-absolute radiusBottomRightMini ${
                    loc.pathname === "/profile" ? `d-block` : `d-none`
                  }`}
                  style={{ background: "#f5f5f5", height: "200px" }}
                />
                <div
                  className={`iconMenus ${
                    (loc.pathname === "/home" || loc.pathname === "/") &&
                    `active`
                  } ${
                    loc.pathname === "/profile" && "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img
                    src={
                      loc.pathname === "/home" || loc.pathname === "/"
                        ? IconHome
                        : IconHomeWhite
                    }
                    alt=""
                  />
                </div>
              </div>
            </Link>

            <Link to="/profile">
              <div
                className={`iconMenus ${loc.pathname === "/profile" && `active`}
                        d-flex justify-content-center align-items-center position-relative`}
                onClick={(e) => setActiveTab("profile")}
              >
                <img
                  src={
                    loc.pathname === "/profile" ? IconProfile : IconProfileWhite
                  }
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
