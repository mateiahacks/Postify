import Api from '../../utils/Api';

const API_URL = '/api/posts';

// Get posts
const fetchPosts = async () => {
    const response = await Api.get(API_URL);

    if (!response) return;

    return response.data;
}

const postService = {
    fetchPosts,
}

export default postService;