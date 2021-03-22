import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import DatePick from "../../Components/DatePick";
import Moon from "../../Components/Moon";
import Percent from "../../Components/Percent";
import Detail from "../../Components/DetailFolder/Detail";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: space-between;
`;
const Title = styled.Text`
  color: white;
`;

const Presenter = ({
  time,
  setTime,
  data,
  toggleEditing,
  editing,
  leftMoon,
}) => {
  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle="light-content"
      />
      <Percent data={data} />
      <Moon toggleEditing={toggleEditing} data={data} leftMoon={leftMoon} />
      {editing && <Detail data={data} toggleEditing={toggleEditing} />}
      {!editing && <DatePick time={time} setTime={setTime} />}
    </Container>
  );
};

export default Presenter;
