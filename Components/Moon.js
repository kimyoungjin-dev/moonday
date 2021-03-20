import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

const MoonContainer = styled.TouchableOpacity`
  width: 240px;
  height: 240px;
  border-radius: 120px;
  margin: 200px 0 40px;
  background-color: gray;
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
