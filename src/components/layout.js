import React from "react"
// import { createGlobalStyle } from "styled-components"
import Navbar from "../components/globals/navbar"

// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
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
