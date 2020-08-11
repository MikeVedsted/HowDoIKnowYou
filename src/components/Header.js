import React from 'react';

const Header = ({SearchBox}) => {
  return (
    <header className="bg-white-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6">
          <SearchBox/>
        </nav>
    </header>  
  );
}

export default Header;

