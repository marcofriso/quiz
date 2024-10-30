enum QuestionType {
  Multiple = "multiple",
  Boolean = "boolean",
  Text = "text",
}

enum QuestionDifficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

interface Question {
  category: string;
  type: QuestionType;
  difficulty: QuestionDifficulty;
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
export { QuestionType, QuestionDifficulty };
