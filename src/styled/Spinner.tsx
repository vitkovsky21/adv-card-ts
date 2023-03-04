// @ts-ignore
import styled, { keyframes } from "styled-components";

const animate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5rem;
  left: 4.2rem;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #2c2c2c;
    border-color: #2c2c2c transparent #2c2c2c transparent;
    animation: ${animate} 1.2s linear infinite;
  }
`;
