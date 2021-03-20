import React, { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const View = styled.View`
  justify-content: center;
  background-color: gray;
`;

const Button = styled.Button``;

const DatePick = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const dateToString = (date) => {
    const newDate = new Date(date);
    return newDate.toString().substring(4, 15);
  };

  const onPress = () => {
    setShow((prev) => !prev);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View>
      <Button onPress={onPress} title={dateToString(date)} />
      {show && (
        <DateTimePicker
          value={date}
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
