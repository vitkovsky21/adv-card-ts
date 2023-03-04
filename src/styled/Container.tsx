// @ts-ignore
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  margin: 0 auto;
  width: 968px;
  height: 1613px;
  font-family: "Ubuntu";
  position: relative;

  background: #ffffff;
  color: #2c2c2c;

  @media (max-width: 780px) {
    position: relative;
    left: 4rem;
    top: 1rem;
  }
  @media (max-width: 430px) {
    position: relative;
    left: 15rem;
    top: 4rem;
  }
  @media (max-width: 325px) {
    position: relative;
    left: 2rem;
    top: 4rem;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;

  height: 2px;

  position: relative;
  top: 0.8rem;
  left: 2rem;

  @media (max-width: 430px) {
    transform: scale(2);
  }

  @media (max-width: 325px) {
    position: relative;
    left: 30rem;
    transform: scale(3.5);
  }
`;

export const CardsBlock = styled.div`
  width: 100%;
  margin-top: 2.7rem !important;
  display: grid;
  grid-template-columns: repeat(4, 248px);
  grid-auto-rows: 395px;

  @media (max-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 430px) {
    position: relative;
    top: 11rem;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 15rem;
  }

  @media (max-width: 325px) {
    position: relative;
    left: 30rem;
    top: 40rem;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 65rem;
  }
`;

export const Card = styled.div`
  width: 224px;
  height: 368px;

  box-shadow: 0px 0px 20px;
  border: 0px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  cursor: pointer;

  @media (max-width: 430px) {
    transform: scale(1.5);
  }

  @media (max-width: 325px) {
    transform: scale(3.5);
  }
`;
