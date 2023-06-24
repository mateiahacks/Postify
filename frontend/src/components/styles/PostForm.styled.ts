import styled from 'styled-components';

export const StyledPostFormOpen = styled.div`
    padding: 15px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 20%) 1px 2px 5px;
    border: 3px solid transparent;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .post-form-inner {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .post-form-input-container {
        flex-grow: 1;
    }

    .user-icon {
        width: 40px;
    }

`

export const StyledPostForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    .user-icon {
        width: 50px;
        margin-left: 5px;
    }

    .post-form-user {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        padding: 8px 16px;
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
    width: 100%;
    cursor: pointer;
`