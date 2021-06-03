import React from 'react';
import { Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <LogoIcon className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                {currentUser ? <><div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div><img width="40px" alt="User Avatar" src={`${currentUser.photoURL}`}/></> : 
                <Link to='/signin' className='option'>SIGN IN</Link>}
            </div>
        </div>
    );
}

export default Header;