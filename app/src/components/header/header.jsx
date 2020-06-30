import React from 'react';
import className from 'classnames';

import './header.scss';

export const BASE = 'header';

const Header = () => {
  return (
    <header
      className={className(BASE, 'if', 'color', 'lighterBeige', 'secondary')}
    >
      <div className={className('if', 'grid', 'wide')}>
        <div className={className(`${BASE}__lang-bar`, 'if', 'row')}>
          <div
            className={className(
              `${BASE}__lang-bar__button`,
              'if',
              'col-12--xs',
              'col-2--smlr',
              'color',
              'darkBeige',
              'secondary',
            )}
            role="button"
            aria-label="Click to change language"
          >
            <h5>Language</h5>
          </div>
        </div>
      </div>
      <div
        className={className(
          `${BASE}__nav-bar`,
          'if',
          'row',
          'color',
          'lightestBeige',
          'secondary',
        )}
      >
        <h2>Navbar</h2>
      </div>
    </header>
  );
};

export default Header;
