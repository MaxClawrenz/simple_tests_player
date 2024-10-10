import { UseFormRegister } from "react-hook-form";
import "./Answer.css";

export const Answer = ({
  name,
  type,
  register,
  questionId,
}: {
  name: string;
  type: string;
  register: UseFormRegister<any>;
  questionId: string;
}) => {
  return (
    <div className="Answer">
      <label className={`custom-input ${type}`}>
        <input
          type={type === "single" ? "radio" : "checkbox"}
          value={name}
          {...register(
            type === "single" ? `answers.${questionId}` : `answers`,
            { required: type === "single" }
          )}
        />
        <span className="checkmark"></span>
        {name}
      </label>
    </div>
  );
};
