import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <header className="if global header color lighterBeige secondary">
      <div className="if grid fluid">
        <div className="if row header__lang-bar">
          <div className="if col-12--xs col-2--sm color darkBeige secondary header__lang-bar__button">
            <h5>Language</h5>
          </div>
        </div>
      </div>
      <div className="if row color lightestBeige secondary header__nav-bar">
        <h2>Navbar</h2>
      </div>
    </header>
  );
};

export default Header;
