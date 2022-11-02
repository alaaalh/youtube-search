/* eslint-disable jsx-a11y/alt-text */
import classes from "./styles.module.scss";

export default function Loader() {
  return (
    <div>
      <div className={classes.loading}></div>
      <div className={classes.textLoad}>Loading</div>
    </div>
  );
}
