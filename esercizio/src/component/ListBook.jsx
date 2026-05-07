import SingleBook from "./SingleBook"
import { Col, Container, Row, Form } from "react-bootstrap"
import FilterButton from "./FilterButton"
import { useState } from "react"
const genre = ["scifi", "romance", "history", "horror", "fantasy"]

const ListBook = function (props) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("scifi")

  const changeFilter = (e) => {
    setFilter(e.target.innerText)
  }

  return (
    <Container fluid>
      <Row className="mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca un libro"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </Row>
      <Row xs={1} md={5} className="my-4">
        {genre.map((genre) => {
          return <FilterButton genre={genre} key={genre} changeFilter={changeFilter} />
        })}
      </Row>
      <Row xs={1} sm={2} md={3} className="justify-content-between g-3">
        {props.object
          .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
          .filter((book) => book.category.toLowerCase() === filter.toLowerCase())
          .map((book, i) => {
            return (
              <Col key={book.asin + i} className="flex-grow-1">
                <SingleBook
                  changeFilter={changeFilter}
                  onClick={props.onClick}
                  image={book.img}
                  price={book.price}
                  title={book.title}
                  asin={book.asin}
                  answer={props.staticAsin}
                  genre={book.category}
                />
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}

export default ListBook
