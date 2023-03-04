// @ts-ignore
import styled from "styled-components";

import dostavkaGrey from "../assets/dostavka-grey.png";
import dostavkaGreen from "../assets/dostavka-green.png";
import sdelkaGrey from "../assets/sdelka-grey.png";
import sdelkaGreen from "../assets/sdelka-green.png";
import charts from "../assets/charts.png";
import chartsGreen from "../assets/charts-green.png";
import like from "../assets/like.png";
import likeGreen from "../assets/like-green.png";

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 5.2rem;
  left: 5.5rem;
  height: 60px;
`;

export const Dostavka = styled.div`
  background: no-repeat url(${dostavkaGrey});
  width: 24px;
  height: 24px;
  margin: 0 0.2rem;

  &:hover {
    background: no-repeat url(${dostavkaGreen});
  }
`;

export const Sdelka = styled.div`
  background: no-repeat url(${sdelkaGrey});
  width: 24px;
  height: 24px;
  margin: 0 0.2rem;

  &:hover {
    background: no-repeat url(${sdelkaGreen});
  }
`;

export const Charts = styled.div`
  background: no-repeat url(${charts});
  width: 24px;
  height: 24px;
  margin: 0 0.2rem;

  &:hover {
    background: no-repeat url(${chartsGreen});
  }
`;

export const Like = styled.div`
  background: no-repeat url(${like});
  width: 24px;
  height: 24px;
  margin: 0 0.2rem;

  &:hover {
    background: no-repeat url(${likeGreen});
  }
`;
