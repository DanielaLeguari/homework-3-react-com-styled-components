import styled from 'styled-components';

export const MenuLoginContainer = styled.div`
    height: 100vh;
    width: 35vw;
    background-image: url('./assets/fundo-menu.png');
    background-size:cover;
    display: grid;
    grid-template-rows:auto 1fr auto;
    
   


    header{
        display: flex;
        align-items: center;
        color :var(--cor-menu) ;
        font-size:1.125rem ;
        margin: 2rem 0 0 2rem;
        
    }
    p{
        margin-left: 0.5rem;
    }
   

    main{
        color :var(--cor-menu) ;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1,7393625rem;
    }
    footer{
       color :var(--cor-menu) ;
       margin: 0 0 2rem 2rem;
     size: 1rem;
    }

    ul{
        display:flex;
        align-items: center;
        list-style-type: none;
    }

    li{
        margin-left: 1rem;
    }


`