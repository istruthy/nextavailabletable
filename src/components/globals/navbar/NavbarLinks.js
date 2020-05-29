import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils/"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/about",
        name: "about",
      },
      {
        id: 1,
        path: "/pricing",
        name: "pricing",
      },
      {
        id: 2,
        path: "/signup",
        name: "signup",
      },
    ],
  }

  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id} className="nav-link">
              {item.name}
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainBlack};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: ${styles.colors.mainBlack};
      color: #fff;
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })}
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
  }
`
