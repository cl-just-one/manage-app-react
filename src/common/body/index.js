import React, { Component } from 'react';
import {
  BodyWarpper,
  Box,
  NavBar,
  Nav,
  NavItem,
  ItemImg,
  NavHistory,
  HistoryTitle,
  HistoryNav,
  HistoryNavItem
} from './style.js'

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [{
        id: "1",
        name: "DASHBOARD",
        icon: "icon-dashboard"
      }, {
        id: "2",
        name: "AGENT",
        icon: "icon-sitemap"
      }, {
        id: "3",
        name: "MY CRUISE",
        icon: "icon-boat"
      }, {
        id: "4",
        name: "HELP",
        icon: "icon-life-bouy"
      }],
      history: [{
        id: "11",
        name: 'dgshshsjjssskksksk02/Accpehsbsnsnam-testpmmmmmmmmmmm'
      }, {
        id: "12",
        name: 'dgshshsjjssskksksk02/Accpehsbsnsnam-testpmmmmmmmmmmm'
      }, {
        id: "13",
        name: 'dgshshsjjssskksksk02/Accpehsbsnsnam-testpmmmmmmmmmmm'
      }, {
        id: "14",
        name: 'dgshshsjjssskksksk02/Accpehsbsnsnam-testpmmmmmmmmmmm'
      }, {
        id: "15",
        name: 'dgshshsjjssskksksk02/Accpehsbsnsnam-testpmmmmmmmmmmm'
      }, {
        id: "16",
        name: 'dgshshsjjssskksksk02/Accpehsbsnsnam-testpmmmmmmmmmmm'
      }, {
        id: "17",
        name: 'dgshshsjjssskksksk02/Accpehsbsnsnam-testpmmmmmmmmmmm'
      }]
    }
  }
  render () {
    return (
      <div>
        <BodyWarpper>
          <Box>
            <NavBar>
              <Nav>
                {
                  this.state.navList.map((item, index) => (
                    <NavItem key={{index}}>{item.name}</NavItem>
                  ))
                }
              </Nav>
              <NavHistory>
                <HistoryTitle>History</HistoryTitle>
                <HistoryNav>
                  {
                    this.state.history.map((item, index) =>
                      <HistoryNavItem key={{index}}>
                        <ItemImg key={{item}} className="icon" className={item.icon}></ItemImg>
                        {item.name}
                      </HistoryNavItem>
                    )
                  }
                </HistoryNav>
              </NavHistory>
            </NavBar>
          </Box>
        </BodyWarpper>
      </div>
    )
  }
}

export default Body;