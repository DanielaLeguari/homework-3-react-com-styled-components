import styled from 'styled-components';

export const MenuSecundario = styled.div`
    width: 80%;
    margin: 0 auto;


ul{
    display: flex;
    list-style-type: none;
    color: var(--sub-menu);
    font-family: var(--fonte);
}

ul li{
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 400;
    background-color: #F5F5F7;
    padding: 1rem;
    margin: 0.5rem 0 0 0;
    border-radius: 8px; 
}
`