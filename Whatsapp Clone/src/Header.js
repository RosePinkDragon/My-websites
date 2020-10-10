import React from 'react';
import "./styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <nav className="header">
            {/* logo on left */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png">
                </img>
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav">
                {/* first link */}
                {/* we use "Link" instead of "href" */}
                {/* cause href refreshes the page */}
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello,</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* second */}
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* third */}
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* forth basket */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping basket */}
                        <ShoppingBasketIcon />
                        {/* number of items */}
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
