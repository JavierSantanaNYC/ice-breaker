import React from "react";
import questions from "./questions.json";

const QuestionsPage = (attendees) => {
  const matchingQuestions = questions.filter(
    (question) =>
      attendees[0] in question.attendees && attendees[1] in question.attendees
  );

  return (
    <>
      {matchingQuestions.map((question) => (
        <div>
          <h4>{question.question}</h4>
        </div>
      ))}
    </>
  );
};

export default QuestionsPage;
