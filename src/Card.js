import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card__widget">
      <img src={props.user.avatar_url} alt="Pic" className="profile__pic" />
      <div className="details">
        <h1 className="name">{props.user.login}</h1>
        <div className="details__container">
          <a
            style={{ display: "table-cell" }}
            href={props.user.html_url}
            target="_blank"
          >
            Open GitHub
          </a>
          <br />
          <h3 className="type">This guy is a {props.user.type}</h3>
          <br />
          <h4 className="admin__check">
            {props.user.site_admin ? "Admin" : "Not Admin"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
