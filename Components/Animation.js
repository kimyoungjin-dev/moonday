import React from "react";
import { PanResponder, Animated } from "react-native";
import styled from "styled-components/native";

const Box = styled.View`
  position: absolute;
  flex: 1;
  align-items: flex-end;
  padding-top: 20px;
  right: 0;
`;

const styles = {
  borderRadius: 100,
  width: 100,
  height: 100,
};

const Animation = () => {
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
      console.log(dx, dy);
    },

    onPanResponderRelease: (event, { dx, dy }) => {
      if (dx <= -130 && dy >= 200) {
        Animated.timing(position, {
          toValue: {
            x: dx,
            y: dy,
          },
        });
      } else {
        Animated.timing(position, {
          toValue: 1,
          duration: 3000,
        }).start();
      }
    },
  });

  const roationValues = position.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-5deg", "0deg", "5deg"],
    extrapolate: "clamp",
  });

  const Opacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
    extrapolate: "clamp",
  });

  const Scale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [5, 0.8, 5],
    extrapolate: "clamp",
  });

  const Color = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ["yellow", "red"],
  });

  return (
    <Box>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          backgroundColor: Color,
          opacity: Opacity,
          ...styles,
          transform: [
            ...position.getTranslateTransform(),
            { rotate: roationValues },
            { scale: Scale },
          ],
        }}
      ></Animated.View>
    </Box>
  );
};

export default Animation;
