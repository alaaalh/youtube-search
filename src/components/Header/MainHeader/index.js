import React, { useRef } from "react";
import Classes from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { storeData } from "../../../redux/action.js";
import { useState } from "react";
import { GetData } from "../../../api";
import { totalResult } from "../../../redux/action.js";

export default function Header() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const searchValue = useRef();

  function handleSearchResult(e) {
    setData(e.target.value);
    if (e.key === "Enter") {
      handleGetData();
    }
  }

  function handleGetData() {
    if (searchValue.current.value) {
      GetData.get(searchValue.current.value).then((res) => {
        dispatch(storeData(res.data));
        dispatch(totalResult(res.data.pageInfo.totalResults))
      });
    }
  }

  return (
    <div className={Classes.container}>
      <div className={Classes.topnav}>
        <div className={Classes.logo}></div>
        <div className={Classes.searchContainer} style={{display: "flex", height: "25px"}}>
          <div>
            <input
              type="text"
              placeholder="Search.."
              ref={searchValue}
              onKeyDown={(e) => handleSearchResult(e)}
            />
          </div>
          <div>
            <button
              style={{ height: "100%" }}
              onClick={handleGetData}
            >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button> 
          </div>
        </div>
      </div>
    </div>
  );
}
