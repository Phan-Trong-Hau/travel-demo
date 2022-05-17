import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals 
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time. 
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>How it works</h2>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Investors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Contact</Link>
                        <Link to='/sign-up'>Support</Link>
                        <Link to='/sign-up'>Destinations</Link>
                        <Link to='/sign-up'>Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sign-up'>Submit Video</Link>
                        <Link to='/sign-up'>Ambassadors</Link>
                        <Link to='/sign-up'>Agency</Link>
                        <Link to='/sign-up'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='/sign-up'>Facebook</Link>
                        <Link to='/sign-up'>Youtube</Link>
                        <Link to='/sign-up'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i class="fa-brands fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2022</small>
                    <div className="social-icons">
                        <a className="social-icon-link facebook" href="https://www.facebook.com/Phantronghau.bommm" target="_blank" rel="noopener noreferrer"  aria-label='Facebook' >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a className="social-icon-link instagram" href="https://www.instagram.com/phan_trong_hau/"  target="_blank" rel="noopener noreferrer"  aria-label='Instagram' >
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a className="social-icon-link youtube" href="/"  target="_blank" rel="noopener noreferrer"  aria-label='Youtube' >
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a className="social-icon-link twitter" href="https://twitter.com/Phan_Trong_Hau"  target="_blank" rel="noopener noreferrer"  aria-label='Twitter' >
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a className="social-icon-link linkedin" href="https://www.linkedin.com/in/phan-trong-hau/"  target="_blank" rel="noopener noreferrer"  aria-label='LinkedIn' >
                            <i class="fa-brands fa-linkedin"></i>                        
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Footer;