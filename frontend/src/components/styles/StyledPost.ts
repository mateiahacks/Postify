import styled from "styled-components";

export const StyledPost = styled.div`
    padding: 15px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 20%) 1px 2px 5px;
    border: 3px solid transparent;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .post-top, .post-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .post-like-icon {
        cursor: pointer;
        margin-bottom: -2px;
        margin-right: 5px;
    }

    .post-comments-button {
        cursor: pointer;
    }

    h1 {
        font-size: 22px;
        color: #515151;
    }

    p {
        color: #757575;
    }
`