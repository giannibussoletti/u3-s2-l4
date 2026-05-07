import { Button, Card } from "react-bootstrap"

const SingleBook = function (props) {
  return (
    <>
      <Card
        className="h-100"
        style={{
          border: props.answer === props.asin ? "2px solid red" : "1px solid grey",
        }}>
        <Card.Img
          variant="top"
          src={props.image}
          onClick={() => {
            props.onClick(props.asin)
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1">{props.title}</Card.Title>
          <Card.Subtitle>{props.genre}</Card.Subtitle>
          <Card.Text>{props.price}</Card.Text>
          <Card.Text>{props.asin}</Card.Text>
          <Button variant="primary">Comprami</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
