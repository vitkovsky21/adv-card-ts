// @ts-ignore
import styled from "styled-components";

export const Content = styled.div`
  width: 224px;
  height: 108px;
`;

export const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 50%;
  position: relative;
  top: 1.4rem;
`;

export const Price = styled.div``;

export const OldPrice = styled.div`
  margin-left: 0.9rem;
  position: relative;
  bottom: 1.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration: line-through;

  color: #5a5a5a;
`;
export const NewPrice = styled.div`
  margin-left: 0.7rem;
  position: relative;
  bottom: 1.8rem;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;

  color: #2c2c2c;
`;

export const CardLogo = styled.div`
  position: relative;
  bottom: 2.2rem;
  right: 0.3rem;
  width: 60px;
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  position: relative;
  left: 0.8rem;
  bottom: .2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #2c2c2c;
`;

export const LastPart = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const City = styled.div`
  margin: 0;
  position: relative;
  left: 0.8rem;
  top: .6rem;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;=

  color: #8f8f8f;
`;

export const ProductDate = styled.div`
  margin: 0;
  position: relative;
  right: 0.8rem;
  top: .6rem;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #8f8f8f;
`;

export const VisitMsg = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  position: relative;
  bottom: 21rem;
  left: 4.1rem;

  width: 94px;
  height: 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  text-align: center;

  color: #ffffff;
  background: rgba(44, 44, 44, 0.74);
  border-radius: 8px;
  
  z-index: 4000;
`;
