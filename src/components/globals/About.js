import React from "react"
import styled from "styled-components"
import { FaMobileAlt, FaStoreAlt, FaRegSmileBeam } from "react-icons/fa"

function About() {
  return (
    <AboutWrapper>
      <section className="about section-padding" id="about">
        <div className="flexbox-parent flexbox-parent--medium">
          <article className="about-card">
            <div className="about-card__icon">
              <FaMobileAlt />
            </div>
            <h3 className="about-card__title">text</h3>
            <p className="about-card__text">
              Your customer can simply text their table time and request to get
              a confirmation.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card__icon">
              <FaStoreAlt />
            </div>
            <h3 className="about-card__title">manage</h3>
            <p className="about-card__text">
              One or many locations from an easy to use interface from our app
              or dashboard.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card__icon">
              <FaRegSmileBeam />
            </div>

            <h3 className="about-card__title">easy</h3>
            <p className="about-card__text">
              You and your customer will love how easy and convenient ensuring
              they have a place at the table
            </p>
          </article>
        </div>
      </section>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.section`
  .about {
    background: var(--rust);
  }

  .about-card {
    color: var(--white);
    text-align: center;
    padding: 2rem 2rem;
    margin: 2rem 0rem;
    border: 10px solid var(--white);
    flex: 0 0 calc(33% - 1rem);
  }

  .about-card__list {
    list-style-type: none;
  }

  .about-card__item {
    display: flex;
    justify-content: center;
    margin: 1.2rem 0;
    font-size: 2rem;
  }

  .about-card__title {
    color: var(--white);
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .about-card__value {
    margin: 2rem 0;
    font-size: 4rem;
  }

  .about-card__icon {
    margin-bottom: 0.75rem;
  }

  .about-card__text {
    text-transform: capitalize;
    font-weight: 300;
    line-height: 1.5;
  }

  .about-card__link {
    display: inline-block;
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    border: 0.1rem solid var(--white);
    color: var(--white);
    border-radius: 1.5rem;
    transition: all 1s ease;
  }

  .about-card__link:hover {
    color: var(--black);
    background: var(--blue);
    border-color: var(--blue);
  }

  .about-card--custom {
    background: var(--white);
    color: var(--black);
    border-radius: 2.5rem;
    transition: all 1s linear;
  }

  .about-card--custom:hover {
    transform: translateY(-1.5rem);
  }
  .about-card--custom__link {
    color: var(--blue);
    border: 0.1rem solid var(--blue);
  }
  .about-card--custom__link:hover {
    color: var(--white);
  }
  @media (min-width: 768px) {
    .about-card {
      flex: 0 0 calc(33% - 1rem);
    }
    .about-card__icon {
      font-size: 4.25rem;
    }
  }
`

export default About
