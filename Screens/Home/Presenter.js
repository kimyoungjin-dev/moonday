import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import DatePick from "../../Components/DatePick";
import Moon from "../../Components/Moon";
import Percent from "../../Components/Percent";
import Detail from "../../Components/Detail";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: space-between;
`;
const Title = styled.Text`
  color: white;
`;

const Presenter = ({ time, setTime, data, toggleEditing, editing }) => {
  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle="light-content"
      />
      <Percent data={data} />
      <Moon toggleEditing={toggleEditing} />
      {editing && <Detail />}
      {!editing && <DatePick time={time} setTime={setTime} />}
    </Container>
  );
};

export default Presenter;
