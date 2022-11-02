import Classes from "./styles.module.scss";
import * as React from "react";
import { useSelector } from 'react-redux';

export default function SubHeader() {
  const selector = useSelector(state => state.totalCount);
  return (
    <>
      {selector && 
      <div className={Classes.container}>
      <div className={Classes.subnav}>
        <p>About {selector} filtered result</p>
        <p>FILTER</p>
      </div>
      <hr />
    </div>
    }
    </>
  );
}
