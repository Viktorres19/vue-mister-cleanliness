import React from 'react';
import { FaPinterestP, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

import s from './Contacts.module.scss';

const Contacts = () => {

  return (
    <div className={s.block}>
      <ul>
        <li>
          <a href="#">
            <div className="danger">

            </div>
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

export default Contacts;