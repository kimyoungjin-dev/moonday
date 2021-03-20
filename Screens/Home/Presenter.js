import React from "react";
import styled from "styled-components/native";

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
      <Title>Presenter</Title>
    </Container>
  );
};

export default Presenter;
