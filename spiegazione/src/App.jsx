import { Col, Container, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import HiddenSection from "./compoments/HiddenSection"
import FetchSection from "./compoments/FetchSection"

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-3">Testing degli element</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={6} className="text-center">
          <HiddenSection />
          <FetchSection />
        </Col>
      </Row>
    </Container>
  )
}
export default App
