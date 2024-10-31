import React from "react";
import { QuestionDifficulty } from "../../types";

interface DifficultyBannerProps {
  difficulty: QuestionDifficulty;
}

const DifficultyBanner: React.FC<DifficultyBannerProps> = ({ difficulty }) => {
  const getBannerColor = () => {
    switch (difficulty) {
      case QuestionDifficulty.Easy:
        return "bg-green-500 text-white";
      case QuestionDifficulty.Medium:
        return "bg-yellow-500 text-white";
      case QuestionDifficulty.Hard:
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className={`px-4 py-2 rounded-t-lg ${getBannerColor()}`}>
      <p className="font-semibold capitalize">{difficulty}</p>
    </div>
  );
};

export default DifficultyBanner;
