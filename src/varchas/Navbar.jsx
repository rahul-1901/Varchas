import React, { useEffect, useState } from "react";
import "./Varchas.css";
import './Navbar.css';
import './Sponsors.css';
import varchashome from "../assets/varchas-home.png";
import menubar from "../assets/menu_bar.png";
import { NavLink } from 'react-router-dom';
import { document } from "postcss";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const firstScroll = () => {
    document.querySelector(".videoCont").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className={`md:bg-[#d0d0d0eb] bg-[#d0d0d0eb] lg:bg-[#000000] flex flex-wrap items-center justify-between h-auto w-full navbar ${isScrolled ? "scrolled" : ""}`}>
        <img
          className="h-[30px] md:h-[60px] cursor-pointer ml-[10px] md:ml-[30px]"
          src={varchashome}
        ></img>
        <div className="md:flex flex-wrap md:w-[500px] md:justify-evenly md:gap-[20px] hidden h-auto md:mr-[15px]">
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/Varchas"><p className="mr-[1px] cursor-pointer" onClick={firstScroll}>
            HOME
          </p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/events"><p className="mr-[1px] cursor-pointer">EVENTS</p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/sponsor"><p className="mr-[1px] cursor-pointer">SPONSORS</p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/evarchas"><p className="mr-[1px] cursor-pointer">E-VARCHAS</p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/login"><p className="mr-[1px] cursor-pointer">LOGIN</p></NavLink>
        </div>
        <div className="md:hidden">
          <a className="text-[25px] mr-[5px]" href="#" onClick={toggleNav}>&#8801;</a>
        </div>
      </div>
      <div className={`navClick h-[100vh] w-[100px] flex-col gap-[10px] items-center mt-[37.2px] ${isNavOpen ? 'flex' : 'hidden'}`}>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/"><p className="mr-[1px] text-[15px] cursor-pointer" onClick={firstScroll}>
            HOME
          </p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/events"><p className="mr-[1px] text-[15px] cursor-pointer">EVENTS</p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/sponsor"><p className="mr-[1px] text-[15px] cursor-pointer">SPONSORS</p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/evarchas"><p className="mr-[1px] text-[15px] cursor-pointer">E-VARCHAS</p></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red": "design"}} to="/login"><p className="mr-[1px] text-[15px] cursor-pointer">LOGIN</p></NavLink>
      </div>
    </div>
  )
}

export default Navbar