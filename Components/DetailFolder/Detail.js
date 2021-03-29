import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import BottomContainer from "./BottomContainer";
import TopContainer from "./TopContainer";

const DetailContainer = ({ data, time, illumination }) => {
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(position, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  const fullMoonDate = data.fm.dt;
  const newMoonDate = data.nnm.dt;
  return (
    <Animated.View
      style={{
        opacity: position,
        height: "100%",
        paddingLeft: 30,
        paddingTop: 100,
        paddingBottom: 200,
        position: "absolute",
      }}
    >
      <TopContainer
        stage={data.stage}
        time={time}
        illumination={illumination}
      />
      <BottomContainer
        fullYear={fullMoonDate.substring(16, 20)}
        fullDate={fullMoonDate.substring(9, 11)}
        fullMonth={fullMoonDate.substring(12, 15)}
        newYear={newMoonDate.substring(15, 19)}
        newMonth={newMoonDate.substring(11, 14)}
        newDate={newMoonDate.substring(8, 10)}
      />
    </Animated.View>
  );
};

export default DetailContainer;
