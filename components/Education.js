import React from "react";
import useStyles from "../utils/education";

export default function Education() {
  const education = useStyles();

  const info = {
    education: [
      {
        id: 1,
        name: "Estanislao Zeballos Ex Tecnica 7",
        information: "Tecnico Quimico completo",
      },
      {
        id: 2,
        name: "Cultural Inglesa",
        information: "First",
      },
      {
        id: 3,
        name: "Cursos de Udemy",
        information:
          "JavaScript Modern, Pagina web moderna con HTML CSS Y JS, Redux con React hooks y GraphQL ",
      },
    ],
  };

  return (
    <>
      {info.education.map((item) => {
        return (
          <div className={education.list} key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.information}</p>
          </div>
        );
      })}
    </>
  );
}
