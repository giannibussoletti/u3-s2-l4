import { Button, ListGroup, Alert } from "react-bootstrap"

const CommentList = function (props) {
  const getComments = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          props.getComments(props.asin)
        } else {
          throw new Error("Errore nel recupero", response.status)
        }
      })
      .catch((err) => {
        return <Alert variant="danger">errore nella fetch: {err}</Alert>
      })
  }

  const deleteComments = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("commento cancellato")
          return response.json()
        } else {
          throw new Error("Errore nel recupero", response.status)
        }
      })
      .then((comment) => {
        getComments(comment.elementId)
      })
      .catch((err) => console.log("errore di recupero" + err))
  }

  return (
    <div className="my-2">
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <span>{props.comment.comment}</span>
        <Button
          variant="danger"
          onClick={() => {
            deleteComments(props.comment._id)
          }}>
          🗑️
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>Voto: {props.comment.rate}</ListGroup.Item>
    </div>
  )
}
export default CommentList
