import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import moment from "moment";

const Top = styled.View`
  width: 100%;
  height: 300px;
`;

const StateContents = styled.View`
  margin-bottom: 30px;
`;

const MoonState = styled.Text`
  color: #a6ffa5;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const MoonPercent = styled.Text`
  opacity: 0.8;
  color: #a6ffa5;
  font-size: 24px;
`;

const CurrentName = styled.Text`
  opacity: 0.4;
  margin-bottom: 5px;
  font-size: 20px;
  color: #a6ffa5;
`;

const CurrentDate = styled.Text`
  color: #a6ffa5;
  font-size: 18px;
`;

const TopContainer = () => {
  const currentData = moment().format("MMM DD, YYYY");

  return (
    <Top>
      <StateContents>
        <MoonState>Full Moon</MoonState>
        <MoonPercent>(100%)</MoonPercent>
      </StateContents>

      <View>
        <CurrentName>Date</CurrentName>
        <CurrentDate>{currentData}</CurrentDate>
      </View>
    </Top>
  );
};

export default TopContainer;
