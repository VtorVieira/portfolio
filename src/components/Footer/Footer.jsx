import React from "react";
import Contacts from "../Contacts/Contacts";
import { MainFooter, NameDiv, PName } from "./Styles";

function Footer() {
  return (
    <MainFooter>
      <NameDiv>
        <PName>
          Vitor Vieira
        </PName>
        <div>
          <Contacts />
        </div>
      </NameDiv>
    </MainFooter>
  );
}

export default Footer;