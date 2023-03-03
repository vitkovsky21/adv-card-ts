import "../App.css";
import React, { useEffect, useState } from "react";
import api from "../http-common";

import dostavka from "../assets/dostavka-grey.png";
import sdelka from "../assets/sdelka-grey.png";

function Cards() {
  const [cardData, setCardData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setCardData(res.data);
    });
  }, []);

  if (!cardData) {
    return <div>Loading</div>;
  }

  const cards = cardData.map((card: any) => {
    
    let randomNumber = Math.floor(Math.random()*10); 

    return (
      <div className="card" key={card.id}>
        <div className="header">
          <div className="header__wallpaper">
            <img src={`https://source.unsplash.com/random?sig=${randomNumber}`} alt="" />
          </div>
          <div className="header__logo">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="content">
          <div className="content__first-block">
            <div className="price">
              <p className="price__old">0 000 ₽</p>
              <p className="price__new">0 000 ₽</p>
            </div>
            <div className="card-logo">
              <img src={dostavka} alt="#" />
              <img src={sdelka} alt="#" />
            </div>
          </div>
          <p className="content__card-title">Название товарной позиции</p>
          <div className="content__last-part">
            <p className="city">Город</p>
            <p className="date">00.00.00, 00.00</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h2 className="title">Похожие объявления</h2>
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default Cards;
