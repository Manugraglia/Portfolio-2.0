import React from "react";
import useStyle from "../utils/mainstyle";
import Link from "next/link";

export default function Main() {
  const main = useStyle();
  return (
    <>
      <div className={main.content} id="/">
        <div className={main.titlecontent}>
          <div className={main.title}>
            <p className={main.h1}>
              {"<"} <span>h1</span> {">"}
            </p>
            <h1>Manuel</h1>
            <h2>Graglia</h2>
            <p className={main.h1}>
              {"</"} <span>h1</span> {">"}
            </p>
          </div>
          <div className="wrapper">
            <div className="static-txt">I'm a</div>
            <ul className="dynamic-txts">
              <li>
                <span className="dynamic3">Front-end Developer.</span>
              </li>
              <li>
                <span className="dynamic1">Designer.</span>
              </li>
              <li>
                <span className="dynamic2">Freelancer.</span>
              </li>
            </ul>
          </div>
          <Link href="https://github.com/Manugraglia?tab=repositories">
            <a className={main.button} target="_blank">
              Proyects
            </a>
          </Link>
        </div>
        <div className={main.logo}>
          <pre className={main.img}> &#123; &#125; </pre>
        </div>
      </div>
    </>
  );
}
