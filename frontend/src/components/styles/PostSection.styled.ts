import styled from "styled-components";

export const StyledPostSection = styled.section`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    max-width: 500px;
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
`