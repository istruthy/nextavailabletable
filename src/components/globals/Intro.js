import React from "react"
import styled from "styled-components"

function Intro() {
  return (
    <SectionWrapper>
      <section className="intro section-padding" id="intro">
        <div className="flexbox-parent">
          <article className="intro item-margin flexbox-parent--medium">
            <div className="intro__photo">
              <img
                src="./images/man-using-gray-iphone-6-212288.jpg"
                alt=""
                className="intro__photo-img"
              />
            </div>
            <div className="intro__info">
              <div className="intro__info-title">
                Helping you fill your tables with predictability and ease
              </div>
              <p className="intro__info-text">
                Taking reservations is not typical for your venue, but you need
                to manage your capacity to keep within the guidelines of local
                regulations.
              </p>
              <a href="#" className="intro__info-link">
                sign up today
              </a>
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  /* intro */

  .intro__photo-img {
    width: 100%;
    display: block;
  }

  .intro__info-title {
    font-size: 2rem;
    text-transform: capitalize;
    margin: 1rem 0 2rem 0;
    font-weight: 300;
    line-height: 2.75rem;
    color: var(--black);
  }

  .intro__info-text {
    line-height: 1.5;
    font-weight: 300;
    color: var(--black);
  }

  .intro__info-link {
    display: inline-block;
    font-size: 1.5rem;
    padding: 0.5rem 2.5rem;
    text-decoration: none;
    margin: 1.75rem 0rem;
    color: var(--black);
    border: 0.2rem solid var(--black);
    transition: all 1s ease;
    font-weight: 200;
    width: 100%;
    text-align: center;
    position: relative;
    text-transform: capitalize;
  }

  .intro__info-link:hover {
    background: var(--black);
    color: var(--white);
  }

  @media (min-width: 768px) {
    .intro {
      margin: 0;
    }
    .intro__info,
    .intro__photo {
      flex: 0 0 calc(50% - 0.5rem);
    }
    .intro__info-link {
      width: 100%;
    }

    .intro__info {
      align-self: center;
      padding: 0 2rem;
    }

    .intro__info-text {
      width: 90%;
    }
  }
`

export default Intro
