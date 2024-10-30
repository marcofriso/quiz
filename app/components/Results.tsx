import React from "react";
import type { QuestionsAnswered } from "../types";

interface ResultProps {
  questionsAnswered: QuestionsAnswered;
  numberOfQuestions: number;
}

const Results = ({ questionsAnswered, numberOfQuestions }: ResultProps) => {
  return <div>Results</div>;
};

export default Results;
