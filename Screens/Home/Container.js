import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { moonApi } from "../../api";

const Container = () => {
  const [time, setTime] = useState(new Date());

  const getData = async () => {
    const data = await moonApi(Math.floor(time / 1000));
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, [time]);

  return <Presenter time={time} setTime={setTime} />;
};

export default Container;
