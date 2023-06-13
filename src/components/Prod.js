import React, { Fragment } from "react";
import { ItemList } from "./ItemList";
import { Looper } from "../script/preloader";

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