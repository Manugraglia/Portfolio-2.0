import React from "react";
import useStyles from "../utils/card";
import Education from "./Education";
import Interest from "./Interest";
import Workstory from "./Workstory";

export default function Card() {
  const about = {
    card: [
      {
        id: 1,
        clase: "circulo1",
        title: "Education",
        level: "¡Excelent!",
        componente: <Education />,
      },
      {
        id: 2,
        clase: "circulo2",
        title: "Work Story",
        level: "¡Very Good!",
        componente: <Workstory />,
      },
      {
        id: 3,
        clase: "circulo3",
        title: "Interest",
        level: "¡Very Good!",
        componente: <Interest />,
      },
    ],
  };
  const tarjeta = useStyles();
  return (
    <div className={tarjeta.conteiner}>
      {about.card.map((card) => (
        <div className={tarjeta.content} key={card.id}>
          <h3>{card.title}</h3>
          <div>{card.componente}</div>
          <div className={tarjeta.line}> </div>
        </div>
      ))}
    </div>
  );
}
