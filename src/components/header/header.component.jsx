import React from 'react';
import { Link} from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg'

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <LogoIcon className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
            </div>
        </div>
    );
}

export default Header;