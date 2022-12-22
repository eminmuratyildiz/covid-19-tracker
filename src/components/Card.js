import React from "react";

function Card(props) {
  return (
    <div
      style={{ backgroundColor: props.bgColor, borderBottom: props.border }}
      className="w-1/5 h-[350px] rounded py-8 px-5 border-b-8"
    >
      <h4>{props.title}</h4>
      <h3 className="font-semibold text-2xl">{props.value}</h3>
      <p>Last Updated At:</p>
      <p>Fri Sep 17 2021 6:21:26 PM</p>
      <p>Number of active cases of COVID-19</p>
      <p>US</p>
    </div>
  );
}

export default Card;
