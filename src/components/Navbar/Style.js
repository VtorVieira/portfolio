import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-right: 1.5em;
  margin-top: 0.5em;
  margin-left: 0.50em;
  font-size: 2.2em;

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-around;
    margin-right: 0.5em;
    margin-top: 0.5em;
    margin-left: 0.50em;
    font-size: 1.2em;
  }
`
export const NavLink = styled(Link)`
  padding: 20px;
  @media (max-width: 640px) {
    padding: 20px;
  }
`