import React, { useRef } from "react";
import Classes from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Loading, storeData } from "../../../redux/action.js";
import { useState } from "react";
import { GetData } from "../../../api";
import { channelDetails } from "../../../redux/action.js";

export default function MobileMainHeader() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [hiddenValue, setHiddentValue] = useState("hidden");
  const inputSearch = useRef(null);
  const searchValue = useRef(null);
  const inputValue = useRef(null);

  function handleSearchResult(e) {
    if (e.target.value) {
      setData(e.target.value);
      if (e.key === "Enter") {
        handleGetData();
      }
    }
  }

  function handleGetData() {
    hiddenValue === "hidden"
      ? setHiddentValue("visible")
      : setHiddentValue("hidden");

    if (inputValue.current !== null && inputValue.current.value) {
      if (inputValue.current !== null && searchValue.current !== null) {
        dispatch(Loading(true))
        GetData.get(inputValue.current.value).then((res) => {
          dispatch(Loading(false))
          dispatch(storeData(res.data));
        });

        GetData.getChannel(inputValue.current.value).then((res) => {
          console.log(res.data.items[0].id)
          dispatch(channelDetails(res.data.items[0].id));
        });
      }
    }
  }

  const removeValue = () => {
    inputValue.current.value = "";
  };

  return (
    <div className={Classes.container}>
      <div className={Classes.topnav}>
        <div className={Classes.logo}></div>
        <div ref={searchValue} className={Classes.searchValue}>
          {hiddenValue === "hidden" &&
            inputValue.current !== null &&
            inputValue.current.value}
        </div>
        <div
          className={Classes.searchContainer}
          ref={inputSearch}
          style={{ visibility: `${hiddenValue}` }}
        >
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onKeyDown={(e) => handleSearchResult(e)}
            ref={inputValue}
          />
          <FontAwesomeIcon
            icon={faX}
            style={{ marginLeft: "-20px" }}
            width="10px"
            onClick={removeValue}
          />
        </div>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={handleGetData}
          color="white"
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
}
