// src/components/ListItem.js

import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  // props.item
  // props.actionFunction
  // props.actionText

  return (
    <div class="list-item">
      <img class="image" src={props.item.img} alt={props.item.title}></img>
      <div class="title">{props.item.title}</div>
      <button class="actionButton" onClick={() => props.actionFunction(props.item)}>{props.actionText}</button>
    </div>
  );
};

export default ListItem;
