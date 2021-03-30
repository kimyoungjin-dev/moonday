import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import {
  ActivityIndicator,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
import DatePick from "../../Components/DatePick";
import Detail from "../../Components/DetailFolder/Detail";
import Moon from "../../Components/Moon";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.TouchableHighlight`
  flex: 1;
  background-color: black;
  justify-content: space-between;
`;
const Image = styled.Image`
  position: absolute;
  opacity: 0.7;
`;
const View = styled.View`
  height: 100%;
  justify-content: space-between;
`;

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const Presenter = ({
  time,
  setTime,
  data,
  editing,
  setEditing,
  leftMoon,
  loading,
}) => {
  return (
    <Container
      style={{
        backgroundColor: "black",
        flex: loading ? 1 : 1,
        justifyContent: loading ? "center" : "space-between",
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          <StatusBar
            animated={true}
            backgroundColor="black"
            barStyle="light-content"
          />
          <Image source={require("../../assets/starBackground.png")} />
          <FadeInView
            style={{
              width: WIDTH,
              height: HEIGHT,
            }}
          >
            <View>
              <Moon data={data} leftMoon={leftMoon} setEditing={setEditing} />

              {editing ? (
                <Detail
                  data={data}
                  time={time}
                  illumination={data.illumination}
                />
              ) : (
                <DatePick time={time} setTime={setTime} />
              )}
            </View>
          </FadeInView>
        </>
      )}
    </Container>
  );
};

export default Presenter;
