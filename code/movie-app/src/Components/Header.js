import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Header = (props) => (
  <div className='headerContainer'>
    <div className="header">
      <img
        className="logo"
        src={require('../images/diamond.png')} //"https://talentportugal.com/wp-content/uploads/listing-uploads/logo/2019/06/4dUkCtgE.jpg"
        alt="movieImg"
      />
      <form className="form" onSubmit={props.handleSubmit}>
        <input
          style={{ width: "100%" }}
          value={props.value}
          onChange={e => props.handleChange(e)}
        />
      </form>
    </div>
    {props.navigateBack ? 
        <Link to={props.navigateBack}>
          <div id='moviePageHomeBtn'>{props.btnText}</div>
        </Link>
        :
        null    
    }
  </div>
);
export default Header;