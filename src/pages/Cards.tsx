import "../App.css";
import React, { useCallback, useEffect, useState } from "react";
import api from "../http-common";

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
      setVisited([id])
    } else {
      setVisited((oldVisited: any) => [...oldVisited, id])
    }
  }

  if (!cardData) {
    return <div>Loading</div>;
  }

  for (let i = 0; i < cardData.length; i++) {
    randomNumberArr.push(cardData[i].id);
  }

  const cards = cardData.map((card: any) => {
    // let randomNumber = Math.floor(Math.random() * 100);
    let date = new Date(card.date * 1000);

    return (
      <div onClick={() => visitCard(card.id)} style={{ background: !visited.includes(card.id) ? "#FFF" : "#FFF6A5" }} className="card" key={card.id}>
        <div className="header">
          <div
            style={{ display: loading ? "block" : "none" }}
            className="lds-dual-ring"
          ></div>
          <div
            style={{ display: loading ? "none" : "block" }}
            className="header__wallpaper"
          >
            <img
              src={`https://source.unsplash.com/random?sig=${randomNumberArr[card.id]}`}
              alt="#"
              onLoad={() => setLoading(false)}
            />
          </div>

          <div className="header__logo">
            <div
              style={{ display: loading ? "none" : "flex" }}
              className="charts"
            ></div>
            <div
              style={{ display: loading ? "none" : "flex" }}
              className="like"
            ></div>
          </div>
        </div>
        <div className="content">
          <div className="content__first-block">
            <div className="price">
              <p className="price__old">{card.oldPrice} ₽</p>
              <p className="price__new">{card.price} ₽</p>
            </div>
            <div className="card-logo">
              <div className="card-logo__dostavka"></div>
              <div className="card-logo__sdelka"></div>
            </div>
          </div>

          <p className="content__card-title">{card.title}</p>

          <div className="content__last-part">
            <p className="city">{card.locality.substring(0, 15)}</p>
            <p className="date">
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
            </p>
          </div>
          
          <div style={{ display: !visited.includes(card.id) ? "hidden" : "flex" }} className="visited">Просмотрено</div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h2 className="title">Похожие объявления</h2>
      <div className="cards">{cards}</div>
    </div>
  );
}

export default Cards;
