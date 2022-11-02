/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useSelector } from "react-redux";

export default function Channel() {
  const selector = useSelector((state) => state.currentChannel);
  console.log(`https://www.youtube.com/embed/${selector}`);

  return (
    <div
      style={{
        width: "150px",
        borderRadius: "50%",
        overflow: "hidden",
        height: "150px",
        margin: "10px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <iframe src={`https://www.youtube.com/embed/${selector}`}></iframe>
    </div>
  );
}
