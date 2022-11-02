import * as React from "react";
import { useSelector } from "react-redux";
export default function MobileSubNav() {
  const selector = useSelector((state) => state.currentData);

  const selectedStyle = {
    border: "none",
    outline: "none",
    height: "40px",
    padding: "5px",
    marginTop: "5px",
    borderRadius: "5px",
    width: "90px",
    fontSize: "15px",
    fontWeight: "normal",
    margin: "8px",
  };
  return (
    <div>
      {selector && (
        <div>
          <div style={{ display: "flex" }}>
            <select id="selected" name="ddProducts" style={selectedStyle}>
              <option>All </option>
              <option>channel</option>
              <option>playlist</option>
              <option>video</option>
            </select>
            <select id="during" name="ddProducts" style={selectedStyle}>
              <option>Any time</option>
              <option>Long</option>
              <option>medium</option>
              <option>short</option>
            </select>
          </div>
          <hr style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
}
