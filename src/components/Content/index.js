/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import Card from "../../ui/Card";
import Classes from "./style.module.scss";
import { useState } from "react";
import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";
import { GetData } from "../../helpers/api";

export default function Content(props) {
  // console.log(props);
  const [publishTime, setPublishTime] = useState();
  const [views, setViews] = useState();
  const currentlyDate = new Date();
  const date = new Date(props.puplishTime);
  const year = 1000 * 60 * 60 * 24 * 365;
  const monthe = 1000 * 60 * 60 * 24;
  const years = (currentlyDate - date) / year;
  const monthes = (currentlyDate - date) / monthe;
  const yearsRound = Math.round(years);
  const monthesRound = Math.round(monthes);
  // const selectViews = useSelector((state) => state.currentlyViews);

  useEffect(() => {
    if (yearsRound > 0) {
      setPublishTime(`${yearsRound} year ago`);
    } else if (monthesRound > 0 && monthesRound < 12) {
      setPublishTime(`${date.getMonth()} months ago`);
    } else {
      setPublishTime(`${date.getDay()} days ago`);
    }

    GetData.getViews(props.videoId).then((res) => {
      res.data.items.map((res , index) => {
        return <div key={index}>{setViews(res.statistics.viewCount)}</div>;
      });
    });
    // console.log(selectViews)
  }, []);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <div>
      <MediaQuery query="(min-device-width: 600px)">
        <Card>
        <div className={Classes.videoContainer} style={{ width: "45%" }}>
          <iframe
            type="text/html"
            width="100%"
            height="130px"
            src={`https://www.youtube.com/embed/${props.videoId}?modestbranding=1`}
            frameBorder="0"
          ></iframe>
        </div>
        <div
          className={Classes.videoDiscription}
          style={{ marginLeft: "20px" , width: '58%'}}
        >
          <strong>{props.title}</strong>
          <br />
          <small className={Classes.subTitle}>
            {props.channalTitle} . {kFormatter(views)} . {publishTime}
          </small>
          <br />
          <small className={Classes.discription}>{props.discription}</small>
        </div>
        </Card>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 600px)">
        <div style={{display: 'flex'}}>
        <div className={Classes.videoContainer} style={{ width: "55%" , paddingLeft: '10px'}}>
          <iframe
            type="text/html"
            width="100%"
            height="130px"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameBorder="0"
          ></iframe>
        </div>
        <div
          className={Classes.videoDiscription}
          style={{width:'40%' , paddingLeft: '10px'}}
        >
          <strong>{props.title}</strong>
          <br />
          <small className={Classes.subTitle}>
            {props.channalTitle} .{kFormatter(views)}. {publishTime}
          </small>
        </div>
        </div>
      </MediaQuery>
    </div>
  );
}
