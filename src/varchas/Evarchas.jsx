import React from 'react';
import Footer from '../varchas/Footer';
import './Evarchas.css';
import sportsEvent from '../assets/esports.png';
import './Events.css';
import './Sponsors.css';

const Evarchas = () => {
  return (
    <div className=''>
      <div className='absolute items-center okay w-full h-auto'>
        <div className='flex flex-wrap justify-center mt-[1vh]'>
          <img className='' src={sportsEvent}></img>
        </div>
        <div className='lg:mt-[-12vh] md:mt-[-5vh] mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>1</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>FREE FIRE</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame1 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>2</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>BGMI</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame2 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>3</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>CLASH ROYAL</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>
        </div>
        <div className='mt-[5vh] flex flex-wrap justify-evenly items-center'>
          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame3 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>4</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>VALORANT</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame4 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>5</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>CALL OF DUTY</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame5 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>6</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>FIFA EA</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>
        </div>
        <div className='mt-[5vh] flex flex-wrap justify-evenly items-center mb-[30vh]'>
          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame6 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>7</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>CLASH OF CLANS</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='cardGame7 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>8</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>FORTNITE</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
     </div>   
  )
}

export default Evarchas