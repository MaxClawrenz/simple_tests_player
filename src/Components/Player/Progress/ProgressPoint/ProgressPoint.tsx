import { observer } from "mobx-react-lite";
import "./ProgressPoint.css";

export const ProgressPoint = observer(({ state }: { state: string }) => {
  return <div className={`ProgressPoint ${state}`}></div>;
});
