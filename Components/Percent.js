import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  z-index: 999;
`;
const Title = styled.Text`
  font-size: 20px;
  color: white;
  position: absolute;
  top: 100px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
`;

const Percent = ({ data: { illumination, stage } }) => {
  const firstUppercase = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };

  return (
    <Container>
      <Title>
        {firstUppercase(stage)} Moon ({Math.round(illumination)}%)
      </Title>
    </Container>
  );
};

export default Percent;
