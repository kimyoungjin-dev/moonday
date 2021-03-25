import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 60;

const Container = styled.View`
  position: absolute;
  left: ${WIDTH / 2 - 200}px;
  border-radius: ${RADIUS}px;
  overflow: hidden;
`;
const MoonContainer = styled.View`
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
  border-radius: ${RADIUS}px;
  background-color: white;
`;
const ArcShadow = styled.View`
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
  border-radius: ${RADIUS}px;
  position: absolute;
`;
const HalfShadow = styled.View`
  width: ${RADIUS}px;
  height: ${RADIUS * 2}px;
  position: absolute;
`;

const Moon = ({ toggleEditing, data: { illumination }, leftMoon }) => {
  return (
    <Container onPress={toggleEditing}>
      {illumination && (
        <MoonContainer>
          <HalfShadow
            style={{
              backgroundColor: leftMoon ? "transparent" : "black",
              left: 0,
            }}
          />
          <HalfShadow
            style={{
              backgroundColor: leftMoon ? "black" : "transparent",
              left: RADIUS,
            }}
          />
          <ArcShadow
            style={{
              transform: [
                {
                  scaleX:
                    illumination < 50
                      ? Math.abs(
                          1 - illumination / 100 - (0.5 * illumination) / 100
                        )
                      : illumination / 100,
                },
              ],
              backgroundColor: illumination < 50 ? "black" : "white",
            }}
          />
        </MoonContainer>
      )}
    </Container>
  );
};

export default Moon;
