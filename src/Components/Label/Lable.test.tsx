import { render, screen, fireEvent } from "@testing-library/react";
import Label from "./Label";

describe("The Label component", () => {
  test("Title contains correct value", () => {
    const onClick = jest.fn();
    render(
      <Label title="List Item Title" subtitle="List Item Title subtitle" />
    );
    const testTitle = screen.getByText("List Item Title");
    expect(testTitle).toBeInTheDocument();
  });

  test("Subtitle contains correct value", () => {
    const onClick = jest.fn();
    render(
      <Label title="List Item Title" subtitle="List Item Title subtitle" />
    );
    const testSubTitle = screen.getByText("List Item Title subtitle");
    expect(testSubTitle).toBeInTheDocument();
  });
});
