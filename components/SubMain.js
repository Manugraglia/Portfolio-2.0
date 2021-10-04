import React from "react";
import useStyle from "../utils/subMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";
import { NextWeek } from "@material-ui/icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

export default function SubMain() {
  const subMain = useStyle();
  const conocimiento = {
    card: [
      {
        id: 1,
        clase: "circulo1",
        title: "HTML",
        level: "¡Excelent!",
      },
      {
        id: 2,
        clase: "circulo2",
        title: "Css",
        level: "¡Very Good!",
      },
      {
        id: 3,
        clase: "circulo3",
        title: "JavaScript",
        level: "¡Very Good!",
      },
      {
        id: 4,
        clase: "circulo4",
        title: "React",
        level: "¡Very Good!",
      },
      {
        id: 5,
        clase: "circulo5",
        title: "Redux",
        level: "¡Good!",
      },
    ],
  };
  return (
    <>
      <h3 className="skill">SKILLS</h3>
      <div className="body">
        {conocimiento.card.map((card) => (
          <div className="container" key={card.id}>
            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg className="circ-content">
                    <circle cx="67" cy="67" r="67"></circle>
                    <circle
                      className={card.clase}
                      cx="67"
                      cy="67"
                      r="67"
                    ></circle>
                  </svg>
                  <div className="number">
                    <h2>{card.level}</h2>
                  </div>
                </div>
                <h2 className="text">{card.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
