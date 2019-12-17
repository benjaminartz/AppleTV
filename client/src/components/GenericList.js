// src/components/GenericList.js

import React from "react";
import ListItem from "./ListItem";

const MyList = (props) => {
  // props.name
  // props.list
  // props.actionFunction
  // props.actionText

  if (props.list.length === 0) {
    return <></>
  }

  return (
    <>
      <h1>{props.name}</h1>
      <div>
        {props.list.map(item => (
          <ListItem item={item} actionFunction={props.actionFunction} actionText={props.actionText} />
        ))}
      </div>
    </>
  );
};

export default MyList;
