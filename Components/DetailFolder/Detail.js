import React from "react";
import styled from "styled-components/native";
import BottomContainer from "./BottomContainer";
import TopContainer from "./TopContainer";

const Container = styled.View`
  height: 100%;
  align-items: center;
  padding-left: 30px;
  padding-top: 100px;
  position: absolute;
`;

const DetailContainer = ({ data, time, illumination }) => {
  const fullMoonDate = data.fm.dt;
  const newMoonDate = data.nnm.dt;

  return (
    <Container>
      <TopContainer
        stage={data.stage}
        time={time}
        illumination={illumination}
      />
      <BottomContainer
        fullYear={fullMoonDate.substring(16, 20)}
        fullDate={fullMoonDate.substring(9, 11)}
        fullMonth={fullMoonDate.substring(12, 15)}
        newYear={newMoonDate.substring(15, 19)}
        newMonth={newMoonDate.substring(11, 14)}
        newDate={newMoonDate.substring(8, 10)}
      />
    </Container>
  );
};

export default DetailContainer;
