import React from 'react';
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className='item'>
                Streamy
            </Link>
            <div className="right menu">
                <Link className="item" to="/">
                    All Streams
                </Link>
            </div>
            <GoogleAuth />
        </div>
    )
};

export default Header;
