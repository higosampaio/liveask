import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import { QuestionProps } from "../../types/QuestionProps";
import { Question } from ".";

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Question Component", () => {
  const fakeQuestion: QuestionProps = {
    content: "This is question?",
    author: {
      avatar: "http://localhost/image",
      name: "Higo Sampaio",
    },
  };

  it("should be render with content and author", () => {
    render(
      <Question content={fakeQuestion.content} author={fakeQuestion.author} />
    );

    const content = screen.getByText(fakeQuestion.content);
    expect(content).toBeTruthy();

    const image = screen.getByRole("img");
    expect(image).toHaveProperty("src", fakeQuestion.author.avatar);
    expect(image).toHaveProperty("alt", fakeQuestion.author.name);
  });
});
