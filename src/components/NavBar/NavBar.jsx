import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {

    const token = localStorage.getItem("token")
    console.log(`${token}`)
    return (
        <nav className="fixed flex top-0 lef-0 w-full z-30 bg-transparent">
            <div className='flex w-full py-4 justify-between px-20 items-center'>
                <Link className="text-3xl text-white font-semibold text-uppercase" to="/">GetCar</Link>

                    
                <div>
                    <ul className='flex gap-4 text-white'>
                        {
                            !token
                                ? <>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/login">login</Link>
                                    </li>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/register">register</Link>
                                    </li>
                                </>
                                : <>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/">Home</Link>
                                    </li>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/logout">Logout</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar