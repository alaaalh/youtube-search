import React, { useRef } from "react";
import Classes from "./styles.module.css";

import SearchLogo from "../../assets/images/Search_Icon.svg.png";
import { useDispatch } from "react-redux";
import { storeData } from "../../redux/action";
import { useState } from "react";
import { GetData } from "../../api";

export default function Header() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const ref = useRef();
  const searchValue = useRef();
  const [inputvisibil , setVisibilty] =useState('')

  function handleSearchResult(e) {
    setData(e.target.value);
    if (e.key === "Enter") {
      handleGetData();
    }
  }

  var x = window.matchMedia("(max-width: 600px)")

  function myFunction(x) {
    if (x.matches) { // If media query matches
        ref.current.style.visibility= 'hidden';
        setVisibilty('visible')
    } else {
        ref.current.style.visibility= 'visible';
        setVisibilty('hidden')
    }
  }

  x.addListener(myFunction) 

  function handleGetData() {
    console.log(ref.current.value)
    if(ref.current.style.visibility === 'hidden'){
        ref.current.style.visibility = 'visible'
        searchValue.current.innerHTML = ''
    }else{
        ref.current.style.visibility = 'hidden'
        ref.current.style.width = '10px'
        searchValue.current.innerHTML = ref.current.value
    }
    GetData.get(ref.current.value).then((res) => {
      dispatch(storeData(res.data.item));
      console.log(res);
    });
  }

  return (
    <div className={Classes.container}>
      <div className={Classes.topnav}>
        <div className={Classes.logo}></div>
        <div ref={searchValue} className={Classes.searchValue}></div>
        
        <div className={Classes.searchContainer}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            ref={ref}
            onKeyDown={(e) => handleSearchResult(e)}
          />
          <button
            style={{ height: "23px" }}
            onClick={handleGetData}
            className={Classes.searchButton}
          >
            <img src={SearchLogo} alt="searchlogo" width="25px" height="14px" />
          </button>
        </div>
      </div>
    </div>
  );
}
