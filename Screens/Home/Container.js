import React, { useEffect } from "react";
import Presenter from "./Presenter";
import { moonApi } from "../../api";

const Container = () => {
  const getData = async () => {
    const currentTime = Math.floor(new Date() / 1000);
    const data = await moonApi(currentTime);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter />;
};

export default Container;
