import React, { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const View = styled.View`
  justify-content: center;
  z-index: 999;
  align-items: center;
`;
const DateTimePickerContainer = styled.TouchableOpacity`
  width: 100%;
  height: 180px;
  justify-content: center;
  background-color: #ffffff;
`;
const TodayButtonContainer = styled.View`
  width: 100%;
  align-items: flex-end;
`;
const TodayButton = styled.TouchableOpacity`
  padding: 4px 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  margin: 16px;
`;
const TodayButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: white;
  font-weight: 300;
`;
const Button = styled.TouchableOpacity`
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  margin-bottom: 100px;
`;
const ButtonText = styled.Text`
  font-size: 22px;
  text-align: center;
  color: white;
  font-weight: 200;
`;

const DatePick = ({ time, setTime }) => {
  const [show, setShow] = useState(false);

  const dateToString = (date) => {
    const newDate = new Date(date);
    return newDate.toString().substring(4, 15);
  };
  const setToday = () => {
    setTime(new Date());
  };
  const onPress = () => {
    setShow((prev) => !prev);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === "ios");
    setTime(currentDate);
  };

  return (
    <View>
      {show && (
        <>
          <TodayButtonContainer>
            <TodayButton
              onPress={() => {
                setToday();
                onPress();
              }}
            >
              <TodayButtonText>Today</TodayButtonText>
            </TodayButton>
          </TodayButtonContainer>

          <DateTimePickerContainer onPress={onPress}>
            <DateTimePicker
              value={time}
              mode="date"
              is24Hour={true}
              display="spinner"
              onChange={onChange}
            />
          </DateTimePickerContainer>
        </>
      )}

      {!show && (
        <Button onPress={onPress}>
          <ButtonText>{dateToString(time)}</ButtonText>
        </Button>
      )}
    </View>
  );
};

export default DatePick;
