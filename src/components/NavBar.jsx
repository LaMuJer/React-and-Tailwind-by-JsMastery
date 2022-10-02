import {useState} from 'react';

import {close, logo, menu} from '../assets'
import {navLinks} from "../constants/index.js";

function NavBar(props) {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center'>
            <img src={logo} alt="hooBank" className='w-[124px] h-[32px]'/>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((navLink, index) =>  (
                    <li key={navLink.id} className={ ` 
                        font-mono font-normal cursor-pointer text-white text-[16px]
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                    `}>
                        <a href={`#${navLink.id}`}>{navLink.title}</a>
                    </li>
                ))}
            </ul>

            <div className={`sm:hidden flex flex-1 justify-end items-center`}>
                <img src={toggle ? close : menu} onClick={() => setToggle(prevState => !prevState)}
                     className={`cursor-pointer w-[24px] h[24px]`} alt="menu"/>
                <div className={`${toggle ? 'flex' : 'hidden'} 
                    p-6 absolute bg-black-gradient top-20 right-0 rounded-xl mx-4 my-2 min-w-[140px] sidebar
                `}>
                    <ul className='list-none justify-end items-center flex-1'>
                        {navLinks.map((navLink, index) =>  (
                            <li key={navLink.id} className={ ` 
                        font-mono font-normal cursor-pointer text-white text-[16px]
                        ${index === navLinks.length - 1 ? 'mb-0' : 'mb-5'}
                    `}>
                                <a href={`#${navLink.id}`}>{navLink.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;