import React from 'react'
import insta from '../assets/instagram.png';
import twitte from '../assets/twitter.png';
import './Sponsors.css';
import linden from '../assets/linkedin.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className="bg-[#262525] flex flex-wrap justify-evenly">
        <div className="mt-[2vh]">
          <p className="text-[20px]">Follow Us</p>
          <div className=" flex flex-row gap-[10px]">
            <a href="https://www.instagram.com/varchas_iitj/?hl=en"><img src={insta} className="h-[30px] cursor-pointer"></img></a>
            <a href="https://x.com/iitjodhpur?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={twitte} className="h-[28px] cursor-pointer"></img></a>
            <a href="https://in.linkedin.com/in/varchas-inter-college-sports-fest-of-iit-jodhpur-802b4b233"><img src={linden} className="h-[28px] cursor-pointer"></img></a>
          </div>
          <div className="text-[15px] mt-[4vh] text-[#726a6ab9]">
            Copyright © Varchas,IIT Jodhpur
          </div>
        </div>
        <div className="mt-[2vh]">
          <p className="text-[20px]">Quick Link</p>
          <Link to="/"><p className="text-[14px] cursor-pointer">&rarr;HOME</p></Link>
          <Link to="/events"><p className="text-[14px] cursor-pointer">&rarr;EVENTS</p></Link>
          <Link to="/sponsor"><p className="text-[14px] cursor-pointer">&rarr;SPONSORS</p></Link>
          <Link to="/evarchas"><p className="text-[14px] cursor-pointer">&rarr;E-VARCHAS</p></Link>
        </div>
        <div className="mb-[1vh] flex flex-col justify-end">
          <p className="text-[15px] text-[#726a6abf]">All rights reserved@Varchas,IITJ</p>
        </div>
      </div>
    </div>
  )
}

export default Footer