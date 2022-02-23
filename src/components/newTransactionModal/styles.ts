import styled from 'styled-components'
import { darken, transparentize } from 'polished' //escurecer uma cor

export const Container = styled.form`
    h2 {
        color: var(--title-body);
        font-size: 1.5rem;
        margin-bottom: 2rem;

    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem
        }

    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green);
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: 0.3s;
        font-weight: 600;

        &:hover {
            filter: brightness(0.7);
        }
    }


` 

export const TrasactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`


interface RadioButtonProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

//faz o map das color
const colors = {
    green: '#33CC95',
    red: '#E62E4D',
}

export const RadioButton = styled.button<RadioButtonProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'
    };
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.3s;

    &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
    }

    /* .buttonTypeIncome:hover,
    .buttonTypeOutcome:hover {
        filter: brightness(0.9);
    } */

    span {
        font-size: 1rem;
        margin-left: 1rem;
        color: var(--text-body);
    }

    img {
        width: 1.5rem;
    }


`