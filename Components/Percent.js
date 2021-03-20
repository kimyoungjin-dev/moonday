import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  color: gray;
  position: absolute;
  top: 100px;
`;

const Percent = ({ percentage = 0 }) => {
  return (
    <Container>
      <Title>The Moon ({percentage}%)</Title>
    </Container>
  );
};

export default Percent;
