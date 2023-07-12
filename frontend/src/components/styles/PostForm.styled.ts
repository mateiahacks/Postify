import styled from 'styled-components';

export const StyledPostFormOpen = styled.div`
    padding: 15px;
    width: clamp(300px, 90vw, 500px);
    box-shadow: rgb(0 0 0 / 20%) 1px 2px 5px;
    border: 3px solid transparent;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;

    .post-form-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
    }
    .post-form-inner > .user-icon {
        width: 40px;
    }

`

export const StyledPostForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    .post-form-user {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .user-icon {
        width: 60px;
        margin-bottom: 15px;
    }

    textarea {
        padding: 15px;
        font-size: 18px;
        min-height: 250px;
        resize: none;
        border: none;
        outline: none;
    }

    .post-button, .disabled-post-button {
        width: fit-content;
        align-self: flex-end;
        border: none;
        padding: 8px 0;
        width: 60px;
        border-radius: 15px;
        color: white;
        background-color: var(--lightBlue);
        font-size: 15px;
    }

    .post-button {
        cursor: pointer;
    }

    .disabled-post-button {
        cursor: not-allowed;
        opacity: 0.4;
    }

    .post-button:hover {
        background-color: var(--darkBlue);
    }

`

export const CreatePostFakeInput = styled.div`
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid gray;
    color: gray;
    /* width: clamp(200px, 65vw, 400px); */
    width: 100%;
    margin: auto;
    cursor: pointer;
`