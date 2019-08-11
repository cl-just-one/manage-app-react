import React, { Component } from 'react';
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderImage,
  HeaderRegisterImage
} from './style.js';

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <HeaderLogo>
            <HeaderImage/>
            <HeaderRegisterImage/>
          </HeaderLogo>
        </HeaderWrapper>
      </div>
    )
  }
}

export default Header;
