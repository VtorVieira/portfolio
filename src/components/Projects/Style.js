import styled from 'styled-components';
import {Link} from "react-router-dom";

export const MainProject = styled.div`
  border: 0 solid #e5e7eb;
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 1rem;
`
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  width: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`