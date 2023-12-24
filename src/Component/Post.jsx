import { useParams } from 'react-router-dom'
import React from 'react'

function Post() {
    const param = useParams()

  return (
    <div>Post {param.name}
       </div>
  )
}

export default Post