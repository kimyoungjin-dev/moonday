import React, { useState } from "react";
import { PanResponder, Animated, Dimensions } from "react-native";
import styled from "styled-components/native";
import Moon from "./Moon";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 40px;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-start;
`;
const MoonContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

const Animation = ({ toggleEditing, data, leftMoon }) => {
  const [moonMove, setMoonMove] = useState(true);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (event, { dx, dy }) => {
      const moveToCenter = dx < -60 && dy > 80;
      Animated.timing(position, {
        toValue: {
          x: moveToCenter ? -(WIDTH / 2 - 120) : 0,
          y: moveToCenter ? HEIGHT / 2 - 140 : 0,
        },
        duration: 800,
      }).start(({ finished }) => {
        console.log(finished);
      });
    },
  });
  const Scale = position.x.interpolate({
    inputRange: [-(WIDTH / 2 - 50), 0],
    outputRange: [2, 1],
    extrapolate: "clamp",
  });
  const Color = position.x.interpolate({
    inputRange: [-WIDTH / 2 + 100, 0],
    outputRange: ["rgba(255,255,255,1)", "rgba(255,255,255,1)"],
    extrapolate: "clamp",
  });
  return (
    <Container>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          // backgroundColor: Color,
          transform: [...position.getTranslateTransform(), { scale: Scale }],
        }}
      >
        <MoonContainer>
          <Moon toggleEditing={toggleEditing} data={data} leftMoon={leftMoon} />
        </MoonContainer>
      </Animated.View>
    </Container>
  );
};

export default Animation;
