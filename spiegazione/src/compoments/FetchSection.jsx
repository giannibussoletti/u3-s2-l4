import { useEffect, useState } from "react"
import { FormControl, ListGroup } from "react-bootstrap"

const FetchSection = function () {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState(" ")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw new Error("Errore nella fetch")
        }
      })
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h2>Lista di post</h2>
      <FormControl
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        placeholder="cerca..."
      />
      <ListGroup>
        {posts
          .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
          .map((p) => {
            return <ListGroup.Item key={p.id}> {p.title}</ListGroup.Item>
          })}
      </ListGroup>
    </>
  )
}
export default FetchSection
