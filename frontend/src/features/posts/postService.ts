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

const postService = {
    fetchPosts,
    createPost
}

export default postService;