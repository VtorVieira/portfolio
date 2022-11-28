import React from "react";
import { MainProject } from "./Style";
import AppMovies from '../../svg/AppMovies.svg';
import AppRecipies from '../../svg/AppRecipies.svg';
import CashTransfer from '../../svg/CashTransfer.svg';
import TODOLIST from '../../svg/TODOLIST.svg';
import BLOGAPI from '../../svg/BLOGAPI.svg';
import trybeSmith from '../../svg/trybeSmith.svg';
import trivia from '../../svg/trivia.svg';

function Projects() {
  return (
    <MainProject>
      <a className="redirect" href="https://github.com/VtorVieira/transfer-cash" target="_blank" rel="noreferrer">
        <img className="logo" src={CashTransfer} alt="Cash Transfer" />
      </a>
      <a className="redirect" href="https://github.com/VtorVieira/AppMovies" target="_blank" rel="noreferrer">
        <img className="logo" src={AppMovies} alt="App Movies" />
      </a>
      <a className="redirect" href="https://github.com/VtorVieira/RecipesApp" target="_blank" rel="noreferrer">
        <img className="logo" src={AppRecipies} alt="App Recipes" />
      </a>
      <a className="redirect" href="https://github.com/VtorVieira/GameTrivia" target="_blank" rel="noreferrer">
        <img className="logo" src={trivia} alt="Trivia Game" />
      </a>
      <a className="redirect" href="https://github.com/VtorVieira/BlogsApi" target="_blank" rel="noreferrer">
        <img className="logo" src={BLOGAPI} alt="Blogs Api" />
      </a>
      <a className="redirect" href="https://github.com/VtorVieira/TrybeSmith" target="_blank" rel="noreferrer">
        <img className="logo" src={trybeSmith} alt="Trybe Smith" />
      </a>
      <a className="redirect" href="https://github.com/VtorVieira/Todo-List-React" target="_blank" rel="noreferrer">
        <img className="logo" src={TODOLIST} alt="Todo List" />
      </a>
    </MainProject>
  );
}

export default Projects;

// https://github.com/VtorVieira/GameTrivia