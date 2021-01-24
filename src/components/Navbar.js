import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
       <>
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="home" className="navbar_logo" onClick={closeMobileMenu} smooth={true} duration={750}>
                    Bodvar Bakes
                </Link>
                <div className='menu_icon' onClick = {handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                    <li className='nav_item'>
                        <Link to='home' className='nav_links' onClick={closeMobileMenu} smooth={true} duration={600}>
                            Home
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='products' className='nav_links' onClick={closeMobileMenu} smooth={true} duration={700}>
                            Products
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='about' className='nav_links' onClick={closeMobileMenu} smooth={true} duration={1000}>
                            About
                        </Link>
                    </li>
                    <li className='nav_item'>
                        {/* <Link to='/sing_up' className='nav_links_mobile' onClick={closeMobileMenu}>
                            Order Now
                        </Link> */}
                        <a className='nav_links_mobile' href="https://www.instagram.com/bodvar_bakes/" target="_blank" rel="noreferrer">
                            <div>
                                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Order Now</Button>
                            </div>
                        </a>
                    </li>
                </ul>
                {button && <a className='nav_links_mobile' href="https://www.instagram.com/bodvar_bakes/" target="_blank" rel="noreferrer">
                            <div>
                                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Order Now</Button>
                            </div>
                        </a>}
            </div>
        </nav>
       </>
    )
}

export default Navbar


// {button && <Button buttonStyle='btn--outline'>Order Now</Button>}