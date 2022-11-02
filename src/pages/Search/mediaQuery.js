// /* eslint-disable react/jsx-no-undef */

import React from "react";
import Header from "../../components/Header/MainHeader/index.js";
import SubHeader from "../../components/Header/SubNav/index.js";
import MediaQuery from "react-responsive";
import MobileSubNav from "../../components/Header/MobileSubNav/index.js";
import MobileMainHeader from "../../components/Header/MobileMainHeader/index";

export default function MediaQueryComponent() {
  return (
    <>
      <MediaQuery query="(min-device-width: 600px)">
        <Header />
        <SubHeader />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 600px)">
        <MobileMainHeader />
        <MobileSubNav />
      </MediaQuery>
    </>
  );
}
