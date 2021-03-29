import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const Top = styled.View`
  width: 100%;
  height: 300px;
`;
const StateContents = styled.View`
  margin-bottom: 32px;
`;
const MoonState = styled.Text`
  color: white;
  font-size: 32px;
`;
const MoonPercent = styled.Text`
  opacity: 0.5;
  color: white;
  font-size: 18px;
`;
const CurrentName = styled.Text`
  opacity: 0.5;
  font-size: 18px;
  color: white;
`;
const CurrentDate = styled.Text`
  color: white;
  font-size: 20px;
`;

const TopContainer = ({ stage, time, illumination }) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const timeText = (time) =>
    String(time).substring(4, 10) + ", " + String(time).substring(11, 15);

  return (
    <Top>
      <StateContents>
        <MoonState>{capitalize(stage)} Moon</MoonState>
        <MoonPercent>{Math.round(illumination)}%</MoonPercent>
      </StateContents>

      <View>
        <CurrentName>Date</CurrentName>
        <CurrentDate>{timeText(time)}</CurrentDate>
      </View>
    </Top>
  );
};

export default TopContainer;
