import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const header = () => {
    return (<div>
        <div id="brandlogo">
            <div id="headertext">
              <h1 id="header1">An <span id="bolditalic">app</span> to truly capture your students sporting skills</h1>
              <h2 id="header2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
            </div>
            <div id="signUpbtn">
            <Link to ='/signup' ><button id="headerbtn">
                  Sign Up</button></Link>
            </div>
        </div>
    </div>);
};

export default header;