import React, { Component } from 'react';
import './Header.css';
class Header extends Component {

    render() {
        return (
          <header>
            <menu>
              <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
              </ul>
            </menu>
          </header>
        );
      }

}

export default Header;