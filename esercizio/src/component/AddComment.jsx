import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const AddComment = function (props) {
  const [comments, setComments] = useState({
    comment: "",
    rate: "",
  })

  let elementId = props.asin
  const commentsSend = { ...comments, elementId }

  const addComments = (comment) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("commento aggiunto")
          setComments({
            comment: "",
            rate: "",
          })
          elementId = ""
          props.getComments(props.asin)
        } else {
          throw new Error(response.status)
        }
      })
      .catch((err) => console.log("errore di recupero" + err))
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        addComments(commentsSend)
      }}>
      <Form.Control
        as="textarea"
        value={comments.comment}
        onChange={(e) => {
          setComments({
            ...comments,
            comment: e.target.value,
          })
        }}
        placeholder="Lascia un commento"
        style={{ height: "100px" }}
      />
      <Form.Control
        value={comments.rate}
        onChange={(e) => {
          setComments({
            ...comments,
            rate: e.target.value,
          })
        }}
        type="number"
        placeholder="Voto da 1 a 5"
        minLength={1}
        maxLength={5}
        className="my-3"
      />
      <Button variant="primary" type="submit">
        invia
      </Button>
    </Form>
  )
}

export default AddComment
