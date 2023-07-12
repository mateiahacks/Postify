import styled from "styled-components";

export const CommentsSection = styled.div`
    width: clamp(250px, 60vw, 400px);
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .comments {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .comments-spinner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-100%, -100%);
    }
`
export const StyledComment = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #e6e6e6;

    .comment-author {

    }

    .comment-content {
        color: gray;
    }
    
`

export const CommentInput = styled.div`
    width: 100%;
    position: relative;

    input {
        width: 100%;
        padding: 10px 13px;
        border: none;
        outline: none;
        font-size: 15px;
    }

    input:focus {
        border: none;
        outline: none;
    }
    
    .send-icon {
        position: absolute;
        right: 10px;
        top: 12px;
        cursor: pointer;
    }
`