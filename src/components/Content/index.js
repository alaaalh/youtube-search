import React from "react";
import Card from "../../ui/Card";
import Classes from "./Content.module.css";

export default function Content() {
  return (
    <Card>
      <div className={Classes.videoContainer}></div>
      <div className={Classes.videoDiscription}>
        <h3></h3>
        <p></p>
        <p></p>
      </div>
    </Card>
  );
}
