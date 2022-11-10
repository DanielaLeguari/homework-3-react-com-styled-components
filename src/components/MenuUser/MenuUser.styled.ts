import styled from 'styled-components';

export const MenuNav = styled.div`
    height: 15vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--cor-menu-perfil) ;
    border-bottom:1px solid  var(--cor-borda);

.menu-logo{
    display: flex;
    align-items: center;
    cursor: pointer;
}

img{
    margin-left: 1rem;
}

ul{
    list-style-type: none;
    display: flex;
}
ul li{
    margin-left: 2rem;
    cursor: pointer;
}

.lista-usuario{
    display: flex;
    align-items: center; 
}
.icones{
    /* color:var(--icones); */
    padding : 0.5rem ;
    
}

select {
    border: none;
    background-color: #F5F5F7;
    cursor: pointer;
}

.selecionar{
    background-color: #F5F5F7;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;
    padding: 0.6rem;
    width: 11rem;
    cursor: pointer;
}

p{
    font-family: var(--fonte);
    font-weight: 400;
    color: var(--cor-texto-azul);
    font-size:1rem;
    padding-left: 0.5rem;
}
`