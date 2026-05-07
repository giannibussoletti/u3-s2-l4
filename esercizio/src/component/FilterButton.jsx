import { useState } from "react"
import { Col, Button } from "react-bootstrap"

const FilterButton = function (props) {
  const [genreClicked, setGenreClicked] = useState(false)

  return (
    <Col key={props.genre} className="d-flex justify-content-center px-1 mb-4 mb-sm-0">
      <Button
        variant={genreClicked ? "primary" : "secondary"}
        onClick={
          props.changeFilter
          //   () => {
          //   this.setState({
          //     genreClicked: !this.state.genreClicked,
          //   })
          // }
        }
        className="flex-grow-1">
        {props.genre}
      </Button>
    </Col>
  )
}

export default FilterButton
