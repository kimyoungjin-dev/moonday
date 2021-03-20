import React from "react";
import styled from "styled-components/native";
import DatePick from "../../Components/DatePick";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Title = styled.Text`
  color: white;
`;

const Presenter = () => {
  return (
    <Container>
      <Moon />
      <DatePick />
    </Container>
  );
};

export default Presenter;
