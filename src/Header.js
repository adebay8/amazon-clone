import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from './StateProvide'
import auth from './Firebase';

function Header() {

    const [{basket, user}] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">

            {/* nav logo */}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"></img>
            </Link>
            
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/> 
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            
            {/* link to other pages */}
            <div className="header__nav">

                {/* first link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign in"}</span>
                    </div>
                </Link>

                {/* second link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            {/* cart icon with the number of items */}
        </nav>
    )
}

export default Header
