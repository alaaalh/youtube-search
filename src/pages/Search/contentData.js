import React from "react";
import Loader from "../../components/Loader";
import Channel from "../../components/Content/Channel";
import Playlist from "../../components/Content/Playlist";
import Content from "../../components/Content/index";
import { useSelector } from "react-redux";

export default function ContentData(props) {
  const selector = useSelector((state) => state.currentData);
  const selectorLoad = useSelector((state) => state.isLoading);
  
  return (
    <div>
      {selector &&
        !selectorLoad &&
        selector.items.map((res) => {
          return res.id.kind === "youtube#video" ? (

            <Content
              videoId={res.id.videoId}
              key={res.id.videoId}
              title={res.snippet.title}
              discription={res.snippet.description}
              channalTitle={res.snippet.channelTitle}
              puplishTime={res.snippet.publishTime}
            />
          ) : res.id.kind === "youtube#playlist" ? (
            <div>
              <Playlist
                videoId={res.id.videoId}
                key={res.id.videoId}
                title={res.snippet.title}
                discription={res.snippet.description}
                channalTitle={res.snippet.channelTitle}
                puplishTime={res.snippet.publishTime}
              />
            </div>
          ) : (
            <Channel
              channelId={res.id.channelId}
              discription={res.snippet.description}
              title={res.snippet.channelTitle}
            />
          );
        })}
      {selectorLoad && <Loader />}
    </div>
  );
}
