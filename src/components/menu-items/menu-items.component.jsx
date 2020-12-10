import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-items.component.scss";

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item`}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP HERE NOW</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
