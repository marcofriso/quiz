import React, { useState } from "react";
import type { Question, QuestionsAnswered } from "../types";
import { QuestionType } from "../types";
import BooleanQuestion from "./questions/BooleanQuestion";
import MultipleChoiceQuestion from "./questions/MultipleChoiceQuestion";
import TextQuestion from "./questions/TextQuestion";

interface QuestionsProps {
  questions: Question[];
  questionsAnswered: QuestionsAnswered;
  setQuestionsAnswered: React.Dispatch<React.SetStateAction<QuestionsAnswered>>;
}

const Questions = ({ questions, setQuestionsAnswered }: QuestionsProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === currentQuestion.correct_answer;

      setQuestionsAnswered((prev) => ({
        questionsAnswered: prev.questionsAnswered + 1,
        correctAnswers: isCorrect
          ? prev.correctAnswers + 1
          : prev.correctAnswers,
      }));

      setSelectedAnswer(null);
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const renderQuestionComponent = () => {
    switch (currentQuestion.type) {
      case QuestionType.Multiple:
        return (
          <MultipleChoiceQuestion
            question={currentQuestion}
            answers={[
              ...currentQuestion.incorrect_answers,
              currentQuestion.correct_answer,
            ].sort()}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleAnswerSelection}
          />
        );

      case QuestionType.Boolean:
        return (
          <BooleanQuestion
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleAnswerSelection}
          />
        );

      case QuestionType.Text:
        return (
          <TextQuestion
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onInputChange={handleAnswerSelection}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col p-4 sm:w-[32rem] mx-auto bg-slate-100 rounded-lg shadow mt-6">
      <p className="text-lg font-semibold mb-4 text-center">
        {currentQuestionIndex + 1} / {questions.length} Question
      </p>
      {renderQuestionComponent()}
      <button
        onClick={handleContinue}
        disabled={!selectedAnswer}
        className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 w-fit self-center"
      >
        Continue
      </button>
    </div>
  );
};

export default Questions;
