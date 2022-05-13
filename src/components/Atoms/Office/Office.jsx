import React from "react";
import "./Office.css";

const Office = ({ name, position, imageSrc }) => {
  return (
    <>
      <div className="nameText">{name}</div>
      <div className="positionText">{position}</div>
    </>
  );
};

export default Office;
