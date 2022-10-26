import styled from "styled-components";

export const AboutContent = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85vh;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const TextContents = styled.div`
  font-size: 2.2em;
  animation: up 1.3s 1;
  margin-top: 1.1em;
  margin-left: 2em;
  margin-right: 2em;
  width: 22em;
`

export const HeaderContent = styled.h3`
  font-weight: bold;
  text-align: center;
`

export const Content = styled.p`
  margin-top: 10px;
  text-align: justify;
`

export const ImgContainer = styled.div`
   display: flex;
  justify-content: center;
  animation: up 1.3s 1;
  margin-left: 4em;
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