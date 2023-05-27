import styled from 'styled-components';

export const StyledRegisterForm = styled.form`
    margin: auto;
    background-color: white;
    padding: 20px 10px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0px 6px 16px 0px;

    p {
        text-align: center;
        font-size: 18px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .form-header {
        text-align: center;
        margin-bottom: 20px;
        border-bottom: 1px solid ${({theme}) => theme.colors.bgInput};
        padding-bottom: 30px;
        padding-top: 10px;
    }
`;

export const InputContainer = styled.div`
    min-width: 400px;
    padding: 0 5px;
    position: relative;

    label {
        color: #37474f;
        margin-left: 5px;
    }

`

export const InputField = styled.input`
    width: 100%;
    border-radius: 5px;
    padding: 12px 15px;
    font-size: 16px;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.bgInput};
    margin: 10px 0 20px 0;

    &:focus {
        background-color: white;
        border: none;
        border-color: inherit;
        outline: 2px solid ${({theme}) => theme.colors.bgInput};
    }

`;