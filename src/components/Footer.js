import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container" id="about">
            <section className="footer-discount">
                <p className="footer-discount-heading">Beating me in Brawlhalla avails you a 15% discount on one order*</p>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Me</h2>
                        <a className='links' href='https://www.instagram.com/bodvar_bakes/'  target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i> bodvar_bakes</a>
                        <a className='links' href='https://www.instagram.com/riceb0i69/' target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i> riceb0i69</a>
                        <a className='links' href='https://www.instagram.com/riceb0i69/' target="_blank" rel="noreferrer"><i class="fab fa-steam"></i> Spamalamadingdong</a>
                    </div>
                </div>
            </div>
            <div className="the_end">
                <div className="footer__logo">
                    <h1>Bodvar Bakes</h1>
                </div>
                <div className="footer__copyright">
                    <p><span>&#169;</span> 2020 Bodvar Bakery</p>
                </div>
                <div className="footer__TC">*T<span>&#38;</span>C Apply</div>
            </div>
        </div>
    )
}

export default Footer
