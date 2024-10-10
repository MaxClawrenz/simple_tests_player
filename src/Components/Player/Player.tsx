import { observer } from "mobx-react-lite";
import { Header } from "./Header/Header";
import { Progress } from "./Progress/Progress";
import { Question } from "./Question/Question";

export const Player = observer(() => {
  return (
    <>
      <Header />
      <Progress />
      <Question />
    </>
  );
});
