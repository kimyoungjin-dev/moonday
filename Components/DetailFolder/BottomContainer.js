import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 70%;
  width: 100%;
  justify-content: center;
`;
const Data = styled.View`
  width: 100%;
`;
const Contents = styled.View`
  margin-bottom: 60px;
`;
const Name = styled.Text`
  color: white;
  font-size: 16px;
  opacity: 0.5;
`;
const Value = styled.Text`
  color: white;
  font-size: 16px;
`;
const NewMoonIcon = styled.View`
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
  border-radius: 20px;
  border: 1px solid white;
`;
const FullMoonIcon = styled.View`
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
  border-radius: 20px;
  border: 1px solid white;
  background-color: white;
`;

const BottomContainer = ({
  fullYear,
  fullDate,
  newYear,
  newDate,
  fullMonth,
  newMonth,
}) => {
  return (
    <Container>
      <Data>
        <Contents>
          <NewMoonIcon />
          <Name>New moon</Name>
          <Value>{`${newMonth} ${newDate}, ${newYear}`}</Value>
        </Contents>

        <Contents>
          <FullMoonIcon />
          <Name>Full moon</Name>
          <Value>{`${fullMonth} ${fullDate}, ${fullYear}`}</Value>
        </Contents>
      </Data>
    </Container>
  );
};

export default BottomContainer;
