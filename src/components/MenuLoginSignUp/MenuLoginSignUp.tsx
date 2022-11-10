import { MenuLoginContainer } from './MenuLoginSignUp.styled';
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialInstagram } from 'react-icons/ti';
import { AiOutlineMenu} from 'react-icons/ai';

const MenuLoginSignUp = () => {
    return (
        <MenuLoginContainer>
            <header>
                <AiOutlineMenu/><p>Menu</p>
            </header>
            <main>
                <img src='./assets/logo.png' alt='logo' />
            </main>
            <footer>
                <ul>
                   <li><TiSocialFacebookCircular size={'1.5rem'} /></li>
                   <li><TiSocialInstagram  size={'1.5rem'}/></li>
                   <li><TiSocialTwitterCircular  size={'1.5rem'}/></li> 
                </ul>
            </footer>
        </MenuLoginContainer>
    );
}

export default MenuLoginSignUp;