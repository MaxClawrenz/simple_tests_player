import { test } from "../../../store/test";
import { ProgressPoint } from "./ProgressPoint/ProgressPoint";
import "./Progress.css";
import { observer } from "mobx-react-lite";

export const Progress = observer(() => {
  return (
    <div className="Progress">
      {test.questions.map((question, index) => (
        <ProgressPoint key={index} state={question.state} />
      ))}
    </div>
  );
});
