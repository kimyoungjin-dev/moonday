import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;
const MoonContainer = styled.View`
  width: 240px;
  height: 240px;
  border-radius: 120px;
  margin: 200px 0 40px;
  background-color: gray;
`;

const Moon = () => {
  return (
    <Container>
      <MoonContainer
        style={{
          shadowColor: "white",
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        }}
      />
    </Container>
  );
};

export default Moon;
