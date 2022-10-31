/* eslint-disable react/jsx-no-undef */
import Content from "../../components/Content/index";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader";
import MediaQuery from "react-responsive";
import MobileSubNav from "../../components/Header/MobileSubNav";

export default function Search() {
  return (
    <div>
      <Header></Header>
      <MediaQuery query="(min-device-width: 600px)"><SubHeader /></MediaQuery>
      <MediaQuery query="(max-device-width: 600px)"><MobileSubNav /></MediaQuery>
      <Content></Content>
    </div>
  );
}
