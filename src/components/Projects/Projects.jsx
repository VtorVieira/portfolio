import React from "react";
import { MainProject, NavLink } from "./Style";
import trivia from '../../images/trivia.png';
import appRecipes from '../../images/appRecipes.png';

function Projects() {
  return (
    <MainProject>
      <NavLink>
        <img src={appRecipes} alt="AppRecipes" />
      </NavLink>
      <NavLink>
        <img src={trivia} alt="TriviaGame" />
      </NavLink>
      <NavLink>
        <img src="https://github.com/VtorVieira/BlogsApi" alt="BlogsApi" />
      </NavLink>
      <NavLink>
        <img src="https://github.com/VtorVieira/TrybeSmith" alt="TrybeSmith" />
      </NavLink>
    </MainProject>
  );
}

export default Projects;

// https://github.com/VtorVieira/GameTrivia