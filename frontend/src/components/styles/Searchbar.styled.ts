import styled from 'styled-components';

export const StyledSearchbar = styled.div`
    position: relative;
    margin-left: 15px;

    input {
        padding: 5px 30px;
        background-color: rgb(37, 95, 120);
        outline: none;
        border: none;
        width: 200px;
        transition: 0.5s ease-in-out;
        border-radius: 5px;
        color: white;
    }

    input:focus {
        width: 300px;
    }

    .search-modal-container {
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        border-radius: 10px;
    }

    .search-icon {
        position: absolute;
        left: 5px;
        top: 5px;
    }
    .overlay {
        position: fixed; /* Stay in place */
        z-index: -1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    @media only screen and (max-width: 600px) {
        input, .search-icon {
            display: none;
        }
    }
`

export const SearchModal = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    width: 120%;
    min-height: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: start;

    div {
        width: 100%;
        padding: 10px;
        cursor: pointer;
    }

    span {
        color: #b7b7b7;
    }

    p {
        margin: auto;
        color: #a0a0a0;
    }

    div:hover {
        background-color: #d6d6d6;
    }
`