import { iAnswers } from "./iAnswers";

export interface iQuestions {
    correctAnswer: string | null;
    id: string,
    name: string,
    state: "active" | "unanswered" | "completed",
    type: string,
    answers: iAnswers[]
}