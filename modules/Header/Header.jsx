import React from 'react';
import Image from 'next/image';
import style from './header.module.scss';
import logo from '../../assets/dot-icon.png'

function Header() {
  return (
    <div className={style.header}>
            <div>
              <Image className={style.logo} src={logo} alt="site logo" width={100} priority />
            </div>
            <h1>
              FredMadeThis.
            </h1>
          </div>
  );
}

export default Header;