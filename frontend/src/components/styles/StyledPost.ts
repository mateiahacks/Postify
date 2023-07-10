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
    position: relative;
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

    .show-more {
        text-decoration: underline;
        cursor: pointer;
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

    .three-dots-icon {
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
    }

    .author-name {
        color: blue;
        text-decoration: underline;
        margin-left: 5px;
        cursor: pointer;
    }
`