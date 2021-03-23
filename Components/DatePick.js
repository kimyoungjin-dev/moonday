import React, { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";

const View = styled.View`
  justify-content: center;
`;
const DateTimePickerContainer = styled.TouchableOpacity`
  background-color: white;
  height: 160px;
  justify-content: center;
`;
const Button = styled.TouchableOpacity`
  padding: 16px;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;
const Gradient = styled.View`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0px;
`;

const DatePick = ({ time, setTime }) => {
  const [show, setShow] = useState(false);

  const dateToString = (date) => {
    const newDate = new Date(date);
    return newDate.toString().substring(4, 15);
  };
  const onLongPress = () => {
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
        <DateTimePickerContainer onPress={onPress}>
          <DateTimePicker
            value={time}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        </DateTimePickerContainer>
      )}

      <Gradient>
        <LinearGradient
          colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
          style={{ height: 40, top: 0 }}
        />
      </Gradient>
      <Gradient>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
          style={{ height: 40, top: 120 }}
        />
      </Gradient>

      <Button onPress={onPress} onLongPress={onLongPress}>
        <ButtonText>{dateToString(time)}</ButtonText>
      </Button>
    </View>
  );
};

export default DatePick;
