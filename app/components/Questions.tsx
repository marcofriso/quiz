import React from "react";
import type { Question, QuestionsAnswered } from "../types";

interface QuestionsProps {
  questions: Question[];
  questionsAnswered: QuestionsAnswered;
  setQuestionsAnswered: React.Dispatch<React.SetStateAction<QuestionsAnswered>>;
}

const Questions = ({
  questions,
  questionsAnswered,
  setQuestionsAnswered,
}: QuestionsProps) => {
  return <div>Questions</div>;
};

export default Questions;
