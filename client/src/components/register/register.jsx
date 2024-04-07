import React from "react";
import './register.css'
import '../../App.css'
import { Link } from "react-router-dom";

// import aseets
import img from "../../LoginAssets/bgLogin.jpg"
import logo from "../../LoginAssets/logoLogin.png"

// Import icons
import { FaUserShield } from "react-icons/fa";
import { TbShieldLockFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const register = () => {
    return(
        <div className='registerPage flex'>
            <div className="container flex">
                <div className="imgDiv">
                    <img src={img} alt="image"/>

                    <div className="textDiv">
                        <h2 className='title'>Seamless Comfort, Crafted for You.</h2>
                        <p>Iwang Sport</p>
                    </div>

                    <div className='footerDiv flex'>
                        <span className="text">Have any account?</span>
                        <Link to={'/'}>
                            <button className="btn">Sign in</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logoImage" />
                        <h3>Let us know you!</h3>
                    </div>

                    <form action="" className="form grid">
                        {/* Input Email */}
                        <div className="inputDiv">
                            <label htmlFor="Email">Email</label>
                            <div className="input flex">
                                <MdEmail className='icon' />
                                <input type="text" id="email" placeholder="Email" />
                            </div>
                        </div>

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
                            <span>Register </span>
                            <IoCheckmarkDoneSharp className="icon" />
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default register