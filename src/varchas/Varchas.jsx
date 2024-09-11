import React, { useEffect, useState } from "react";
import "./Varchas.css";
import "./Sponsors.css";
import videoStartback from "../assets/videoTeaser.jpg";
import { Link } from "react-router-dom";
import varchasname from "../assets/varchas-name.png";
import varchasvideo from "../assets/WhatsApp Video 2024-09-03 at 22.07.41_55dbe15b.mp4";
import varchasathletics from "../assets/athletics.jpg";
import varchaskabbadi from "../assets/kabbadi.jpg";
import award from "../assets/award.png";
import goodies from "../assets/box.png";
import future from "../assets/future.png";
import athletic from "../assets/sport1.png";
import badminton from "../assets/sport3.png";
import player from "../assets/player.png";
import dj from "../assets/dj.png";
import voleyball from "../assets/volleyball.png";
import football from "../assets/football.png";
import cricket from "../assets/cricket.png";
import chess from "../assets/ches.png";
import basketball from "../assets/basketball.png";
import tt from "../assets/tt.jpg";
import nalayak from "../assets/nalayak.png";
import nalayakSing from "../assets/nalayak1.png";
import rapper from "../assets/rapper.png";
import singer from "../assets/singer.png";
import sangam from "../assets/chachhu.png";
import sangamDj from "../assets/sangamDj.png";
import beatDj from "../assets/beat.png";
import clubOn from "../assets/clubOn.jpeg";
import call from "../assets/phoneCall.png";
import email from "../assets/google.png";
import map from "../assets/locationPin.png";

const Varchas = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const slideScroll = () => {
    document
      .querySelector(".incentives_form")
      .scrollIntoView({ behavior: "smooth" });
  };

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

  return (
    <div className="flex flex-col">
      <div className="videoCont w-full lg:h-[700px] md:h-[550px] h-[620px] mb-[10px] md:mb-[10px] lg:mb-[-10px] relative">
        <img
          className="videoTeaser w-full object-cover"
          src={videoStartback}
        ></img>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center md:justify-end z-10">
          <div className="flex flex-row h-[16vh] w-[100vw] md:h-[15vh] md:w-[60vw] lg:h-[20vh] lg:w-[50vw]">
            <img
              src={varchasname}
              className="h-auto w-full object-contain"
              alt="Varchas Name"
            />
          </div>
        </div>
      </div>
      <div className="welcome w-full h-auto">
        <p className="welcomeText flex flex-wrap justify-center mt-[10px] text-[20px] md:text-[35px] md:mt-[100px]">
          WELCOME TO VARCHAS!!
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="h-[0px] w-[0px] flex flex-wrap justify-center underline ml-[7px] md:w-[30px] md:ml-[14px] mb-[4px] md:mb-[20px]"></div>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col md:w-[50vw] items-center">
            <p className="md:ml-[10px]  text-[12px] md:text-[20px]">
              Varchas is the annual sports fest of IIT Jodhpur
            </p>
            <p className="ml-[10px] text-[12px] md:text-[18px] md:mt-[20px] mt-[5px]">
              One of the largest and most eagerly anticipated sports events in
              North-West India. Varchas brings together aspiring athletes from
              across the nation, offering a dynamic platform to showcase their
              talents and participate in a wide range of sports
              activities.Through Varchas we provide people a platform where they
              can not only display their skills but also learn and develop the
              qualities of a true sportsman.
            </p>
            <p className="ml-[10px] text-[12px] md:text-[18px] md:mt-[20px] mt-[5px]">
              Our festival is designed to foster sportsmanship, encourage
              healthy competition, and provide invaluable match practice for
              players. The three days fest see participation from colleges all
              over India. across the nation, offering a dynamic platform to
              showcase their talents and participate in a wide range of sports
              activities.
            </p>
            <button
              className="incentives md:w-[110px] w-[80px] md:h-[40px] h-[25px] md:mt-[20px] mt-[5px] md:text-[18px] text-[12px] mb-[10px]"
              onClick={slideScroll}
            >
              Incentives
            </button>
          </div>
          <div className="md:flex md:flex-col hidden md:mb-[140px]">
            <img
              src={varchasathletics}
              className="game lg:w-[350px] md:w-[280px] md:mt-[80px] lg:mt-[5px]"
            ></img>
            <img
              src={varchaskabbadi}
              className="game_second lg:w-[350px] lg:h-[210px] mt-[-30px] ml-[15px] md:w-[280px]"
            ></img>
          </div>
        </div>
      </div>
      <div className="incentives_form">
        <p className="inte_text text-center text-[35px] mt-[50px] md:mt-[50px] md:mb-[5px]">
          Incentives
        </p>
      </div>
      <div className="incentives_form flex flex-wrap h-auto justify-evenly">
        <div className="incen_first h-[120px] w-[200px] md:h-[150px] md:w-[250px] mt-[10px]">
          <div className="inner">
            <div className="front">
              <p className="mb-[5px] md:text-[20px] text-[15px] mt-[5px] ml-[5px] certificate flex items-center">
                <img className="md:h-[30px] h-[20px]" src={award}></img>
                Certification
              </p>
              <p className="mb-[0px] para md:text-[15px] text-[12px] ml-[10px]">
                Certificate of appreciation from Varchas,IIT Jodhpur recognising
                your Hardwork.
              </p>
            </div>
            <div className="back">
              <p className="mb-[5px] md:text-[20px] text-[15px] mt-[5px] ml-[5px] certificate flex items-center">
                <img className="md:h-[30px] h-[20px]" src={award}></img>
                Certification
              </p>
              <p className="mb-[0px] para md:text-[15px] ml-[10px] text-[12px]">
                Certificate of appreciation from Varchas,IIT Guwahati
                recognising your Hardwork.
              </p>
            </div>
          </div>
        </div>
        <div className="incen_first h-[120px] w-[200px] md:h-[150px] md:w-[250px] mt-[10px]">
          <div className="inner">
            <div className="front">
              <p className="mb-[5px] md:text-[20px] text-[15px] mt-[5px] ml-[5px] certificate flex items-center">
                <img className="md:h-[30px] h-[20px]" src={goodies}></img>
                Goodies prize
              </p>
              <p className="mb-[0px] para md:text-[15px] ml-[10px] text-[12px]">
                Participate in the events and win merchandise, gift vouchers
                from top brands and much more!
              </p>
            </div>
            <div className="back">
              <p className="mb-[5px] md:text-[20px] text-[15px] mt-[5px] ml-[5px] certificate flex items-center">
                <img className="md:h-[30px] h-[20px]" src={goodies}></img>
                Goodies prize
              </p>
              <p className="mb-[0px] para md:text-[15px] ml-[10px] text-[12px]">
                Participate in the events and win merchandise, gift vouchers
                from top brands and much more!
              </p>
            </div>
          </div>
        </div>
        <div className="incen_first h-[120px] w-[200px] md:h-[150px] md:w-[250px] mt-[10px] mb-[50px]">
          <div className="inner">
            <div className="front">
              <p className="mb-[5px] md:text-[20px] text-[15px] mt-[5px] ml-[5px] certificate flex items-center">
                <img className="md:h-[30px] h-[20px]" src={future}></img>
                Oppurtunities
              </p>
              <p className="mb-[0px] para md:text-[15px] ml-[10px] text-[12px]">
                Participation in Varchas opens great Oppurtunities for your
                sports carrer & enhance your connection.
              </p>
            </div>
            <div className="back">
              <p className="mb-[5px] md:text-[20px] text-[15px] mt-[5px] ml-[5px] certificate flex items-center">
                <img className="md:h-[30px] h-[20px]" src={future}></img>
                Oppurtunities
              </p>
              <p className="mb-[0px] para md:text-[15px] ml-[10px] text-[12px]">
                Participation in Varchas opens great Oppurtunities for your
                sports carrer & enhance your connection.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixedDoub md:h-[250px] h-[150px] w-full relative">
        <div className="absolute inset-0 bg-black opacity-[0.3]"></div>
        <div className="oneFixed relative">
          <p className="together md:text-[40px] lg:text-[50px] text-[25px] text-center lg:mt-[6vh] md:mt-[7vh] mt-[3vh]">
            Fueling Athletic Excellence
          </p>
          <div className="flex justify-center">
            <Link to="/sponsor">
              <button className="sponsorShow lg:w-[120px] lg:h-[35px] md:w-[120px] md:h-[35px] w-auto h-auto">
                Sponsors
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="incentives_form1">
        <p className="inte_text1 text-center text-[35px] md:text-[40px] mt-[20px] md:mt-[50px] md:mb-[5px]">
          Gallery
        </p>
      </div>
      <div className="incentives_form1">
        <div>
          <p className="sports_gallery md:text-[30px] text-[20px] ml-[5vw]">
            Sports
          </p>
        </div>
        <div className="md:flex md:flex-row lg:gap-[200px] md:gap-[80px]">
          <div className="">
            <div className="flex flex-row ml-[5vw]">
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={basketball}
              ></img>
              <img
                className="lg:h-[140px] md:h-[80px] lg:w-[246px] md:w-[140px] w-[87px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={tt}
              ></img>
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={athletic}
              ></img>
            </div>
            <div className="flex flex-row ml-[5vw]">
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={cricket}
              ></img>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="lg:h-[140px]  md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc1"
              >
                <source src={varchasvideo} type="video/mp4" />
              </video>
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={football}
              ></img>
            </div>
            <div className="flex flex-row ml-[5vw]">
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={voleyball}
              ></img>
              <img
                className="lg:h-[140px] lg:w-[246px] md:w-[140px] md:h-[80px] w-[87px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={badminton}
              ></img>
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={chess}
              ></img>
            </div>
          </div>
          <div className="hidden md:flex player_foot">
            <img src={player} className="lg:h-[450px] md:h-[250px]"></img>
          </div>
        </div>
        <div>
          <p className="sports_gallery1 text-end md:text-[30px] text-[22px] mr-[5vw]">
            Informals
          </p>
        </div>
        <div className="md:flex md:flex-row-reverse lg:gap-[200px] md:gap-[50px]">
          <div className="">
            <div className="flex flex-row mr-[5vw] justify-end">
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={rapper}
              ></img>
              <img
                className="lg:h-[140px] lg:w-[246px] md:h-[80px] md:w-[140px] w-[87px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={nalayak}
              ></img>
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={beatDj}
              ></img>
            </div>
            <div className="flex flex-row mr-[5vw] justify-end">
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={nalayakSing}
              ></img>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="lg:h-[140px]  md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc1"
              >
                <source src={varchasvideo} type="video/mp4" />
              </video>
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={singer}
              ></img>
            </div>
            <div className="flex flex-row mr-[5vw] justify-end">
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={sangam}
              ></img>
              <img
                className="lg:h-[140px] lg:w-[246px] md:h-[80px] md:w-[140px] w-[87px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={clubOn}
              ></img>
              <img
                className="lg:h-[140px] md:h-[80px] h-[50px] rounded-[2px] mr-[1px] mt-[1px] ml-[1px] mb-[1px] image_doc"
                src={sangamDj}
              ></img>
            </div>
          </div>
          <div className="hidden md:flex player_foot1">
            <img src={dj} className="lg:h-[450px] md:h-[250px]"></img>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="flex flex-wrap justify-evenly items-center mt-[50px] mb-[50px]">
          <div className="">
            <p className="text-[25px]">Contact Us</p>
            <p className="flex flex-row text-[16px]">
              <a href="tel:+917852021098">
                <img
                  className="h-[20px] mt-[3px] cursor-pointer"
                  src={call}
                ></img>
              </a>
              Phone Number
            </p>
            <p className="ml-[1.1vw] text-[14px] mb-[10px]">+91 7852021098</p>
            <p className="flex flex-row text-[16px]">
              <a
                href="https://maps.app.goo.gl/58qigPpz1xZKH8a8A"
                target="_blank"
              >
                <img
                  className="h-[20px] mt-[3px] cursor-pointer"
                  src={map}
                ></img>
              </a>
              Location
            </p>
            <p className="ml-[1.3vw] text-[14px] mb-[10px]">IIT JODHPUR</p>
            <p className="flex flex-row text-[16px]">
              <a href="mailto:iitdelhi98@gmail.com">
                <img
                  className="h-[20px] mt-[3px] cursor-pointer"
                  src={email}
                ></img>
              </a>
              E-Mail
            </p>
            <p className="ml-[1.3vw] text-[14px]">iitdelhi98@gmail.com</p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.0446630919964!2d73.11084727487982!3d26.47101627893376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea672337b%3A0xb6c9a5a9b08db22e!2sIndian%20Institute%20of%20Technology%20(IIT)%2C%20Jodhpur!5e1!3m2!1sen!2sin!4v1725537938778!5m2!1sen!2sin"
              class="lg:w-[400px] lg:h-[200px] w-[200px] mt-[10px] h-[100px] md:w-[350px] md:h-[180px] rounded-[2px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varchas;
