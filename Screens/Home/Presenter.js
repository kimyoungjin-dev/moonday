import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, StatusBar } from "react-native";
import DatePick from "../../Components/DatePick";
import Moon from "../../Components/Moon";
import Percent from "../../Components/Percent";
import Detail from "../../Components/DetailFolder/Detail";
import Animation from "../../Components/Animation";

const Container = styled.TouchableHighlight`
  flex: 1;
  background-color: black;
  justify-content: space-between;
`;

const Presenter = ({
  time,
  setTime,
  data,
  toggleEditing,
  editing,
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
      onPress={() => toggleEditing((prev) => !prev)}
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

          <Percent data={data} />
          {/* <Moon toggleEditing={toggleEditing} data={data} leftMoon={leftMoon} /> */}
          {editing && <Detail data={data} toggleEditing={toggleEditing} />}
          {!editing && <DatePick time={time} setTime={setTime} />}
          <Animation
            toggleEditing={toggleEditing}
            data={data}
            leftMoon={leftMoon}
          />
        </>
      )}
    </Container>
  );
};

export default Presenter;
