import styled from "styled-components";

export const MainBody = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85vh;
`

export const TextContents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 3.5em;
  animation: up 1.3s 1;
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
`