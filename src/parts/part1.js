import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

const Part1 = () => {
  return (
    <Main>
      <a
        href="https://docs.google.com/presentation/d/1G1pfntMHyLOIBAuEqDBHK6iVaotP2WomTv2Kg9hzcR0/edit?usp=sharing"
        target="_blank"
      >
        Presentation
      </a>
      <a
        href="https://docs.google.com/document/d/1d1anVYKeOINgyLGJZHZS95lo-MnRCUp-CaIF_7vdupo/edit?usp=sharing"
        target="_blank"
      >
        Documentation
      </a>
    </Main>
  );
};

export default Part1;
