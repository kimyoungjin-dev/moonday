import React from "react";
import styled from "styled-components/native";
import DatePick from "../../Components/DatePick";
import Moon from "../../Components/Moon";
import Percent from "../../Components/Percent";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;
const Title = styled.Text`
  color: white;
`;

const Presenter = ({ time, setTime }) => {
  return (
    <Container>
      <Percent />
      <Moon />
      <DatePick time={time} setTime={setTime} />
    </Container>
  );
};

export default Presenter;
