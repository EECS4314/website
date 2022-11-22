import { Box } from "@mui/system";
import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  justify-content: center;
  margin-top: 20px;
  font-size: 50px;
`;

const AboutBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 0px;
  border-color: black;
  border-style: solid solid solid solid;
  border-radius: 5px;
  width: 33%;
  margin: 5px;
`;

const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65%;
`;

const group_members = [
  {
    name: "Anika Prova",
    student_id: "216474306",
    email: "anika98@my.yorku.ca",
  },
  {
    name: "Md Safayet Islam",
    student_id: "218486019",
    email: "safayet@my.yorku.ca",
  },
  { name: "Kevin Hua", student_id: "217260399", email: "kevhua36@my.yorku.ca" },
  { name: "Mike Shen", student_id: "216353583", email: "mshen55@my.yorku.ca" },
  {
    name: "Eli Frungorts",
    student_id: "215659501",
    email: "eliefr@my.yorku.ca",
  },
  {
    name: "Param Balaganeshan",
    student_id: "215686694",
    email: "param11@my.yorku.ca",
  },
  { name: "Tuan Dau", student_id: "216390064", email: "Tdau@my.yorku.ca" },
  {
    name: "Alborz Gharabaghi",
    student_id: "216442428",
    email: "alborzgithub@gmail.com",
  },
  {
    name: "Phuong (Matthew) Tran",
    student_id: "215513666",
    email: "tran28@my.yorku.ca",
  },
];

const AboutBar = ({ info }) => {
  return (
    <AboutBarWrapper>
      <Box>Name: {info.name}</Box>
      <Box>Student Id: {info.student_id}</Box>
      <Box>Email: {info.email}</Box>
    </AboutBarWrapper>
  );
};

const AboutUs = () => {
  const MemberGrid = () => {
    var ret = [];
    for (var i = 0; i < group_members.length; i += 3) {
      ret.push(
        <MemberRow>
          {group_members.slice(i, i + 3).map((member) => {
            return <AboutBar key={member.name} info={member} />;
          })}
        </MemberRow>
      );
    }
    return (
      <MemberList>
        {ret.map((val) => {
          return val;
        })}
      </MemberList>
    );
  };
  return (
    <Wrapper>
      <Title>GOOFY GOOBERS 🤪</Title>
      {MemberGrid()}
    </Wrapper>
  );
};

export default AboutUs;
