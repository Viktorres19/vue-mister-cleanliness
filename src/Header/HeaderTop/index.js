import React from 'react';

import s from './HeaderTop.module.scss';
import Socials from './Socials';
import Contacts from './Contacts';

const HeaderTop = () => {

  return (
    <div className={s.block}>
      <div className="container">
        <div className={s.flex}>
          <Contacts />
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;