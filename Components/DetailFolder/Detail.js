import moment from "moment";
import React from "react";
import styled from "styled-components/native";
import BottomContainer from "./BottomContainer";
import TopContainer from "./TopContainer";

const Container = styled.View`
  height: 100%;
  align-items: center;
  padding-left: 30px;
  padding-top: 100px;
  background-color: black;
`;

const Image = styled.Image`
  height: 150%;
  width: 150%;
  position: absolute;
  left: 100;
  top: -160;
`;

const DetailContainer = ({ data }) => {
  const mementData = moment();
  const shortMonth = mementData._locale._monthsShort;
  //full moon
  const fullYear = new Date(data?.fm?.ut * 1000).getFullYear();
  const fullMonth = new Date(data?.fm?.ut * 1000).getMonth();
  const fullMonthText = shortMonth[fullMonth];
  const fullDate = new Date(data?.fm?.ut * 1000).getDate();

  //next moon
  const newYear = new Date(data?.nnm?.ut * 1000).getFullYear();
  const newMonth = new Date(data?.nnm?.ut * 1000).getMonth() + 1;
  const newMonthText = shortMonth[newMonth];
  const newDate = new Date(data?.nnm?.ut * 1000).getDate();

  return (
    <Container>
      <Image
        resizeMode="contain"
        source={require("../../assets/DetailBackground.jpg")}
      />
      <TopContainer />
      <BottomContainer
        fullYear={fullYear}
        fullDate={fullDate}
        fullMonthText={fullMonthText}
        newYear={newYear}
        newMonthText={newMonthText}
        newDate={newDate}
        data={data}
      />
    </Container>
  );
};

export default DetailContainer;
