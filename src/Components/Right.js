import React, { useState } from "react";
import styled from "styled-components";

export default function Right({
  setCardNumber,
  setName,
  setExpMonth,
  setExpYear,
  setCvc,
  CardNumber,
  Name,
  ExpMonth,
  ExpYear,
  cvc,
}) {
  const [Submitted, setSubmitted] = useState(false);

  const [CardNumberError, setCardNumberError] = useState();
  const [NameError, setNameError] = useState();
  const [ExpMonthError, setExpMonthError] = useState();
  const [CvcError, setCvcError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    CardNumber.length !== 16 &&
      setCardNumberError("Wrong format, numbers only & 16 Character");
    Name.length < 4 && setNameError("Cannot be less then 4 Character");
    (ExpMonth < 1 || ExpYear < 1) &&
      setExpMonthError("Can't be blank or invalid");
    cvc < 101 && setCvcError("Can't be blank or Invalid");
    CardNumber.length === 16 &&
      Name.length > 3 &&
      ExpMonth > 0 &&
      ExpYear > 0 &&
      cvc > 99 &&
      setSubmitted(true);
  };

  const handleContinue = () => {
    setCardNumber();
    setName();
    setExpMonth();
    setExpYear();
    setCvc();

    setCardNumberError();
    setNameError();
    setExpMonthError();
    setCvcError();

    setSubmitted(false);
  };

  return (
    <Container>
      {!Submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Cardholder name</label>
          <input
            required
            type="text"
            value={Name}
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input_error">{NameError}</div>
          <label htmlFor="">card number</label>
          <input
            required
            type="number"
            value={CardNumber}
            onChange={(e) =>
              e.target.value.length < 17 &&
              e.target.value.length > 0 &&
              setCardNumber(e.target.value)
            }
            placeholder="e.g. 1234 5678 9123 0000"
            inputMode="numeric"
          />
          <div className="input_error">{CardNumberError}</div>
          <div className="form_bottom">
            <div className="form_bottom__left">
              <label htmlFor="">exp. date (mm/yy)</label>
              <div className="form_bottom__left_input">
                <input
                  required
                  type="number"
                  placeholder="MM"
                  value={ExpMonth}
                  inputMode="numeric"
                  onChange={(e) =>
                    e.target.value.length > 0 &&
                    e.target.value.length < 3 &&
                    e.target.value < 13 &&
                    setExpMonth(e.target.value)
                  }
                />
                <input
                  required
                  type="number"
                  placeholder="YY"
                  value={ExpYear}
                  inputMode="numeric"
                  onChange={(e) =>
                    e.target.value.length > 0 &&
                    e.target.value.length < 3 &&
                    setExpYear(e.target.value)
                  }
                />
                <div
                  className="input_error"
                  style={{ gridColumn: "1 /  span 2" }}
                >
                  {ExpMonthError}
                </div>
              </div>
            </div>
            <div className="form_bottom__right">
              <label htmlFor="">cvc</label>
              <input
                required
                type="number"
                placeholder="e.g. 123"
                value={cvc}
                inputMode="numeric"
                onChange={(e) =>
                  e.target.value.length > 0 &&
                  e.target.value.length < 5 &&
                  setCvc(e.target.value)
                }
                maxLength={4}
              />
              <div className="input_error">{CvcError}</div>
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      ) : (
        <div className="submitted">
          <div className="submitted_image">
            <img src="/images/icon-complete.svg" alt="completed icon" />
          </div>
          <h1>Thank you!</h1>
          <p>We’ve added your card details</p>
          <button onClick={() => handleContinue()}>Continue</button>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  & > form {
    width: min(100%, 421px);
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-left: 10%;
    gap: 9px;
    label {
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--black);
      display: block;
    }
    input {
      width: 100%;
      padding: 11px 16px;
      margin-bottom: 1px;
      border: 1px solid var(--light-gray);
      border-radius: 8px;
      font-size: 18px;
      line-height: 100%;
      color: var(--dark);
      text-transform: uppercase;
      outline: none;
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &:focus:invalid {
        border-color: var(--red);
        position: relative;
        &::after {
          content: "Wrong Format";
          color: var(--red);
          position: absolute;
          bottom: -10px;
          left: 0;
        }
      }
      &:hover,
      &:focus {
        border-color: var(--dark);
      }
      &::placeholder {
        color: var(--light-gray);
      }
    }
    .input_error {
      padding-bottom: 27px;
      font-size: 12px;
      color: var(--red);
    }
    .form_bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      &__left {
        display: flex;
        flex-direction: column;
        gap: 9px;
        &_input {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
      }
      &__right {
        display: flex;
        flex-direction: column;
        gap: 9px;
      }
    }
  }
  .submitted {
    width: min(100%, 421px);
    padding-left: 40px;
    margin: auto;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    & > h1 {
      padding-top: 19px;
      font-weight: 500;
      font-size: 28px;
      line-height: 100%;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      color: var(--dark);
    }
    & > p {
      font-size: 18px;
      line-height: 23px;
      color: var(--dark);
    }
  }
  button {
    background: var(--dark);
    color: var(--white);
    border-radius: 8px;
    padding: 15px 25px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    line-height: 100%;
    border: none;
    outline: none;
  }
`;
