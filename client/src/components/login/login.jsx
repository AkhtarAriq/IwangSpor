import React from "react";
import './login.css'
import '../../App.css'
import { Link } from "react-router-dom";


// import assets
import img from "../../LoginAssets/bgLogin.jpg"
import logo from "../../LoginAssets/logoLogin.png"

// Import icons
import { FaUserShield } from "react-icons/fa";
import { TbShieldLockFilled } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";

const login = () => {
    return(
        <div className='loginPage flex'>
            <div className="container flex">
                <div className="imgDiv">
                    <img src={img} alt="image"/>

                    <div className="textDiv">
                        <h2 className='title'>Seamless Comfort, Crafted for You.</h2>
                        <p>Iwang Sport</p>
                    </div>

                    <div className='footerDiv flex'>
                        <span className="text">Don't have any account?</span>
                        <Link to={'/register'}>
                            <button className="btn">Sign up</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logoImage" />
                        <h3>Hi, welcome back!</h3>
                    </div>

                    <form action="" className="form grid">
                        <span className="showMessage">Login status!</span>
                        {/* Input Username */}
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id="username" placeholder="Username" />
                            </div>
                        </div>

                        {/* Input Password */}
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <TbShieldLockFilled className='icon' />
                                <input type="password" id="password" placeholder="Password" />
                            </div>
                        </div>

                        <button type="submit" className="btn flex">
                            <span>Login </span>
                            <CiLogin className="icon" />
                        </button>

                        <span className="lupaPassword">
                            Forgot Password?   <a href="">Click Here</a>
                        </span>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default login