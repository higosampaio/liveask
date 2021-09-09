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
    const { container } = render(
      <Question content={fakeQuestion.content} author={fakeQuestion.author} />
    );

    const content = container.querySelector("p");
    expect(content?.textContent).toBe(fakeQuestion.content);

    const authorImage = container.querySelector("img");
    expect(authorImage?.src).toBe(fakeQuestion.author.avatar);
    expect(authorImage?.alt).toBe(fakeQuestion.author.name);

    const authorName = container.querySelector("span");
    expect(authorName?.textContent).toBe(fakeQuestion.author.name);
  });
});
