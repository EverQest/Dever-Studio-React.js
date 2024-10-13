import React, { Fragment } from "react";
import { Looper } from "../script/preloader.tsx";
import { MainPhoto } from "./MainPhoto";

export const Home = () => {
    return (
    <Fragment>
      <Looper />
      <MainPhoto />
    </Fragment>
    )
}