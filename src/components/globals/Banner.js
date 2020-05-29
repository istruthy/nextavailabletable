import React from "react"
import styled from "styled-components"

function Banner() {
  return (
    <BannerWrapper>
      <header className="header" id="header">
        <article className="banner">
          <div className="banner__container">
            <h1 className="banner__title">they want to come back</h1>
          </div>
        </article>
      </header>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.header`
  /* header */

  .header {
    min-height: 92vh;
    display: flex;
    align-items: center;
    /* for the rest of the elements*/
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("./images/empty-tables-inside-a-cafe-3910126.jpg") center/cover fixed
        no-repeat;
    position: relative;
  }

  /* banner */

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* .banner__container {

} */

  .banner__title {
    text-align: center;
    font-size: 5rem;
    text-transform: lowercase;
    font-weight: 100;
    color: var(--white);
  }

  .banner__title-name {
    font-size: 4rem;
    text-decoration: underline;
  }
`

export default Banner
