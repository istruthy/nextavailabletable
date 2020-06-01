import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({
    email: "",
    name: "",
    zipcode: "",
  })

  const handleChange = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log("here in handleSumit")
    try {
      await axios.post("/.netlify/functions/create-contact", values)
      setValues({
        email: "",
        name: "",
        zipcode: "",
      })
      setSubmitted(true)
    } catch (e) {
      console.log("error ", e)
    }
  }

  return (
    <SectionWrapper>
      <section className="contact section-padding" id="contact">
        <div className="flexbox-parent flexbox-parent--medium">
          <article className="contact__item  item-margin ">
            {!submitted && (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__title">notify me</div>
                <input
                  required
                  type="email"
                  name="email"
                  id=""
                  className="contact__input"
                  autocomplete="off"
                  placeholder="email address"
                  onChange={handleChange}
                  value={values.email}
                />
                <input
                  required
                  type="name"
                  name="name"
                  id=""
                  className="contact__input"
                  autocomplete="off"
                  placeholder="store name"
                  onChange={handleChange}
                  value={values.name}
                />
                <input
                  required
                  type="zipcode"
                  name="zipcode"
                  id=""
                  className="contact__input"
                  autocomplete="off"
                  placeholder="zipcode"
                  onChange={handleChange}
                  value={values.zipcode}
                />
                <button type="submit" className="contact__submit">
                  submit
                </button>
              </form>
            )}
            {submitted && (
              <div className="thankYou">
                <div className="thankYou__item">
                  <h3 className="thankYou__title">Thank you</h3>
                  <p className="thankYou__text"></p>
                  <div className="thankYou__social"></div>
                </div>
              </div>
            )}
          </article>

          <article className="contact__item item-margin">
            <div className="contact__title-right">we’re launching soon</div>
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

  .thankYou {
    display: flex;
    justify-items: stretch;
    border-radius: 1.25rem;
    background: var(--white);
    padding: 3rem;
    height: 100%;
    justify-content: center;
  }
  .thankYou__title {
    color: var(--black);
    font-size: 2rem;
    line-height: 1.5;
    text-align: center;
  }

  .thankYou__text {
    color: var(--black);
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
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
    font-size: 1.3rem;
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
    font-size: 2.3rem;
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
    background: var(--white);
    color: var(--black);
  }

  .contact__title-right {
    width: 100%;
    font-weight: 400;
    line-height: 0.8;
  }

  .contact__subtext-right {
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
      font-size: 3rem;
    }
    .contact__subtext-right {
      font-size: 1.3rem;
      line-height: 1.5;
      width: 69%;
      color: var(--white);
    }

    .contact__subtext-right span {
      color: var(--grey);
      font-size: 1.8rem;
    }

    .thankYou__title {
      font-size: 3rem;
    }

    .thankYou {
      border-radius: 2.25rem;
    }
  }
`

export default Contact
