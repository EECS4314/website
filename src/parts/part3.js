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

const Part3 = () => {
  return (
    <Main>
      <a
        href="https://docs.google.com/presentation/d/1rfosUjGpQSAbKU2REbUL2CJqpPr2ebaQbxUhA8y_L9c/edit?usp=sharing"
        target="_blank"
      >
        Presentation
      </a>
      <a
        href="https://docs.google.com/document/d/1HQaXx8dyIUwy_VIbocgd7iI1uBicCUGJ8aW7UD9J8hQ/edit?usp=sharing"
        target="_blank"
      >
        Report
      </a>
    </Main>
  );
};

export default Part3;
