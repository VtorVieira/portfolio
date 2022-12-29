import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { TbPokeball } from 'react-icons/tb';
import { Container } from "./Style";
import AppMovies from '../../svg/AppMovies.svg';
import AppRecipies from '../../svg/AppRecipies.svg';
import digitalBank from '../../svg/digitalBank.svg';
import poke from '../../svg/poke.svg';
import TODOLIST from '../../svg/TODOLIST.svg';
import BLOGAPI from '../../svg/BLOGAPI.svg';
import trybeSmith from '../../svg/trybeSmith.svg';
import trivia from '../../svg/trivia.svg';

function Projects() {
  return (
    <Container>
      <div className="row">
        <div className="image">
          <img src={digitalBank} alt="logo" />
          <div className="details">
            <h3>Aplicação FullStack</h3>
            <p>Nodejs, Express, Postgres, Sequelize, React, Api, Axios, Tailwind, HTML.</p>
            <div className="links">
              <a href="https://github.com/VtorVieira/digital-bank" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={poke} alt="logo" />
          <div className="details">
            <h3>Aplicação FullStack</h3>
            <p>Nodejs, Express, Postgres, Sequelize, React, Api, Axios, Tailwind, HTML.</p>
            <div className="links">
              <a href="https://pokedex-eta-sooty.vercel.app" target="_blank" rel="noreferrer"><TbPokeball /></a>
              <a href="https://github.com/VtorVieira/pokedex" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={AppMovies} alt="logo" />
          <div className="details">
            <h3>Aplicação FrontEnd</h3>
            <p>React, Context-Api, Api, Axios, Styled-components, Material-Ui JavaScript, HTML.</p>
            <div className="links">
              <a href="https://appmovies-six.vercel.app/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
              <a href="https://github.com/VtorVieira/AppMovies" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={AppRecipies} alt="logo" />
          <div className="details">
            <h3>Aplicação FrontEnd</h3>
            <p>React, Context-Api, Api, Axios, JavaScript, CSS, HTML.</p>
            <div className="links">
              <a href="https://github.com/VtorVieira/RecipesApp" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={trivia} alt="logo" />
          <div className="details">
            <h3>Aplicação FrontEnd</h3>
            <p>React, Redux, Api, Axios, JavaScript, CSS, HTML.</p>
            <div className="links">
              <a href="https://github.com/VtorVieira/GameTrivia" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={BLOGAPI} alt="logo" />
          <div className="details">
            <h3>Aplicação BackEnd</h3>
            <p>Nodejs, Express, Sequelize, MySql, JWT, Docker.</p>
            <div className="links">
              <a href="https://github.com/VtorVieira/BlogsApi" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={trybeSmith} alt="logo" />
          <div className="details">
            <h3>Aplicação BackEnd</h3>
            <p>Nodejs, TypeScript, Express, Sequelize, MySql, JWT, Docker.</p>
            <div className="links">
              <a href="https://github.com/VtorVieira/TrybeSmith" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={TODOLIST} alt="logo" />
          <div className="details">
            <h3>Aplicação FrontEnd</h3>
            <p>React, JavaScript, Tailwind, HTML.</p>
            <div className="links">
              <a href="https://todo-list-react-flame-tau.vercel.app/" target="_blank" rel="noreferrer"><FiExternalLink /></a>
              <a href="https://github.com/VtorVieira/Todo-List-React" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
