import React, { useState } from 'react'
import { useMount } from 'react-use'

import { fetchPosts } from 'libs/services/categoryService'

import { Grid } from '@material-ui/core'

import PostCard from './PostCard'

interface Props {}

const PostsSection = (props: Props) => {
    const [posts, setPosts] = useState<any[]>([])

    useMount(async () => {
        const categories = await fetchPosts()

        setPosts(categories)
    })

    if (!posts.length) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {/* <FeaturedPost post={{}} /> */}
            <Grid container spacing={4}>
                {posts.map((post) => (
                    <PostCard key={post.title} post={post} />
                ))}
            </Grid>
        </div>
    )
}

export default PostsSection
