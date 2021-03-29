import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { moonApi } from "../../api";
import { Alert } from "react-native";

const Container = () => {
  const [time, setTime] = useState(new Date());
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState([]);
  const [leftMoon, setLeftMoon] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const {
        data: { moon },
      } = await moonApi(Math.floor(time / 1000));
      setData(moon);

      const nextDay = new Date(time.getTime() + 86400000);
      const {
        data: { moon: nextMoon },
      } = await moonApi(Math.floor(nextDay / 1000));
      setLeftMoon(moon?.illumination > nextMoon?.illumination);
    } catch (error) {
      Alert.alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [time]);

  return (
    <Presenter
      loading={loading}
      time={time}
      setTime={setTime}
      data={data}
      setEditing={setEditing}
      editing={editing}
      leftMoon={leftMoon}
    />
  );
};

export default Container;
