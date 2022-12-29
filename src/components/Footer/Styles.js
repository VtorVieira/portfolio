import styled from 'styled-components';

export const MainFooter = styled.footer`
  position: fixed;
  color: black;
  padding: 1.5em;
  align-content: center;
  bottom: 0px;
  background-color: darkgrey;
  @media (max-width: 640px) {
    padding: 1em;
  }
`

export const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 99vw;
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
  }
`

export const PName = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`