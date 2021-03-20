import React, { useEffect } from "react";
import Presenter from "./Presenter";
import { moonApi } from "../../api";

const Container = () => {
  const getData = async () => {
    const data = await moonApi();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Presenter />;
};

export default Container;
