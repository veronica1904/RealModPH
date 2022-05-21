import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/Logo.png";
import { logoutAsync } from "../redux/actions/actionLogin";

const NavBars = () => {
  //-----------------logou-------------------------------//
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  return (
    <div className="container-Nav">
      <nav className="nav-item">
        <div className="container-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container-item_nav">
          <ul className="list-nav">
            <li className="item_nav">
              <Link to="/home">Home</Link>
            </li>
            <li className="item_nav">
              <Link to="/">About</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Property</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Ver</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Pages</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Blog</Link>
            </li>
            <li className="item_nav">
              <Link to="/">Contac</Link>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653110608/RealMod/01_lgnh3a.png" ></img>
            </li>

            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653110608/RealMod/02_oorvqi.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653110608/RealMod/02_1_plbopd.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653110608/RealMod/04_mjse2n.png" ></img>
            </li>
            <li className="item_nav">
              <Link to="/"> </Link>
              <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653112199/RealMod/Group_1_fey1yk.png" ></img>
            </li>

            <li className="item_nav" onClick={logout}>
              <a href="#">Cerrar</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBars;
