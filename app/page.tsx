"use client";

import { useEffect, useState } from "react";
import type { Question, QuestionsAnswered, QuizData } from "./types";
import Questions from "./components/Questions";
import Results from "./components/Results";

const numberOfQuestions = 10;

const defaultQuestionsAnswered = {
  questionsAnswered: 0,
  correctAnswers: 0,
};

const Home = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionsAnswered, setQuestionsAnswered] = useState<QuestionsAnswered>(
    defaultQuestionsAnswered
  );
  const [error, setError] = useState<string | null>(null);

  const handleReset = () => {
    setQuestions([]);
    setQuestionsAnswered(defaultQuestionsAnswered);
  };

  const getRandomQuestions = (allQuestions: Question[]): Question[] => {
    const randomQuestions: Question[] = [];

    while (randomQuestions.length < numberOfQuestions) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
      const randomQuestion = allQuestions[randomIndex];

      if (
        !randomQuestions.some((q) => q.question === randomQuestion.question)
      ) {
        randomQuestions.push(randomQuestion);
      }
    }

    return randomQuestions;
  };

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetch("/questions.json");

        if (!response.ok) {
          setError("Failed to fetch questions");
        }

        const data: QuizData = await response.json();
        const randomQuestions = getRandomQuestions(data.results);

        setQuestions(randomQuestions);
      } catch (error) {
        setError(`Error loading questions:, ${String(error)}`);
      }
    };

    if (questions.length === 0) {
      loadQuestions();
    }
  }, [questions.length]);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold">Quiz</h1>
      <a
        className="text-slate-500 mt-1"
        href="https://www.marcofriso.com/"
        target="_blank"
      >
        www.marcofriso.com
      </a>
      <button
        className="rounded-lg font-bold bg-slate-700 text-slate-200 px-4 py-2 px-6 mt-5"
        onClick={handleReset}
      >
        Restart Quiz
      </button>
      {error && <div className="text-red-500 mt-5">{error}</div>}
      {questions.length > 0 &&
        questionsAnswered.questionsAnswered < numberOfQuestions && (
          <Questions
            questions={questions}
            questionsAnswered={questionsAnswered}
            setQuestionsAnswered={setQuestionsAnswered}
          />
        )}
      {questionsAnswered.questionsAnswered === numberOfQuestions && (
        <Results
          questionsAnswered={questionsAnswered}
          numberOfQuestions={numberOfQuestions}
        />
      )}
    </div>
  );
};

export default Home;
