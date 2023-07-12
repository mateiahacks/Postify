import styled from 'styled-components';

export const StyledPagination = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 13px;

    .page-pointer {
        border: 1px solid rgb(15, 46, 59);
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .page-pointer:hover, .selected {
        color: white;
        background-color: rgb(15, 46, 59);
    }
`