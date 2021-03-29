import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, StatusBar } from "react-native";
import DatePick from "../../Components/DatePick";
import Detail from "../../Components/DetailFolder/Detail";
import Moon from "../../Components/Moon";

const Container = styled.TouchableHighlight`
  flex: 1;
  background-color: black;
  justify-content: space-between;
`;

const Image = styled.Image`
  position: absolute;
`;

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
      onPress={() => setEditing((prev) => !prev)}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          <Image source={require("../../assets/starBackground.png")} />
          <StatusBar
            animated={true}
            backgroundColor="black"
            barStyle="light-content"
          />
          <Moon data={data} leftMoon={leftMoon} />
          {editing ? (
            <Detail data={data} />
          ) : (
            <DatePick time={time} setTime={setTime} />
          )}
        </>
      )}
    </Container>
  );
};

export default Presenter;
