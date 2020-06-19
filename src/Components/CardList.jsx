import React from "react";
import Card from "./Card";

const CardList = props => (
  <>
    {props.profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}
  </>
);

export default CardList;
