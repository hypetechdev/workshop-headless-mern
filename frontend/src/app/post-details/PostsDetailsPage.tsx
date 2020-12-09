import React, { useState } from 'react'
import { useMount } from 'react-use'
import { fetchPost } from 'libs/services/postsService'
import { useParams } from 'react-router-dom'

interface Props {}

const PostsDetailsPage = (props: Props) => {
    const { postId } = useParams<any>()
    const [post, setPost] = useState<any>(null)

    useMount(async () => {
        const post = await fetchPost(postId)
        setPost(post)
    })

    if (!post) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>{post?.title}</h1>
            <h5>{post?.body}</h5>
        </div>
    )
}

export default PostsDetailsPage
