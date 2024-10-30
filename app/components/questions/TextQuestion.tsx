import React from "react";
import DifficultyBanner from "./DifficultyBanner";
import { Question } from "../../types";
import { decodeEntities } from "@/app/utils";

interface TextQuestionProps {
  question: Question;
  selectedAnswer: string | null;
  onInputChange: (answer: string) => void;
}

const TextQuestion = ({
  question,
  selectedAnswer,
  onInputChange,
}: TextQuestionProps) => (
  <div className="border rounded-lg shadow">
    <DifficultyBanner difficulty={question.difficulty} />
    <div className="p-4">
      <p className="text-lg font-semibold mb-4">
        {decodeEntities(question.question)}
      </p>
      <input
        type="text"
        value={selectedAnswer ?? ""}
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Type your answer"
      />
    </div>
  </div>
);

export default TextQuestion;
