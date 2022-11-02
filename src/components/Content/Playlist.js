/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Classes from './style.module.scss';
import Card from '../../ui/Card';

export default function Playlist(props) {
  return (
    <Card>
        <div className={Classes.videoContainer} style={{ width: "45%" }}>
          <div className={Classes.playlist}>
          <iframe
            type="text/html"
            width="100%"
            height="130px"
            src={`https://www.youtube.com/embed/${props.videoId}?modestbranding=1`}
            frameBorder="0"
          ></iframe>
          </div>
        </div>
        <div
          className={Classes.videoDiscription}
          style={{ marginLeft: "20px" , width: '58%'}}
        >
          <strong>{props.title}</strong>
          <br />
          <small className={Classes.subTitle}>
            {props.playlistCount}
          </small>
          <br />
          <small className={Classes.discription}>{props.discription}</small>
        </div>
        </Card>
  )
}
