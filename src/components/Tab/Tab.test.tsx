import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tab from "./Tab";

describe("Tab component", () => {
  it("should switch tab and type on button click", () => {
    const { getByText } = render(<Tab />);

    // Initial state check
    expect(getByText("TV Shows").classList.contains("active")).toBe(true);
    expect(getByText("Movies").classList.contains("active")).toBe(false);

    // Clicking Movies button
    fireEvent.click(getByText("Movies"));
    expect(getByText("TV Shows").classList.contains("active")).toBe(false);
    expect(getByText("Movies").classList.contains("active")).toBe(true);
  });
});
