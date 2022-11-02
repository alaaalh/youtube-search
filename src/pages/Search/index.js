// /* eslint-disable react/jsx-no-undef */
import ContentData from "./contentData";
import MediaQueryComponent from "./mediaQuery";
import { useSelector } from "react-redux";

export default function Search() {

  return (
    <div>
      <MediaQueryComponent />
      <ContentData/> 
    </div>
  );
}
