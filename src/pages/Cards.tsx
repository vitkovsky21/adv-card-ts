import "../App.css";
import React, { useEffect, useState } from "react";
import api from "../http-common";

import { Charts, Dostavka, HeaderLogo, Like, Sdelka } from "../styled/Logo";
import { Header, Wallpaper } from "../styled/Header";
import { Spinner } from "../styled/Spinner";
import {
  CardLogo,
  CardTitle,
  City,
  Content,
  FirstBlock,
  LastPart,
  NewPrice,
  OldPrice,
  Price,
  ProductDate,
  VisitMsg,
} from "../styled/Content";
import { Card, CardsBlock, Container, Title } from "../styled/Container";

let randomNumberArr: any[] = [];

function Cards() {
  const [cardData, setCardData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visited, setVisited] = useState<any>([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setCardData(res.data);
    });
  }, []);

  function visitCard(id: number) {
    if (!visited) {
      setVisited([id]);
    } else {
      setVisited((oldVisited: any) => [...oldVisited, id]);
    }
  }

  if (!cardData) {
    return <div>Loading</div>;
  }

  for (let i = 0; i < cardData.length; i++) {
    randomNumberArr.push(cardData[i].id);
  }

  const cards = cardData.map((card: any) => {
    let date = new Date(card.date * 1000);

    return (
      <Card
        onClick={() => visitCard(card.id)}
        style={{ background: !visited.includes(card.id) ? "#FFF" : "#FFF6A5" }}
        key={card.id}
      >
        <Header>
          <Spinner style={{ display: loading ? "block" : "none" }}></Spinner>
          <Wallpaper style={{ display: loading ? "none" : "block" }}>
            <img
              src={`https://source.unsplash.com/random?sig=${
                randomNumberArr[card.id]
              }`}
              alt="#"
              onLoad={() => setLoading(false)}
            />
          </Wallpaper>

          <HeaderLogo>
            <Charts style={{ display: loading ? "none" : "flex" }}></Charts>
            <Like style={{ display: loading ? "none" : "flex" }}></Like>
          </HeaderLogo>
        </Header>
        <Content>
          <FirstBlock>
            <Price>
              <OldPrice>{card.oldPrice} ₽</OldPrice>
              <NewPrice>{card.price} ₽</NewPrice>
            </Price>
            <CardLogo>
              <Dostavka></Dostavka>
              <Sdelka></Sdelka>
            </CardLogo>
          </FirstBlock>

          <CardTitle>{card.title}</CardTitle>

          <LastPart>
            <City>{card.locality.substring(0, 15)}</City>
            <ProductDate>
              {date.toLocaleDateString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
              ,{" "}
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </ProductDate>
          </LastPart>

          <VisitMsg
            style={{ display: !visited.includes(card.id) ? "hidden" : "flex" }}
          >
            Просмотрено
          </VisitMsg>
        </Content>
      </Card>
    );
  });

  return (
    <Container>
      <Title>Похожие объявления</Title>
      <CardsBlock>{cards}</CardsBlock>
    </Container>
  );
}

export default Cards;
