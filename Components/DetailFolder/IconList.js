import React from "react";
import styled from "styled-components/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const DataList = styled.View`
  flex-direction: row;
  align-items: center;
  width: 140px;
`;
const DataContents = styled.View`
  align-items: center;
`;
const DataName = styled.Text`
  color: white;
  opacity: 0.6;
  font-size: 16px;
  margin-bottom: 5px;
`;
const DataValue = styled.Text`
  color: white;
  font-size: 14px;
`;

const IconList = ({ text, name, value, fontAwesome }) => {
  return (
    <DataList>
      {fontAwesome ? (
        <FontAwesome
          name={name}
          size={25}
          color="white"
          style={{ marginRight: 10 }}
        />
      ) : (
        <Ionicons
          name={name}
          size={25}
          color="white"
          style={{ marginRight: 10 }}
        />
      )}

      <DataContents>
        <DataName>{text}</DataName>
        <DataValue>{value}</DataValue>
      </DataContents>
    </DataList>
  );
};

export default IconList;
