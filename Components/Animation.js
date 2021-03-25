import React from "react";
import { PanResponder, Animated, Dimensions } from "react-native";
import styled from "styled-components/native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const MoonBox = styled.View`
  width: 100%;
  height: ${HEIGHT - 200}px;
  margin-top: 20px;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-start;
`;
const styles = {
  borderRadius: 60,
  width: 120,
  height: 120,
};

const Animation = () => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (event, { dx, dy }) => {
      console.log(dx, dy);
      const moveToCenter = dx < -60 && dy > 80;
      Animated.timing(position, {
        toValue: {
          x: moveToCenter ? -(WIDTH / 2 - 60) : 0,
          y: moveToCenter ? HEIGHT / 2 - 120 : 0,
        },
        duration: 500,
      }).start();
    },
  });
  const Scale = position.x.interpolate({
    inputRange: [-(WIDTH / 2 - 50), 0],
    outputRange: [2, 0.5],
    extrapolate: "clamp",
  });
  const Color = position.x.interpolate({
    inputRange: [-WIDTH / 2 + 100, 0],
    outputRange: ["rgba(255,255,255,1)", "rgba(255,255,255,1)"],
    extrapolate: "clamp",
  });
  return (
    <MoonBox>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          backgroundColor: Color,
          ...styles,
          transform: [...position.getTranslateTransform(), { scale: Scale }],
        }}
      ></Animated.View>
    </MoonBox>
  );
};

export default Animation;
