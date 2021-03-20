import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

const MoonContainer = styled.View`
  width: 240px;
  height: 240px;
  border-radius: 120px;
  margin: 120px;
  background-color: gray;
`;

const Moon = () => {
  return (
    <Container>
      <MoonContainer />
    </Container>
  );
};

export default Moon;
