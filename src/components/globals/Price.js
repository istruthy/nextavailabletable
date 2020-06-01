import React from "react"
import styled from "styled-components"
import prices from "../../constants/prices"
import { FaRegCheckCircle } from "react-icons/fa"

function Price() {
  return (
    <SectionWrapper>
      <section className="prices section-padding" id="prices">
        <div className="flexbox-parent flexbox-parent--medium">
          {prices.map(price => {
            return (
              <article className="pricing-card">
                <h3 className="pricing-card__title">
                  ${price.price}/<span>{price.price_description}</span>
                </h3>
                <p className="pricing-card__info">{price.description}</p>
                <ul className="pricing-card__list">
                  {price.info.map(item => {
                    return (
                      <li className="pricing-card__item">
                        <span className="pricing-card__icon">
                          <FaRegCheckCircle className="pricingCardIcon" />
                        </span>
                        <p className="pricing-card__text">{item}</p>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </section>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  /* prices */

  .prices {
    background: var(--white);
  }

  .pricing-card {
    color: var(--black);
    text-align: center;
    padding: 2rem 0;
    margin: 0 2rem 2rem 2rem;
    border-radius: 2.5rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    flex: 0 0 30%;
  }

  .pricing-card__list {
    list-style-type: none;
  }

  .pricing-card__icon .lnr {
    display: inline-block;
    color: var(--black);
    font-size: 1rem;
    vertical-align: -0.05em;
  }

  .pricing-card__item {
    display: flex;
    padding: 0rem 2rem;
    justify-content: left;
    margin: 0rem 0 0.25rem 0;
    font-size: 1rem;
    align-items: baseline;
    font-weight: 200;
  }

  .pricing-card__title {
    color: var(--black);
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .pricing-card__title span {
    font-size: 1rem;
  }

  .pricing-card__text {
    margin: 0.25rem 0;
    font-size: 1rem;
    text-align: left;
    font-weight: 300;
  }

  .pricing-card__info {
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
    margin: 1.5rem;
    line-height: 1.5;
  }

  .pricing-card__icon {
    margin-right: 0.75rem;
  }

  .pricing-card__text {
    text-transform: capitalize;
  }

  .pricing-card__link:hover {
    color: var(--black);
    background: var(--blue);
    border-color: var(--blue);
  }

  .pricing-card--custom {
    background: var(--white);
    color: var(--black);
    border-radius: 2.5rem;
    transition: all 1s linear;
  }

  .pricing-card--custom:hover {
    transform: translateY(-1.5rem);
  }
  .pricing-card--custom__link {
    color: var(--blue);
    border: 0.1rem solid var(--blue);
  }
  .pricing-card--custom__link:hover {
    color: var(--white);
  }

  @media (min-width: 768px) {
    .pricing-card {
      margin: 0;
      flex: 0 0 calc(33.3% - 3rem);
    }
  }

  @media (min-width: 800px) {
    .pricing-card {
      flex: 0 0 calc(33.3% - 1rem);
    }
  }
`

export default Price
