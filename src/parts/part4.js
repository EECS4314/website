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

const Part4 = () => {
    return (
        <Main>
          <a
            href="https://docs.google.com/presentation/d/1cuRtY7NdN3fyEnF9KmpgapRhx9nsix_IBff30EbWDE8/edit?usp=sharing"
            target="_blank"
          >
            Presentation
          </a>
          {/* {<a
            href="https://docs.google.com/document/d/1HQaXx8dyIUwy_VIbocgd7iI1uBicCUGJ8aW7UD9J8hQ/edit?usp=sharing"
            target="_blank"
          >
            Report
          </a>} */}
        </Main>
      );
};

export default Part4;
