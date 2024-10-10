import "./QuestionType.css";

export const QuestionType = ({ type }: { type: string }) => {
  let typeText = "";
  switch (type) {
    case "single":
      typeText = "Выбери один верный вариант";
      break;
    case "select":
      typeText = "Выбери несколько верных вариантов";
      break;
    case "short":
      typeText = "Дай короткий ответ";
      break;
    case "full":
      typeText = "Дай развёрнутый ответ";
      break;

    default:
      break;
  }
  return (
    <div className="QuestionType">
      <i>{typeText}</i>
    </div>
  );
};
