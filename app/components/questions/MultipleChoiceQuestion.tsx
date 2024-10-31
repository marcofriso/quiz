import React from "react";
import DifficultyBanner from "./DifficultyBanner";
import { Question } from "../../types";
import { decodeEntities } from "@/app/utils";

interface MultipleChoiceQuestionProps {
  question: Question;
  answers: string[];
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
}

const MultipleChoiceQuestion = ({
  question,
  answers,
  selectedAnswer,
  onSelectAnswer,
}: MultipleChoiceQuestionProps) => (
  <div className="rounded-lg shadow">
    <DifficultyBanner difficulty={question.difficulty} />
    <div className="p-4 bg-white rounded-b-lg">
      <p className="text-lg font-semibold mb-4">
        {decodeEntities(question.question)}
      </p>
      <div className="grid gap-2">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(answer)}
            className={`py-2 px-4 rounded-lg ${
              answer === selectedAnswer
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } hover:bg-blue-400`}
          >
            {decodeEntities(answer)}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default MultipleChoiceQuestion;
