import React from 'react'
import './Header.css'
const Header = (props) => (
  <div className="header">
    <img
      className="logo"
      src="https://talentportugal.com/wp-content/uploads/listing-uploads/logo/2019/06/4dUkCtgE.jpg"
      alt="movieImg"
    />
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        style={{ width: "100%" }}
        value={props.value}
        onChange={e => props.handleChange(e)}
      />
      <button>Add</button>
    </form>
  </div>
);
export default Header;