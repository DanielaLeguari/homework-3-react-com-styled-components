import styled from 'styled-components';
export const CardPLogin = styled.div`
    height: 100vh;
    width: 75vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--fonte);

h1{
    font-size: 1.75rem;
    color:var(--cor-texto-azul);
}

.saudacao{
    padding: 2rem 0 2rem 0;
    display: flex;
    align-items: center;
}

.login{
    display:flex;
    align-items: center;
    padding: 0 0 2rem 0;
}

img{
    margin-right: 1rem;
}

p{
    font-size: 1rem;
    color: var(--cor-texto-paragrafo);
    font-weight: 500;
}

button{
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;
    padding: 0.7rem;
    font-size: 1.375rem;
    width: 7rem;
    border: none;
    background-color: var(--cor-botao);
    color: var(--cor-menu);
    cursor: pointer;
}

button:hover{
    background-color: var(--cor-texto-azul);
    
}
.usuario{
   color:var(--cor-texto-azul);
   font-weight: 500; 
}

.outra-conta{
    display: flex;
    justify-content: space-between;
}

.nova-conta{
    margin-right: 3rem;
}

.link{
    color: var(--cor-links);
    font-weight: 500;
    cursor: pointer;
}

`