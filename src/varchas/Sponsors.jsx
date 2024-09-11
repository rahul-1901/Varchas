import React from 'react';
import './Sponsors.css';
import './Events.css';
import Footer from '../varchas/Footer';
import dubeat from '../assets/dubeat.png';
import cosco from '../assets/cosco.png';
import yonex from '../assets/yonex.png';
import decathlon from '../assets/decathlon.png';
import redBull from '../assets/redBull.png';
import oilndia from '../assets/oilindia.png'; 
import danik from '../assets/danik.png';
import vector from '../assets/vector.png';
import womans from '../assets/womansEra.png';
import hdfcBank from '../assets/hdfcbank.png'
import canaraBank from '../assets/canrabank.jpeg';
import saras from '../assets/saras.jpeg';
import nivea from '../assets/nivea.png';
import sbi from '../assets/sbi.jpeg';
import meraEvent from '../assets/meraEvent.png'
import sportsEvent from '../assets/sponsors.png';

const Sponsors = () => {
  return (
    <div className=''>
      <div className='w-full absolute items-center okay'>
        <div className='flex flex-wrap justify-center mt-[8vh]'>
            <img className='' src={sportsEvent}></img>
        </div>
        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
              <p className='associate'>Associate Sponsor</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={decathlon}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>DECATHLON</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Associate Sponsor</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[15px] rounded-[16px] sponsimage' src={redBull}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Red Bull</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Associate Sponsor</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={yonex}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>YONEX</p>
                  </div>
                </div>
              </div>
          </div>
        </div>  

        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Associate Sponsor</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={sbi}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>SBI</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Associate Sponsor</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={canaraBank}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Canara Bank</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Magazine Partner</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={womans}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Woman's era</p>
                  </div>
                </div>
              </div>
          </div>
        </div>  

        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Nutrition Partner</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={saras}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Saras</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Associate Sponsor</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={nivea}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Nivea</p>
                  </div>
                </div>
              </div>
          </div>
        </div>  

        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
              <p className='ml-[0.15vw] associate'>Media Partner</p>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={dubeat}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>DU beat</p>
                  </div>
                </div>
              </div>
          </div>
        </div>  


        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
            <div className='flex flex-wrap justify-center'>
              <p className='pastSponsors lg:text-[100px] md:text-[50px] text-[40px]'>PAST SPONSORS</p>
            </div>
          </div>
        </div> 

        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage pl-[18px]' src={cosco}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>COSCO</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='mt-[12vh]'>
              <div className='parent1 h-[300px] w-[280px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage pl-[16px]' src={oilndia}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Indian Oil</p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage pl-[18px]' src={meraEvent}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Mera Events</p>
                  </div>
                </div>
              </div>
          </div>
        </div>  

        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='mt-[12vh]'>
              <div className='parent1 h-[300px] w-[300px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage' src={danik}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>Danik Bhaskar</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='mt-[12vh]'>
              <div className='parent1 h-[300px] w-[260px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage pl-[10px]' src={vector}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>VECTOR X</p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className='mt-[-10vh] flex flex-wrap justify-evenly items-center mb-[20vh]'>
          <div className='mt-[12vh]'>
              <div className='parent1 h-[300px] w-[260px] mt-[1vh]'>
                <div className='cardSpon pt-[10px]'>
                  <img className='p-[10px] rounded-[16px] sponsimage pl-[16px]' src={hdfcBank}></img>
                  <div className='content-box1 pt-[5px] pb-[0px]'>
                    <p className='sports-name1 ml-[5.5px]'>HDFC BANK</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>  
  )
}

export default Sponsors