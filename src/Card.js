import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="Card__widget">
      <img
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt=""
        className="profile__pic"
      />
      <div className="details">
        <h1 className="name">Mostapha M Amin</h1>
        <div className="details__container">
          <a
            style={{ display: "table-cell" }}
            href="https://github.com/mojombo"
            target="_blank"
          >
            Go to GitHub
          </a>
          <br />
          <h3 className="type">This guy is a User</h3>
          <br />
          <h4 className="admin__check">This guy is not admin</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
