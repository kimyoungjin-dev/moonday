import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { moonApi } from "../../api";

const Container = () => {
  const [time, setTime] = useState(new Date());
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState([]);

  const toggleEditing = () => setEditing((prev) => !prev);
  const getData = async () => {
    try {
      const {
        data: { moon },
      } = await moonApi(Math.floor(time / 1000));
      setData(moon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [time]);

  return (
    <Presenter
      time={time}
      setTime={setTime}
      data={data}
      toggleEditing={toggleEditing}
      editing={editing}
    />
  );
};

export default Container;
