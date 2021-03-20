import React, { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const View = styled.View`
  justify-content: center;
  background-color: gray;
`;
const Button = styled.Button``;

const DatePick = ({ time, setTime }) => {
  const [show, setShow] = useState(false);

  const dateToString = (date) => {
    const newDate = new Date(date);
    return newDate.toString().substring(4, 15);
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
      <Button onPress={onPress} title={dateToString(time)} color="black" />
      {show && (
        <DateTimePicker
          value={time}
          mode="date"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePick;
