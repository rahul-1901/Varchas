import React from 'react';
import './Events.css';
import Footer from '../varchas/Footer';
import sportsEvent from '../assets/sportsFest.png';

const Events = () => {
  return (
    <div className='w-screen'>
      <div className='w-full absolute items-center okay'>
        <div className='flex flex-wrap justify-center mt-[4vh]'>
          <img className='' src={sportsEvent}></img>
        </div>
        <div className='lg:mt-[-12vh] md:mt-[-5vh] mt-[-10vh] flex flex-wrap justify-evenly items-center'>
          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>1</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>HOCKEY</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card1 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>2</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>BADMINTON</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card2 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>3</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>BASKETBALL</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card3 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>4</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>CRICKET</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>
        </div>
        <div className='mt-[5vh] flex flex-wrap justify-evenly items-center'>
        <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card4 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>5</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>FOOTBALL</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card5 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>6</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>TABLE TENNIS</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card6 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>7</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>VOLLEYBALL</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card7 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>8</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>CHESS</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>
        </div>
        <div className='mt-[5vh] flex flex-wrap justify-evenly items-center mb-[30vh]'>
        <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card8 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>9</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>KABADDI</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card9 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>10</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>LAWN TENNIS</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card10 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>11</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>SQUASH</p>
                  <button className='register ml-[5px] p-[5px]'>Register</button>
                </div>
            </div>
          </div>

          <div className='parent h-[300px] w-[220px] mt-[50px]'>
            <div className='card11 pt-[220px]'>
                <div className='number ml-[0.3vw] absolute mt-[-15px]'>
                  <span className='iteration'>12</span>
                </div>
                <div className='content-box pt-[20px] pb-[10px]'>
                  <p className='sports-name ml-[5.5px]'>ATHLETICS</p>
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

export default Events