import React from "react";
import useStyle from "../utils/skill";

export default function Skill() {
  const skill = useStyle();
  return (
    <>
      <div className={skill.container}>
        <div className={skill.principal}>
          <h2 id="aboutme">About me</h2>
          <div className={skill.imgen}>
            <img src="fot1.png" />
            <div>
              <h3>Manuel Graglia</h3>
              <p>
                Since i decided to start my journey as Front-end Developer, i
                have been studiying diferent kind of lenguages. Starting with
                HTML,Css and JavaScript, and i keep continuos with
                React,Next.js,Redux, i learnt diferent librarys too. I was
                learning for 1 year and half, and i know i had a lot of things
                to learn yet. I made some proyects using diferent kind of
                lenguage you can see them pressing on " Proyects ".
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
