import styled from "styled-components";

export const StyledPostSection = styled.section`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    width: clamp(300px, 90vw, 500px);
    height: 100%;

    &::-webkit-scrollbar {
        display: none;
    }


`

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 40px;

    & > h1 {
        margin: auto;
        margin-top: 50px;
        color: gray;
    }
`