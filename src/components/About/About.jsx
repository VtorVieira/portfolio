import React from "react";
import {
  AboutContent,
  TextContents,
  ImgContainer,
  Container,
  HeaderContent,
  Content,
} from "./Style";
import img from '../../images/about.png';

function About() {
  return (
    <AboutContent>
      <Container>
        <ImgContainer>
          <img src={img} alt="Foto" />
        </ImgContainer>
        <TextContents>
          <HeaderContent>
            Um eterno estudante em desenvolvimento.
          </HeaderContent>
          <Content>
            Atuei por anos na área de suporte a sistemas. E
            devido a vivência na área decidi me aprofundar em Desenvolvimento Web.
            Almejo novos desafios para minha carreira e espero que através da programação,
            possa fazer a diferença na vida das pessoas.
          </Content>
        </TextContents>
      </Container>
    </AboutContent>
  );
}

export default About;