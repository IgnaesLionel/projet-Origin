import React from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { BiCommentDots } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <header>
      <ul className = "nav-ul ">
        <Link to ="/">
            <li className = "nav-li list-inline-item "> <BiHomeAlt/> Accueil </li>
        </Link>
        <Link to ="/Contact">
            <li className = "nav-li list-inline-item "> Contact <BiCommentDots/> </li>
        </Link>
        <Link to ="/Login">
            <li className = "nav-li list-inline-item ">  Login <BiLogInCircle/> </li>
        </Link>
      </ul>
      </header>
    </div>
  );
}

export default Nav;
