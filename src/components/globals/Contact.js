import React from "react"
import styled from "styled-components"

function Contact() {
  return (
    <SectionWrapper>
      <section className="contact section-padding" id="contact">
        <div className="flexbox-parent flexbox-parent--medium">
          <article className="contact__item  item-margin ">
            <form className="contact__form">
              <div className="contact__title">notify me</div>
              <input
                type="email"
                name=""
                id=""
                className="contact__input"
                autocomplete="off"
                placeholder="email address"
              />
              <input
                type="name"
                name=""
                id=""
                className="contact__input"
                autocomplete="off"
                placeholder="store name"
              />
              <input
                type="zipcode"
                name=""
                id=""
                className="contact__input"
                autocomplete="off"
                placeholder="zipcode"
              />
              <button type="submit" className="contact__submit">
                submit
              </button>
            </form>
          </article>

          <article className="contact__item item-margin">
            <div className="contact__title-right">We’re launching soon</div>
            <div className="contact__subtext-right">
              Sign-up to get notified when <span>nextavailabletable</span> is
              ready to launch
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  /* contact */

  .contact {
    background: var(--blue);
  }

  .contact__item {
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(50% - 2.9rem);
  }

  .contact__input {
    background: transparent;
    border: none;
    border-bottom: 0.05rem solid var(--white);
    font-size: 2rem;
    padding: 0.25rem 0;
    color: var(--grey);
    outline: none;

    margin: 0.75rem 0;
  }
  .contact__input::placeholder {
    color: var(--grey);
    font-weight: normal;
    text-transform: lowercase;
  }

  .contact__title,
  .contact__title-right {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: var(--white);
  }
  .contact__form {
    display: flex;
    flex-direction: column;
  }

  .contact__submit {
    cursor: pointer;
    display: inline-block;
    font-size: 2rem;
    font-weight: normal !important;
    margin: 1.5rem 0rem 0.5rem 0rem;
    text-transform: capitalize;
    padding: 0.25rem 1rem;
    background: transparent;
    color: var(--white);
    border-color: var(--white);
    transition: all 0.5s linear;
    width: 100%;
    border: 1px solid var(--white);
  }

  .contact__submit:hover {
    background: var(--yellow);
    color: var(--black);
  }

  .contact__title-right {
    width: 100%;
    font-weight: 400;
    line-height: 0.8;
  }

  .contact__subtext-right {
    /* font-weight: 200;
  line-height: 0.8;
  font-size: 1rem;
  color: var(--white);
  line-height: 1.5; */
    width: 100%;
  }

  .contact__subtext-right span {
    font-weight: 800;
    line-height: 0.8;
    font-size: 1rem;
    color: var(--white);
  }

  @media (min-width: 768px) {
    .contact__title-right {
      width: 69%;
      font-size: 4rem;
    }
    .contact__subtext-right {
      font-size: 2rem;
      width: 69%;
      color: var(--white);
    }

    .contact__subtext-right span {
      color: var(--grey);
      font-size: 2rem;
    }
  }
`

export default Contact