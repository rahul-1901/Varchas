import React, {useState} from 'react';
import './Login.css';
import varchashome from "../assets/varchas-home.png";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='relative'>
      <div className='loginback w-full flex justify-center items-center'>
        <div
          className={`lg:h-[400px] lg:w-[400px] md:h-[350px] md:w-[350px] h-[400px] w-[320px] mt-[22vh] loginform flex flex-col items-center transition-all duration-500 ${
            isLogin ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img className='h-[50px] w-[50px] mt-[1vh]' src={varchashome} alt="logo" />
          <p className='loginLogo text-center text-[30px] lg:mt-[7vh] md:mt-[4vh] mt-[2vh]'>Login to your account</p>
          <p className='account text-[13px] mt-[-1vh]'>
            Don't have an account yet?
            <span
              className='signup text-[15px] cursor-pointer'
              onClick={() => setIsLogin(false)}
            >
              SignUp
            </span>
          </p>
          <input className='emailId mt-[2vh] md:mt-[0.5vh] lg:mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='Email address' />
          <input className='emailId mt-[2vh] md:mt-[0.5vh] lg:mt-[2vh] w-[280px] h-[35px] md:w-[300px] p-[5px]' placeholder='Password' />
          <p className='mt-[0vh] text-[13px] forgotPass lg:ml-[11vw] md:ml-[22vw] ml-[35vw]'>Forgot your Password?</p>
          <button className='loginbutton w-[280px] h-[35px] md:w-[300px] text-[20px] mt-[4vh] md:mt-[2vh]'>Login</button>
        </div>

        <div
          className={`md:h-[400px] md:w-[400px] w-[320px] h-[400px] mt-[22vh] loginform1 flex flex-col items-center absolute transition-all duration-500 ${
            isLogin ? 'opacity-0 z-0' : 'opacity-100 z-10'
          }`}
        >
          <img className='h-[50px] w-[50px] mt-[1vh]' src={varchashome} alt="logo" />
          <p className='loginLogo text-center text-[30px] lg:mt-[7vh] md:mt-[4vh] mt-[2vh]'>Create an account</p>
          <p className='account text-[13px] mt-[-1vh]'>
            Already have an account?
            <span
              className='signup text-[15px] cursor-pointer'
              onClick={() => setIsLogin(true)}
            >
              Login
            </span>
          </p>
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='Email address' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='First Name' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='Last Name' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='Password' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='Confirm Password' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='Gender' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='College' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='State' />
          <input className='emailId mt-[2vh] w-[280px] md:w-[300px] h-[35px] p-[5px]' placeholder='Mobile Number' />
          <button className='loginbutton w-[280px] h-[35px] md:w-[300px] text-[20px] mt-[5vh] mb-[1vh]'>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
