import React from "react";
import DifficultyBanner from "./DifficultyBanner";
import { Question } from "../../types";
import { decodeEntities } from "@/app/utils";

interface BooleanQuestionProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
}

const BooleanQuestion = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}: BooleanQuestionProps) => (
  <div className="rounded-lg shadow">
    <DifficultyBanner difficulty={question.difficulty} />
    <div className="p-4 bg-white rounded-b-lg">
      <p className="text-lg font-semibold mb-4">
        {decodeEntities(question.question)}
      </p>
      <div className="flex space-x-4">
        {["True", "False"].map((answer) => (
          <button
            key={answer}
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

export default BooleanQuestion;
