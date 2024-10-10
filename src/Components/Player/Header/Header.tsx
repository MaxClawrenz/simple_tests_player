import { observer } from "mobx-react-lite";
import { useTime } from "../../../hooks/useTime";
import { test } from "../../../store/test";
import "./Header.css";

export const Header = observer(() => {
  const { minutes, seconds } = useTime(test.time);
  return (
    <div className="Header">
      <div className="Header-name">{test.name}</div>
      <div className="Header-timer">
        {minutes}
        <span className="pulsing-colon">:</span>
        {seconds}
      </div>
    </div>
  );
});
