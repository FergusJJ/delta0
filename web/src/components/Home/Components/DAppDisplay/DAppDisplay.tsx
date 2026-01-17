import demoImage from "./../../../../../public/demoplaceholder.png";
import s from "./DAppDisplay.module.css";

export default function DAppDisplay() {
  return (
    <div className={s.wrapper}>
      <img src={demoImage} />
    </div>
  );
}
