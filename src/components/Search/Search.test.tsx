import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Search from "./Search";

// mock data movie context
jest.mock("../../contexts/MoviesContext", () => ({
  useMovieContext: () => ({
    searchMovies: jest.fn(),
    searchShows: jest.fn(),
    getMovies: jest.fn(),
    getShows: jest.fn(),
    tab: "movies",
    setKeywordSearch: jest.fn(),
    keywordSearch: "",
  }),
}));

describe("Test if input value changes on search compo", () => {
  it("should update input value on change", async () => {
    const { getByPlaceholderText } = render(<Search />);
    const input = getByPlaceholderText(
      "Search For Movies&TV Shows",
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Test" } });

    await waitFor(() => {
      expect(input.value).toBe("Test");
    });
  });
});
