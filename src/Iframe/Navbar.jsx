import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  // Update active link when the location changes
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleClick = (title, link) => {
    setActive(title);
    navigate(link);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
    <Link to="/">
    <img src={logo} alt="RecAuto" className="w-[198px] h-[70px]" />
    </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-1" : "mr-10"}`}
          >
            <Link
              to={nav.link}
              onClick={() => handleClick(nav.title, nav.link)}
            >
              {nav.title}
            </Link>
          </li>
        ))}
        <li className={`pl-7 cursor-pointer `}>
          <Link to="/SignUp">
            <Button />
          </Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <Link
                  to={nav.link}
                  onClick={() => handleClick(nav.title, nav.link)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
