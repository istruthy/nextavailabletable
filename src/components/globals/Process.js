import React from "react"
import styled from "styled-components"

import imageOne from "../../images/tim-mossholder-sxb8StmTfaw-unsplash.jpg"
import imageTwo from "../../images/thom-holmes-J2e34-1CVVs-unsplash.jpg"
import imageThree from "../../images/jenny-smith-SwgJLK96fMw-unsplash.jpg"

function Process() {
  return (
    <SectionWrapper>
      <section className="processes section-padding" id="processes">
        <div className="flexbox-parent">
          <article className="progress__item flexbox-parent--medium">
            <div className="process__info">
              <h1 className="process__info-title">
                Provide your QR Code or link from your website
              </h1>
              <p className="process__info-text">
                Your customers have several ways they can get their next table
                at your place.
              </p>
            </div>

            <div className="process__img process_img-two progress__img-top"></div>

            <div className="process__info">
              <h1 className="process__info-title">
                Customers arrive at their reserved time
              </h1>
              <p className="process__info-text">
                15 minutes prior to their seating time your customer will
                receive a reminder.
              </p>
            </div>

            <div className="process__img process_img-one progress__img-bottom"></div>

            <div className="process__info">
              <h1 className="process__info-title">
                Your customers get a confirmation that their table will be ready
              </h1>
              <p className="process__info-text">
                If the time and seats are available customers will get a
                confirmation text. These seats will be removed from your
                available seating capacity.
              </p>
            </div>

            <div className="process__img process_img-three progress__img-bottom"></div>
          </article>
        </div>
      </section>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  /* processes */
  .processes {
    background: var(--white);
  }

  .process__img {
    min-height: 20rem;
    margin: 2rem 0;
  }

  .process_img-one {
    background: url("${imageOne}")
      center/cover no-repeat;
  }

  .process_img-two {
    background: url("${imageTwo}")
      center/cover no-repeat;
  }

  .process_img-three {
    background: url("${imageThree}")
      center/cover no-repeat;
  }

  .progress__item {
    margin: 0 2rem;
  }

  .process__info-title {
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: capitalize;
    margin: 0rem 0 0.75rem 0;
  }

  .process__info-text {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    .process {
      margin: 0;
    }
    .process__photo {
      flex: 0 0 33.33%;
      padding: 2rem 4rem;
    }
    .process__info {
      flex: 0 0 calc(33.33% - 2rem);
      padding: 1rem;
    }

    .process__img {
      min-width: 33.33%;
      margin: 0;
    }
    .process__info-title {
      font-size: 2rem;
    }

    .process__info-text {
      width: 90%;
    }

    .progress__img-top {
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 82%, 0 100%, 0 0);
    }

    .progress__img-bottom {
      clip-path: polygon(49% 16%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
    }
  }
`

export default Process
