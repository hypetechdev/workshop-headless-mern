import { Grid } from '@material-ui/core'
import { fetchPosts } from 'libs/services/categoryService'
import React, { useState } from 'react'
import { useMount } from 'react-use'
import FeaturedPost from './FeaturedPost'
import PostCard from './PostCard'

// const mainFeaturedPost = {
//     title: 'Title of a longer featured blog post',
//     description:
//         "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//     image: 'https://source.unsplash.com/random',
//     imgText: 'main image description',
//     linkText: 'Continue reading…',
// }

// const featuredPosts = [
//     {
//         title: 'Featured post',
//         date: 'Nov 12',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageText: 'Image Text',
//     },
//     {
//         title: 'Post title',
//         date: 'Nov 11',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageText: 'Image Text',
//     },
// ]

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
