import React from "react";
import {
  MainBody,
  TextContents,
  ImgProfile,
  MainDivImages,
  DivImages,
  Images,
} from "./Style";
import img from '../../images/profile.png';

import node from '../../svg/node.svg';
import express from '../../svg/express.svg';
import css3 from '../../svg/css3.svg';
import html from '../../svg/html.svg';
// import docker from '../../svg/docker.svg';
import mysql from '../../svg/mysql.svg';
import javascript from '../../svg/javascript.svg';
import react from '../../svg/react.svg';
import redux from '../../svg/redux.svg';
import typescript from '../../svg/typescript.svg';

function Home() {
  return (
    <MainBody>
      <TextContents>
        <p>Oi, eu sou</p>
        <p>Vitor Vieira</p>
        <p>Desenvolvedor Full Stack</p>
        <MainDivImages>
          <DivImages>
            <Images alt="Nodejs" src={node} />
          </DivImages>
          <DivImages>
            <Images alt="Express" src={express} />
          </DivImages>
          <DivImages>
            <Images alt="MySql" src={mysql} />
          </DivImages>
          <DivImages>
            <Images alt="React" src={react} />
          </DivImages>
          <DivImages>
            <Images alt="Redux" src={redux} />
          </DivImages>
          <DivImages>
            <Images alt="JavaScript" src={javascript} />
          </DivImages>
          <DivImages>
            <Images alt="TypeScript" src={typescript} />
          </DivImages>
          <DivImages>
            <Images alt="HTML" src={html} />
          </DivImages>
          <DivImages>
            <Images alt="CSS" src={css3} />
          </DivImages>
        </MainDivImages>
      </TextContents>
      <div>
        <ImgProfile src={img} alt="Foto" />
      </div>
    </MainBody>
  );
}

export default Home;
