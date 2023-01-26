import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <nav className='nav'>
                <div className="container">
                    <div id="mainListDiv" className='main_list'>
                        <ul className="navlinks">
                            <li>
                                <Link to="/Home">HOME</Link>
                            </li>
                            <li>
                                <Link to="/Register">REGISTER</Link>
                            </li>
                            <li>
                                <Link to="/Login">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <section className="home">

            </section> */}

        </div>
    )
};

