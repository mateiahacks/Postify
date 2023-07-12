import Api from '../../utils/Api';
import { PostData, PostEditData } from '../../utils/types';

const API_URL = '/api/posts';

// Get posts
const fetchPosts = async (page: number, name?: string) => {
    const url = name ? API_URL+'/author/'+name:API_URL;
    const response = await Api.get(url, { page });

    if (!response) return;

    return response.data;
}

const fetchPost = async (id: string) => {
    const response = await Api.get(API_URL+'/post/'+id);

    if (!response) return;

    return response.data;
} 

const createPost = async (postData: PostData) => {
    const response = await Api.post(API_URL, postData);

    if (!response) return;

    return response.data;
}

const deletePost = async (postId: string) => {
    const response = await Api.delete(API_URL+'/'+postId);

    if (!response) return;

    return postId;
}

const editPost = async (data: PostEditData) => {
    const { postId } = data;
    const response = await Api.put(API_URL+'/'+postId, data);

    if(!response) return;

    return response.data;

}


const likePost = async (id: string) => {
    const response = await Api.put(API_URL+'/like/'+ id);

    if (!response) return;

    return response.data;
}   

const postService = {
    fetchPosts,
    createPost,
    likePost,
    deletePost,
    editPost,
    fetchPost,
}

export default postService;