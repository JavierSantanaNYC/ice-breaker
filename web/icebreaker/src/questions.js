import React from "react";
import questions from "./questions.json";

const QuestionsPage = (props) => {
  const matchingQuestions = questions.filter(
    (question) =>
      question.attendees.includes(props.attendees[0]) &&
      question.attendees.includes(props.attendees[1])
  );

  return (
    <>
      {matchingQuestions.map((question) => (
        <div>
          {question.questions.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>
          }
            )}
        </div>
      ))}
    </>
  );
};

export default QuestionsPage;
