import styled from 'styled-components';


export const MyTicket = styled.div`
    font-family: var(--fonte);
    width: 80%;
    margin: 0 auto;
    
    h1{
        margin: 2rem 0 0 0;
        font-size: 1.25rem;
        color: var(--cor-texto-azul);
    }
    
    .adicionar-ticket{
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: var(--fonte);
    }

    h3{
        font-size: 1.25rem;
        color: var(--cor-texto-azul);
        line-height: 4rem;
    }

    p{
        color: var(--icones);
        font-size: 1.0625rem;
    }

    button{
        background-color: var( --cor-botao);
        border-radius: 8px;
        border: none;
        padding: 1.2rem;
        color: var(--cor-menu);
        font-weight: 600;
        margin-top: 4rem;
        cursor: pointer;
    }

    button:hover{
    background-color: var(--cor-texto-azul);
    
}

`