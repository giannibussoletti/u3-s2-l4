import { useState } from "react"
import { Button, Card } from "react-bootstrap"

const HiddenSection = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h2>Questo compomente si chiama hidden section</h2>
      <div>
        <Button className="my-4" variant="success" onClick={() => setShow(!show)}>
          {show ? "NASCONDI" : "MOSTRA"}
        </Button>
      </div>
      {show && (
        <div>
          <Card>
            <Card.Img variant="top" src="https://placebear.com/300/300" alt="immagine di un orso" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  )
}

export default HiddenSection
