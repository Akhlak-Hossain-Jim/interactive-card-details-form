import React from "react";
import styled from "styled-components";

export default function Left({
  CardNumber = "0000000000000000",
  Name = "Jane Appleseed",
  ExpMonth = "00",
  ExpYear = "00",
  cvc = "000",
}) {
  return (
    <Container>
      <div className="card_front">
        <img src="/images/card-front.png" alt="card front" />
        <div className="card_front__data">
          <div className="card_front__data_number">
            {CardNumber === undefined ||
            CardNumber === null ||
            CardNumber === "" ||
            CardNumber.length < 0
              ? "0000 0000 0000 0000"
              : CardNumber.substring(0, 16)
                  .match(/.{1,4}/g)
                  .join(" ")}
          </div>
          <div className="card_front__data_bottom">
            <div className="card_front__data_bottom__name">
              {Name === undefined ||
              Name === null ||
              Name === "" ||
              Name.length < 0
                ? "Jane Appleseed"
                : Name}
            </div>
            <div className="card_front__data_bottom__exp">
              {ExpMonth === undefined ||
              ExpMonth === null ||
              ExpMonth === "" ||
              ExpMonth.length < 0
                ? "00"
                : ExpMonth}
              /
              {ExpYear === undefined ||
              ExpYear === null ||
              ExpYear === "" ||
              ExpYear.length < 0
                ? "00"
                : ExpYear}
            </div>
          </div>
        </div>
      </div>
      <div className="card_back">
        <img src="/images/bg-card-back.png" alt="card back" />
        <div className="card_back__cvc">
          {cvc === undefined || cvc === null || cvc === "" || cvc.length < 0
            ? "000"
            : cvc}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-image: url("/images/bg-main-desktop.png");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 27px;
  position: relative;
  color: var(--white);
  @media (max-width: 600px) {
    height: 400px;
  }
  .card {
    &_front {
      width: min(447px, 100%);
      aspect-ratio: 447/245;
      margin-left: auto;
      margin-right: 108px;
      position: relative;
      @media (max-width: 900px) {
        width: min(447px, 90%);
        transform: translate(10%);
      }
      @media (max-width: 600px) {
        width: min(447px, 85%);
        transform: translate(10%) translateY(18%);
        z-index: 2;
      }
      & > img {
        width: 100%;
        height: auto;
        object-position: center;
      }
      &__data {
        position: absolute;
        width: 100%;
        bottom: 14%;
        left: 0%;
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        gap: 26px;
        &_number {
          font-size: 28px;
          line-height: 36px;
          letter-spacing: 0.12em;
          @media (max-width: 900px) {
            font-size: 130%;
          }
        }
        &_bottom {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          @media (max-width: 600px) {
            font-size: 90%;
          }
        }
      }
    }
    &_back {
      width: min(447px, 100%);
      aspect-ratio: 447/245;
      margin-left: auto;
      margin-right: 14px;
      position: relative;
      @media (max-width: 900px) {
        width: min(447px, 90%);
        transform: translateX(20%) translateY(-10%);
      }
      @media (max-width: 900px) {
        width: min(447px, 85%);
        position: absolute;
        top: 10%;
        z-index: 1;
        transform: translateX(2%) translateY(-10%);
      }
      & > img {
        width: 100%;
        height: auto;
        object-position: center;
      }
      &__cvc {
        position: absolute;
        top: 45%;
        right: 13%;
        font-size: 14px;
        line-height: 18px;
        text-align: right;
        letter-spacing: 0.14em;
      }
    }
  }
  @media (max-width: 600px) {
    background-image: url("/images/bg-main-mobile.png");
  }
`;
