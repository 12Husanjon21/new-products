import React from "react";

const Header = () => {
  return (
    <header>
      <h3>Filter By:</h3>
      <div className="sort">
        <button className="sortBtn">
          <span class="material-symbols-outlined">keyboard_arrow_down</span><h3> Sort By</h3>
          </button>
        
      </div>
    </header>
  )
}

export default Header;