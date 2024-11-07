import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../contexts/SessionContext';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { token } = useContext(SessionContext)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed flex top-0 left-0 w-full z-30 ${isScrolled ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`}>
            <div className='flex w-full py-4 justify-between px-20 items-center'>
                <Link className="text-3xl text-white font-semibold text-uppercase" to="/">GetCar</Link>

                <div>
                    <ul className='flex gap-4 text-white'>
                        {
                            !token
                                ? <>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/login">login</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/register">register</Link>
                                    </li>
                                </>
                                : <>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/">Home</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to="/logout">Logout</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
