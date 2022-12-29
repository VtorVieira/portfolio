import styled from "styled-components";

export const MainBody = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85vh;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column-reverse;
    height: 65vh;
  }
`

export const TextContents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 3.5em;
  animation: up 1.3s 1;

  @media (max-width: 640px) {
    margin-top: 10px;
    font-size: 2em;
  }
`

export const ImgProfile = styled.img`
  border-radius: 80em;
  animation: up 1.3s 1;
@keyframes up{
  from{
  transform: translateY(20px);
  opacity: 0;
  }
  to{
  transform: translateY(0);
  opacity: 1;
  }
}

  @media (max-width: 640px) {
    width: 15em;
  }
`

/* skills */

export const MainDivImages = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 100%;
`

export const DivImages = styled.div`
  margin: 0px;
`

export const Images = styled.img`
  width: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    width: 1em;
  }
`