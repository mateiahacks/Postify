import Api from "../../utils/Api";
import { CommentData } from "../../utils/types";

const API_URL = '/api/comments/';

const addComment = async ( comment: CommentData) => {
    const { postId, content } = comment;
    const response = await Api.post(API_URL+postId, { content });

    if (!response) return;

    return response.data;
}

const getComments = async (postId: string) => {
    const response = await Api.get(API_URL+postId);

    if (!response) return;

    return response.data;
}

const postService = {
    addComment,
    getComments
}

export default postService;