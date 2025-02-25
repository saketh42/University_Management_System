"use client";

export default function QuestionCard({ question, index, selectedAnswer, handleAnswer }) {
  const options = ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"];

  return (
    <div className="mb-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">Question {index + 1}</h2>
      <p className="mb-4 text-gray-600">{question}</p>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name={`question-${index}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswer(index, option)}
              className="form-radio h-5 w-5 text-blue-600"
              aria-labelledby={`question-${index}`}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
