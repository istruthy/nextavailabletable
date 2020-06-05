import React from "react"
// import { createGlobalStyle } from "styled-components"
import Nav from "../components/globals/Nav"
import Banner from "../components/globals/Banner"
import Intro from "../components/globals/Intro"
import About from "../components/globals/About"
import Process from "../components/globals/Process"
// import Price from "../components/globals/Price"

import Contact from "../components/globals/Contact"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Banner />
      <Intro />
      <About />
      <Process />
      {/* <Price /> */}
      <Contact />
      {children}
    </>
  )
}

// const GlobalStyle = createGlobalStyle`
//   *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

export default Layout
