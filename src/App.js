import React from "react";
import styled from "styled-components";

import NavButton from "./shared/button";
import { useNavigate } from "react-router";

import Routes from "./router";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 0px;
  margin: 0px;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 0px;
  margin: 0px;
`;

const App = () => {
  const navigate = useNavigate();
  return (
      <Main>
        <NavBar>
          <NavButton
            key={"/about_us"}
            onClick={() => {
              navigate("/about_us");
            }}
          >
            About Us
          </NavButton>
          <NavButton
            key={"/part_1"}
            onClick={() => {
              navigate("/part_1");
            }}
          >
            Assignment 1
          </NavButton>
          <NavButton
            key={"/part_2"}
            onClick={() => {
              navigate("/part_2");
            }}
          >
            Assignment 2
          </NavButton>
          <NavButton
            key={"/part_3"}
            onClick={() => {
              navigate("/part_3");
            }}
          >
            Assignment 3
          </NavButton>
          <NavButton
            key={"/part_4"}
            onClick={() => {
              navigate("/part_4");
            }}
          >
            Assignment 4
          </NavButton>
        </NavBar>
        <Routes></Routes>
      </Main>
  );
};

export default App;
