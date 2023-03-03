import "../App.css";
import React, { useEffect, useState } from "react";
import api from "../http-common";

import dostavka from "../assets/dostavka-grey.png";
import sdelka from "../assets/sdelka-grey.png";

function Cards() {
  const [cardData, setCardData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products").then((res) => {
      setCardData(res.data);
    });
  }, []);

  if (!cardData) {
    return <div>Loading</div>;
  }

  const cards = cardData.map((card: any) => {
    let randomNumber = Math.floor(Math.random() * 100);
    let date = new Date(card.date * 1000);

    return (
      <div className="card" key={card.id}>
        <div className="header">
          <div
            style={{ display: loading ? "block" : "none" }}
            className="lds-dual-ring"
          >
          </div>
          <div
            style={{ display: loading ? "none" : "block" }}
            className="header__wallpaper"
          >
            <img
              src={`https://source.unsplash.com/random?sig=${randomNumber}`}
              alt="#"
              onLoad={() => setLoading(false)}
            />
          </div>

          <div className="header__logo">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="content">
          <div className="content__first-block">
            <div className="price">
              <p className="price__old">{card.oldPrice}</p>
              <p className="price__new">{card.price}</p>
            </div>
            <div className="card-logo">
              <img src={dostavka} alt="#" />
              <img src={sdelka} alt="#" />
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
