import styled from 'styled-components';

interface ButtonPropTypes {
    bg?: string,
}

export const StyledHeader = styled.nav`
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Cabin', sans-serif;
    background-color: ${({ theme }) => theme.colors.header};

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        color: white;
        font-family: 'Pacifico', cursive;
        font-weight: 300;
        font-size: 30px;
        text-align: center;
        padding: 0 15px;
        cursor: pointer;

        &:hover {
            background-color: grey;
        }
    }
`

export const HeaderButton = styled.div<ButtonPropTypes>`
    height: 100%;
    position: relative;
    padding: 15px 15px;
    background-color: ${(props) => props.bg};
    cursor: pointer;
    color: white;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.205rem;
        left: 0;
        bottom: 0px;
        background: #5ECE7B;
        transform: scale(0, 1);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scale(1, 1);
    }

    &:hover {
        background-color: grey;
    }
`