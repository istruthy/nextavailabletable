import React, { Component } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import { styles } from "../../../utils/styles"
import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">Home</Link>
        <FaBars
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        ></FaBars>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.45rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    font-size: 1.75rem;
    color: #000;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
