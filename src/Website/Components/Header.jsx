import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav id="tm-nav" className="fixed w-full">
                <div className="tm-container mx-auto px-2 md:py-6 text-right">
                    <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-gold" /></button>
                    <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
                        <li className="inline-block mb-4 mx-4"><NavLink to="Intro" className="tm-text-gold py-1 md:py-3 px-4">Intro</NavLink></li>
                        <li className="inline-block mb-4 mx-4"><NavLink to="Menu" className="tm-text-gold py-1 md:py-3 px-4">Menu</NavLink></li>
                        <li className="inline-block mb-4 mx-4"><NavLink to="About" className="tm-text-gold py-1 md:py-3 px-4">About</NavLink></li>
                        <li className="inline-block mb-4 mx-4"><NavLink to="Contact" className="tm-text-gold py-1 md:py-3 px-4">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header