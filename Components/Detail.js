import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  createIconSet,
} from "@expo/vector-icons";

const Container = styled.View`
  align-items: center;
  background-color: gray;
`;

const MoonContainer = styled.View``;

const DataContainer = styled.View`
  padding: 0px 20px;
  width: 80%;
`;

const Contents = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const List = styled.View`
  flex-direction: row;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.6;
`;

const DataValue = styled.Text`
  color: white;
`;

const year = new Date(1618194776.7499 * 1000).getFullYear();
const month = new Date(1618194776.7499 * 1000).getMonth() + 1;
const dately = new Date(1618194776.7499 * 1000).getDate();

const Detail = ({ toggleEditing, data, editing }) => {
  return (
    <Container>
      <MoonContainer
        style={{
          shadowColor: "white",
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        }}
      />
      <TouchableOpacity onPress={() => toggleEditing()}>
        <MoonContainer
          style={{
            shadowColor: "white",
            shadowOpacity: 0.5,
            shadowRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          }}
        />
      </TouchableOpacity>
      <DataContainer>
        <Contents>
          <List>
            <Entypo name="circle" size={24} color="white" />
            <DataName>New Moon</DataName>
            <DataValue>
              {month} {dately} {year}
            </DataValue>
          </List>

          <List>
            <Entypo name="circle" size={24} color="white" />
            <DataName>New Moon</DataName>
            <DataValue>
              {month} {dately} {year}
            </DataValue>
          </List>
        </Contents>
      </DataContainer>
    </Container>
  );
};

export default Detail;
