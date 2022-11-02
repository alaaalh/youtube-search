import React, { useRef } from "react";
import Classes from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { storeData } from "../../../redux/action.js";
import { useState } from "react";
import { GetData } from "../../../helpers/api";

export default function MobileMainHeader() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [hidden , setHiddent] = useState('')
  const inputSearch = useRef<HTMLInputElement>(null);
  const searchValue = useRef<HTMLDivElement>(null);

  function handleSearchResult(e: any) {
    if (e.target.value) {
      setData(e.target.value);
      if (e.key === "Enter") {
        handleGetData();
      }
    }
  }

  function handleGetData() {
    
    if (inputSearch.current !== null && inputSearch.current.value) {
        if(inputSearch.current.style.visibility === 'hidden'){
            inputSearch.current.style.visibility  = 'visible';
            setHiddent('hiddent')
        }else{
            inputSearch.current.style.visibility = 'hidden';
            setHiddent('visible');
        }

      if (inputSearch.current !== null && searchValue.current !== null) {
        GetData.get(inputSearch.current.value).then((res) => {
          dispatch(storeData(res.data));
        });
      }
    }
  }

  return (
    <div className={Classes.container}>
      <div className={Classes.topnav}>
        <div className={Classes.logo}></div>
        <FontAwesomeIcon icon={faSquareYoutube} />
        <div ref={searchValue} className={Classes.searchValue}></div>

        <div className={Classes.searchContainer}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            ref={inputSearch}
            onKeyDown={(e) => handleSearchResult(e)}
          />
          <button
            style={{ height: "23px" }}
            onClick={handleGetData}
            className={Classes.searchButton}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </div>
  );
}
