import * as React from "react"
import { CircularProgress } from "@material-ui/core"
import { Pagination as MUI_Pagination } from "@material-ui/lab"
import axios from "axios"

export interface PostsInterface {
  userId: number
  id: number
  title: string
  body: string
}

export const Pagination = () => {
  const [posts, setPosts] = React.useState<PostsInterface[]>([])
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(true)

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handlePosts = async () => {
    try {
      const serverResponse = await axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
      })
      console.log(serverResponse.data)
      setPosts(serverResponse.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      handlePosts()
    }, 3000)
  }, [])

  return (
    <React.Fragment>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <React.Fragment>
          {posts.slice((page - 1) * 10, page * 10).map(post => {
            const { title, id } = post
            return (
              <React.Fragment key={id}>
                <p>{title}</p>
              </React.Fragment>
            )
          })}
          <MUI_Pagination
            showFirstButton
            showLastButton
            color="primary"
            count={posts.length / 10}
            page={page}
            onChange={handleChange}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
