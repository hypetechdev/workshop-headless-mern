import Axios from 'axios'

export const fetchPost = async (postId: string) => {
    const { data: postData } = await Axios.get(`http://localhost:1337/posts/${postId}`)

    return postData
}
