import React from 'react';
import { FaPinterestP, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

import s from './Socials.module.scss';

const Socials = () => {

  return (
    <div className={s.block}>
      <ul>
        <li>
          <a href="#" className="danger">
            <FaPinterestP />
          </a>
        </li>
        <li>
          <a href="#" className="light-blue">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="#" className="blue">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#" className="green">
            <FaFacebookF />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials;