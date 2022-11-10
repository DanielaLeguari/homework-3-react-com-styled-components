import styled from 'styled-components';

export const MenuNav = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--cor-menu-perfil) ;

.menu-logo{
    display: flex;
    align-items: center;
}

ul{
    list-style-type: none;
    display: flex;
    
}
ul li{
    margin-left: 2rem;
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
   
}

.selecionar{
    background-color: #F5F5F7;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;
    padding: 0.6rem;
    width: 9rem;
}
`