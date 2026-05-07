import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import WindowAlert from "../component/WindowAlert"

describe("WindowAlert Test", () => {
  it("checks if the Alert is visible", () => {
    render(<WindowAlert />)
    const alert = screen.getByTestId(/window-alert/i)
    expect(alert).toBeInTheDocument()
  })
})
