import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  align-items: center;
  position: absolute;
  top: ${HEIGHT / 2 - 160}px;
  left: ${WIDTH / 2 - 120}px;
`;
const MoonContainer = styled.TouchableOpacity`
  width: 240px;
  height: 240px;
  border-radius: 120px;
  background-color: white;
`;

const Moon = ({ toggleEditing }) => {
  return (
    <Container>
      <MoonContainer
        onPress={toggleEditing}
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
