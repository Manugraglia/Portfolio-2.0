import React from "react";
import useStyles from "../utils/workstory";

export default function Workstory() {
  const workstory = useStyles();

  const info = {
    education: [
      {
        id: 1,
        name: "Argentum Viajes 2016/2017",
        information: "Travel cordination",
      },
      {
        id: 2,
        name: "Arcos Dorados 2017/2017",
        information: "Diferent Task",
      },
      {
        id: 3,
        name: "Holiday Inn Express 2018/2020",
        information: "Porter",
      },
    ],
  };

  return (
    <>
      {info.education.map((item) => {
        return (
          <div className={workstory.work} key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.information}</p>
          </div>
        );
      })}
    </>
  );
}
