import React from "react";
import useStyles from "../utils/interest";

import {
  FaRunning,
  FaFutbol,
  laLaptop,
  FaDumbbell,
  FaPlaneDeparture,
} from "react-icons/fa";

export default function Interest() {
  const interest = useStyles();
  return (
    <div className={interest.icon}>
      <div>
        <i aria-hidden className="fas fa-futbol"></i>
        <p>Football</p>
      </div>
      <div>
        <i aria-hidden className="fas fa-running"></i>
        <p>Running</p>
      </div>
      <div>
        <i aria-hidden className="fas fa-laptop"></i>
        <p>Programming</p>
      </div>
      <div>
        <i aria-hidden className="fas fa-plane-departure"></i>
        <p>Traveling</p>
      </div>
    </div>
  );
}
