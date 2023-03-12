import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

const transactions = [
  { id: 1, price: 10 },
  { id: 2, price: 20 },
  { id: 3, price: 30 },
];

describe("Table component", () => {
  it("renders the correct number of rows", () => {
    render(<Table transactions={transactions} />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(5); // 1 header row + 3 transaction rows + pagination row
  });

  it("renders the correct data", () => {
    render(<Table transactions={transactions} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10$")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("20$")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("30$")).toBeInTheDocument();
  });

  it("renders a table with headers", () => {
    render(<Table transactions={transactions} />);
    expect(screen.getByText("Id")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
  });
});
