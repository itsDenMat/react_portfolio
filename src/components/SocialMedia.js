import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

function SocialMedia () {
    return (
        <ul className='home-about-social-links'>
            <li className='social-icons'>
                <a href='https://github.com/itsDenMat' target='blank' rel='noreferrer' className='icon-colour home-social-icons'>
                    <AiFillGithub className='social-icon' />
                </a>
            </li>
            <li className='social0icons'>
                <a href='https://www.linkedin.com/in/dennis-mateo-797a36240/' target='blank' rel='noreferrer' className='icon-colour home-social-icons'>
                    <FaLinkedinIn className='social-icon' />
                </a>
            </li>
            <li className='social-icons'>
                <a href='https://www.instagram.com/itsdenmat/' target='blank' rel='noreferrer' className='icon-colour home-social-icons'>
                    <AiFillInstagram className='social-icon' />
                </a>
            </li>
            <li className='socialicons'>
                <a href='mailto:dennismateo93@gmail.com' target='blank' rel='noreferrer' className='icon-colour home-social-icons'>
                    <MdEmail className='social-icon' />
                </a>
            </li>
        </ul>
    );
}

export default SocialMedia;