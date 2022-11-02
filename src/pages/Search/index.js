// /* eslint-disable react/jsx-no-undef */
import Content from "../../components/Content/index";
import Header from "../../components/Header/MainHeader/index.js";
import SubHeader from "../../components/Header/SubNav/index.js";
import MediaQuery from "react-responsive";
import MobileSubNav from "../../components/Header/MobileSubNav/index.js";
import { useSelector } from "react-redux";
import MobileMainHeader from "../../components/Header/MobileMainHeader/index";
import Channel from "../../components/Content/Channel";
import Loader from "../../components/Loader";

export default function Search() {
  const selector = useSelector((state) => state.currentData);
  const selectorLoad = useSelector(state => state.isLoading);
  console.log(selectorLoad)


  return (
    <div>
      <MediaQuery query="(min-device-width: 600px)">
        <Header></Header>
        <SubHeader />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 600px)">
        <MobileMainHeader />
        <MobileSubNav />
        {(selector && !selectorLoad) && <Channel/>}
      </MediaQuery>
      {(selector && !selectorLoad) &&
        selector.items.map((res) => {
        console.log(res.id.videoId)
          return (

            <Content
              videoId={res.id.videoId}
              key={res.id.videoId}
              title={res.snippet.title}
              discription={res.snippet.description}
              channalTitle = {res.snippet.channelTitle}
              puplishTime = {res.snippet.publishTime}
            ></Content>
          );
        })}
        {selectorLoad && <Loader/>}
        {/* <Loader/> */}
    </div>
  );
}
