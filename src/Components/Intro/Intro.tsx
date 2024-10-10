import { observer } from "mobx-react-lite";
import { useTime } from "../../hooks/useTime";
import player from "../../store/player";
import { test } from "../../store/test";
import "./Intro.css";
import { useCase } from "../../hooks/useCase";

export const Intro = observer(() => {
  const { minutes, seconds } = useTime(test.time);
  const numsOfQuestion = useCase(player.test.questions.length, [
    "вопрос",
    "вопроса",
    "вопросов",
  ]);
  const numsOfMinutes = useCase(minutes, ["минута", "минуты", "минут"]);
  const numsOfSeconds = useCase(Number(seconds), [
    "секунда",
    "секунды",
    "секунд",
  ]);

  return (
    <div className="Intro">
      <h3 className="Intro-header">
        Добро пожаловать в тест &laquo;{`${player.test.name}`}&raquo;!
      </h3>
      <div className="Intro-text">
        Тест состоит из <strong>{`${player.test.questions.length}`}</strong>{" "}
        {numsOfQuestion}. На тест отводится <strong>{minutes}</strong>{" "}
        {numsOfMinutes}
        {Number(seconds) ? (
          <>
            <strong> {Number(seconds)}</strong> {numsOfSeconds}
          </>
        ) : null}
        !
      </div>
      <div className="Intro-subtext">
        Чтобы начать нажми &laquo;Старт&raquo;
      </div>
      <button onClick={player.start} className="Intro-submit">
        Старт
      </button>
    </div>
  );
});
