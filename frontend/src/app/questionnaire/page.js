"use client";

import { useState } from "react";
import QuestionCard from "../components/QuestionCard";


const questions = [
  "I enjoy working in a team environment.",
  "I prefer to work independently on projects.",
  "I am comfortable with public speaking.",
  "I adapt easily to new technologies and tools.",
  "I handle stress well in high-pressure situations.",
];

export default function Questionnaire() {
  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(questions.map((_, index) => [index, null]))
  );
  const [error, setError] = useState(false);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(answers).some((answer) => answer === null)) {
      setError(true);
      return;
    }

    console.log("Submitted answers:", answers);
    // Here you would typically send the answers to a server
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Questionnaire</h1>
      {error && (
        <p className="text-red-500 text-center mb-4">
          Please answer all questions before submitting.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            index={index}
            selectedAnswer={answers[index]}
            handleAnswer={handleAnswer}
          />
        ))}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
          >
            Submit Questionnaire
          </button>
        </div>
      </form>
    </div>
  );
}
