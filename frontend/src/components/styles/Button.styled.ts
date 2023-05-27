import styled from 'styled-components';

interface props {
    bg?: string,
    font?: string,
}

export const StyledButton = styled.button<props>`
    background-color: ${(props) => props.bg};
    color: ${(props) => props.font};
    border: none;
    cursor: pointer;
    padding: 10px 40px;
    border-radius: 5px;
    width: fit-content;
    align-self: center;
    margin: 5px;

    &:hover {
        background-color: #2cb42c;
    }
`