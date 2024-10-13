import React, { Fragment } from "react";
import { ItemList } from "./ItemList";
import { Looper } from "../script/preloader.tsx";

export const Prod = (type) => {
    return (
      <Fragment>
          <Looper />
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            <ItemList type={type} />
          </div>
        </Fragment>
    )
}