interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizData {
  response_code: number;
  results: Question[];
}

interface QuestionsAnswered {
  questionsAnswered: number;
  correctAnswers: number;
}

export type { Question, QuizData, QuestionsAnswered };
