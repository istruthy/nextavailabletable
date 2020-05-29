import React from "react"
import styled from "styled-components"

export default function Banner() {
  return (
    <BannerWrapper>
      <article class="banner">
        <div class="banner__container">
          <h1 class="banner__title">they want to come back</h1>
        </div>
      </article>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.article`
  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .banner__title {
    text-align: center;
    font-size: 5rem;
    text-transform: lowercase;
    font-weight: 100;
    color: #ffffff;
  }

  .banner__title-name {
    font-size: 4rem;
    text-decoration: underline;
  }
`
