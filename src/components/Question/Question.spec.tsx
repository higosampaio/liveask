import { render, screen } from "@testing-library/react";

import { Question } from ".";
import { QuestionProps } from "../../types/QuestionProps";

describe("Question Component", () => {
  const fakeQuestion: QuestionProps = {
    content: "This is question?",
    author: {
      avatar: "image",
      name: "Higo Sampaio",
    },
  };

  it("should be render", () => {
    render(
      <Question
        content={fakeQuestion.content}
        author={fakeQuestion.author}
      ></Question>
    );
  });
});
