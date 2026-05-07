import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import AddComment from "../component/AddComment"

describe("Leave Comment section is rendered", () => {
  it("check if text-area for comment is present", () => {
    render(<AddComment />)
    const leaveComment = screen.getByPlaceholderText(/Lascia un commento/i)
    expect(leaveComment).toBeInTheDocument()
  })
  it("check if review section is present", () => {
    render(<AddComment />)
    const reviewVote = screen.getByPlaceholderText(/Voto da 1 a 5/i)
    expect(reviewVote).toBeInTheDocument()
  })
  it("check if submit button is present", () => {
    render(<AddComment />)
    const buttonSubmit = screen.getByText(/invia/i)
    expect(buttonSubmit).toBeInTheDocument()
  })
})
