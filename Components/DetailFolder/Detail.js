import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import IconList from "./IconList";

const Container = styled.View`
  align-items: center;
  background-color: black;
  padding-bottom: 100px;
`;
const MoonContainer = styled.View``;
const DataContainer = styled.View`
  width: 100%;
`;
const Contents = styled.View`
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  margin-bottom: 25px;
`;

const DetailContainer = ({ toggleEditing, data }) => {
  //full moon
  const fullYear = new Date(data?.fm?.ut * 1000).getFullYear();
  const fullMonth = new Date(data?.fm?.ut * 1000).getMonth() + 1;
  const fullDate = new Date(data?.fm?.ut * 1000).getDate();

  //next moon
  const newYear = new Date(data?.nnm?.ut * 1000).getFullYear();
  const newMonth = new Date(data?.nnm?.ut * 1000).getMonth() + 1;
  const newDate = new Date(data?.nnm?.ut * 1000).getDate();

  return (
    <Container>
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
          <IconList
            name={"circle-thin"}
            value={`${newYear} · ${newMonth} · ${newDate}`}
            text={"New Moon"}
            fontAwesome={true}
          />

          <IconList
            name={"sun-o"}
            value={`${Math.round(data?.dfs)} km`}
            text={"Distance sun"}
            fontAwesome={true}
          />
        </Contents>

        <Contents>
          <IconList
            text={"Full Moon"}
            value={`${fullYear} · ${fullMonth} · ${fullDate}`}
            name={"circle"}
            fontAwesome={true}
          />

          <IconList
            text={"Distance Earth"}
            value={`${Math.round(data?.dfcoe)} km`}
            name={"earth"}
            fontAwesome={false}
          />
        </Contents>
      </DataContainer>
    </Container>
  );
};

export default DetailContainer;
