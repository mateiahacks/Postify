import Api from '../../utils/Api';
import { PostData } from '../../utils/types';

const API_URL = '/api/posts';

// Get posts
const fetchPosts = async () => {
    const response = await Api.get(API_URL);

    if (!response) return;

    return response.data;
}

const createPost = async (postData: PostData) => {
    const response = await Api.post(API_URL, postData);

    if (!response) return;

    return response.data;
}

const likePost = async (id: string) => {
    const response = await Api.put(API_URL+'/like/'+ id);

    if (!response) return;

    console.log("dataa");
    console.log(response);

    return response.data;
}   

const postService = {
    fetchPosts,
    createPost,
    likePost,
}

export default postService;