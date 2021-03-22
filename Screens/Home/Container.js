import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { moonApi } from "../../api";
import { Alert } from "react-native";
import Loading from "../../Components/Loading";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState([]);
  const [leftMoon, setLeftMoon] = useState();

  const toggleEditing = () => setEditing((prev) => !prev);

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
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, [time]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Presenter
          time={time}
          setTime={setTime}
          data={data}
          toggleEditing={toggleEditing}
          editing={editing}
          leftMoon={leftMoon}
        />
      )}
    </>
  );
};

export default Container;
