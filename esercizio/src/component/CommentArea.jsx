import { ListGroup, Alert } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import { useEffect, useState, useRef } from "react"

const CommentArea = function (props) {
  const [comment, setComment] = useState([])
  const isInitialRender = useRef(true)

  const getComments = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero", response.status)
        }
      })
      .then((comments) => {
        setComment(comments)
      })
      .catch((err) => {
        return <Alert variant="danger">errore nella fetch: {err}</Alert>
      })
  }

  // componentDidMount() {
  //   this.getComments(this.props.asin)
  // }

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
    } else {
      getComments(props.asin)
    }
  }, [props.asin])

  return (
    <div className="position-sticky top-0">
      <ListGroup>
        {comment.map((comment) => {
          return (
            <CommentList
              getComments={getComments}
              asin={props.asin}
              value={comment._id}
              comment={comment}
              key={comment._id}
            />
          ) //
        })}
      </ListGroup>
      <AddComment asin={props.asin} getComments={getComments} />
    </div>
  )
}

export default CommentArea
