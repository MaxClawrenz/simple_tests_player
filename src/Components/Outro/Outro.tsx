import player from "../../store/player";
import "./Outro.css";

export const Outro = () => {
  return (
    <>
      <h3>Тест закончен!</h3>
      <h4>Верные ответы:</h4>
      <div className="Outro">
        {player.test.questions.map((question) => (
          <div key={question.id} className="Outro-question-block">
            <div className="Outro-question">{question.name}</div>
            <div className="Outro-answer">
              {question.type === "short" || question.type === "full"
                ? question.correctAnswer
                : question.answers
                    .filter((answer) => answer.correct)
                    .map((answer) => (
                      <div key={answer.name} className="correct-answer">
                        {answer.name}
                      </div>
                    ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
