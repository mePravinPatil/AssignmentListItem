import { render, screen, fireEvent } from "@testing-library/react";
import Label from "./Label";

describe("The Label component", () => {
  test("Title contains correct value", () => {
    render(<Label text="List Item Title" isTitle={true} />);
    const testTitle = screen.getByText("List Item Title");
    expect(testTitle).toBeInTheDocument();
  });

  test("Subtitle contains correct value", () => {
    render(<Label text="List Item Title subtitle" isTitle={false} />);
    const testSubTitle = screen.getByText("List Item Title subtitle");
    expect(testSubTitle).toBeInTheDocument();
  });

  test("Title contains default value when props is not present for Text", () => {
    render(<Label isTitle />);
    const testSubTitle = screen.getByText("Title is not Available");
    expect(testSubTitle).toBeInTheDocument();
  });
});
