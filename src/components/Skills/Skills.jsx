import React from "react";
import { MainDiv, DivSkills, DivInProgress, MainDivImages, DivImages, Images, H2Title } from "./Style";

function Skills() {
  return (
    <div>
      <MainDiv>
        <DivSkills>
          <H2Title>Skills</H2Title>
          <MainDivImages>
            <DivImages>
              <Images alt="Nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            </DivImages>
            <DivImages>
              <Images alt="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            </DivImages>
            <DivImages>
              <Images alt="MySql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            </DivImages>
          </MainDivImages>
        </DivSkills>
        <DivInProgress>
          <H2Title>In progress...</H2Title>
          <MainDivImages>
            <DivImages>
              <Images alt="Nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            </DivImages>
            <DivImages>
              <Images alt="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            </DivImages>
            <DivImages>
              <Images alt="MySql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            </DivImages>
          </MainDivImages>
        </DivInProgress>
      </MainDiv>
    </div>
  );
};

export default Skills;