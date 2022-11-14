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

const Part2 = () => {
  return (
    <Main>
      <a
        href="https://docs.google.com/presentation/d/1-pnpSfWn7Rr0_CLCYe9Wn-oHuzC4P_u2CQit7NLtB7Q/edit?usp=sharing"
        target="_blank"
      >
        Presentation
      </a>
      <a
        href="https://docs.google.com/document/d/1yQJE1k7ec_eUBzW4omG-QLRsLBlwUrBUfOzOhhzTnIY/edit?usp=sharing"
        target="_blank"
      >
        Report
      </a>
    </Main>
  );
};

export default Part2;
