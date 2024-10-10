import { observer } from "mobx-react-lite";
import player from "../../../store/player";
import "./Question.css";
import { QuestionType } from "./QuestionType/QuestionType";
import { Answer } from "./Answer/Answer";
import { useForm } from "react-hook-form";

export const Question = observer(() => {
  const currentQuestion = player.test.questions[player.current];

  const { register, handleSubmit, reset } = useForm();

  const submit = (data: any) => {
    const selectedAnswers =
      currentQuestion.type === "single"
        ? data.answers[currentQuestion.id]
        : currentQuestion.type === "select"
        ? data.answers.join(", ")
        : data.textAnswer;

    player.recordResult(currentQuestion.name, selectedAnswers);
    player.nextQuestion();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="Question">{currentQuestion.name}</div>
      <QuestionType type={currentQuestion.type} />
      <div className="Question-answers">
        {currentQuestion.type === "single" ||
        currentQuestion.type === "select" ? (
          currentQuestion.answers.map((answer, index) => (
            <Answer
              key={index}
              name={answer.name}
              type={currentQuestion.type}
              register={register}
              questionId={currentQuestion.id}
            />
          ))
        ) : currentQuestion.type === "short" ? (
          <input
            type="text"
            {...register("textAnswer", { required: true })}
            className="Question-input"
          />
        ) : currentQuestion.type === "full" ? (
          <textarea
            {...register("textAnswer", { required: true })}
            className="Question-textarea"
          />
        ) : null}
      </div>
      <div className="Question-submit">
        <button className="Question-submit-button" type="submit">
          Ответить
        </button>
      </div>
    </form>
  );
});
