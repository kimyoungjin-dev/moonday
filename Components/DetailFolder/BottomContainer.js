import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const Data = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 100px;
`;

const Contents = styled.View`
  margin-right: 100px;
`;

const Image = styled.Image`
  height: 50px;
  width: 50px;
  margin-bottom: 5px;
`;

const Name = styled.Text`
  color: #a6ffa5;
  font-size: 18px;
  margin-bottom: 5px;
  opacity: 0.5;
`;

const Value = styled.Text`
  color: #a6ffa5;
  font-size: 20px;
`;

const BottomContainer = ({
  fullYear,
  fullDate,
  newYear,
  newDate,
  data,
  fullMonthText,
  newMonthText,
}) => {
  return (
    <Container>
      <Data>
        <Contents>
          <Image source={require("../../assets/Icon_New moon_32_32.png")} />
          <Name>New moon</Name>
          <Value>{`${newMonthText} ${newDate} , ${newYear}`}</Value>
        </Contents>

        <Contents>
          <Image source={require("../../assets/Icon_Full moon_32_32.png")} />
          <Name>Full moon</Name>
          <Value>{`${fullMonthText} ${fullDate} , ${fullYear}`}</Value>
        </Contents>
      </Data>

      <Data>
        <Contents>
          <Image source={require("../../assets/Icon_Moonrise_32_32.png")} />
          <Name>Moonrise</Name>
          <Value>New moon data</Value>
        </Contents>

        <Contents>
          <Image source={require("../../assets/Icon_Moonset_32_32.png")} />
          <Name>Moonset</Name>
          <Value>Moonset data</Value>
        </Contents>
      </Data>
    </Container>
  );
};

export default BottomContainer;
