import React, {useState, useEffect} from 'react';
import HeaderTop from './HeaderTop';
/*import { FaMobileAlt } from 'react-icons/fa';*/


import './Header.scss';


/*const Header = ({contacts}) => {*/
const Header = () => {
  /*const [contactsSum, setContactsSum] = useState([]);*/

  /*useEffect(() => {
    let contactsSum = null;
    contacts.map(contact => {
      contactsSum++;
      return contactsSum;
    });
    setContactsSum(contactsSum);
  }, [contacts]);*/


  return (
    <header className="header">
      {/*<FaMobileAlt />*/}
      <HeaderTop />
    </header>
  )
}

export default Header;