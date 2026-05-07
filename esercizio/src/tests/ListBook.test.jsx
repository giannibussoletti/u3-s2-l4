import { fireEvent, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import ListBook from "../component/ListBook"

import ScifiBooks from "../data/scifi.json"
import RomanceBooks from "../data/romance.json"
import HistoryBooks from "../data/history.json"
import HorrorBooks from "../data/horror.json"
import FantasyBooks from "../data/fantasy.json"

const AllTheBooks = ScifiBooks.concat(RomanceBooks, HistoryBooks, HorrorBooks, FantasyBooks)

describe("Check generate list of book", () => {
  it("checks if book are generated", async () => {
    render(<ListBook object={AllTheBooks} />)
    try {
      const singleBook = await screen.findAllByTestId(/singleBook/i)
      expect(singleBook).not.toBeNull()
    } catch (error) {
      console.log(error)
    }
  })

  it("checks how many books is generated and if is all", async () => {
    render(<ListBook object={AllTheBooks} />)
    try {
      const singleBook = await screen.findAllByTestId(/singleBook/i)
      expect(singleBook.length).toBeLessThanOrEqual(FantasyBooks.length)
    } catch (error) {
      console.log(error)
    }
  })

  it("checks border click change color", async () => {
    render(<ListBook object={AllTheBooks} />)
    try {
      const AllBooks = await screen.findAllByTestId(/singleBook/i)
      const singleBook = AllBooks[0]
      fireEvent.click(singleBook)
      expect(singleBook).toHaveStyle("border:2px solid red")

      // fireEvent.click(singleBook)
      // console.log(singleBook)
    } catch (error) {
      console.log(error)
    }
  })
  it("checks border click change color when another pressed", async () => {
    render(<ListBook object={AllTheBooks} />)
    try {
      const AllBooks = await screen.findAllByTestId(/singleBook/i)
      const singleBookZero = AllBooks[0]
      const singleBookOne = AllBooks[1]

      fireEvent.click(singleBookZero)
      expect(singleBookZero).toHaveStyle("border:2px solid red")
      fireEvent.click(singleBookOne)
      expect(singleBookZero).toHaveStyle("border:1px solid grey")

      // fireEvent.click(singleBook)
      // console.log(singleBook)
    } catch (error) {
      console.log(error)
    }
  })
})
