import React from "react";
import type { QuestionsAnswered } from "../types";

interface ResultProps {
  questionsAnswered: QuestionsAnswered;
  numberOfQuestions: number;
}

const Results = ({ questionsAnswered, numberOfQuestions }: ResultProps) => {
  const correctAnswers = questionsAnswered.correctAnswers;
  const wrongAnswers = questionsAnswered.questionsAnswered - correctAnswers;
  const score = (correctAnswers / numberOfQuestions) * 100;

  return (
    <div className="flex flex-col p-4 sm:w-[32rem] mx-auto bg-slate-100 rounded-lg shadow mt-6">
      <h2 className="mb-5 font-bold text-xl text-center uppercase">Summary</h2>
      <ul>
        <li>
          Correct: <span className="font-semibold">{correctAnswers}</span>
        </li>
        <li>
          Wrong: <span className="font-semibold">{wrongAnswers}</span>
        </li>
        <li>
          Questions Answered:{" "}
          <span className="font-semibold">
            {questionsAnswered.questionsAnswered}
          </span>
        </li>
        <li>
          Final Score:{" "}
          <span className="font-semibold">{score.toFixed(0)}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Results;
