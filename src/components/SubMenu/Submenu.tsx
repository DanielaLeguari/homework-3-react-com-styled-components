import { MenuSecundario } from "./SubMenu.styled";
import { IoIosArrowForward } from 'react-icons/io';

const SubMenu = () => {
    return(
        <MenuSecundario>
        <ul>
            <li>My Panel<IoIosArrowForward size={'1.2rem'}/></li>
            <li>Ticket<IoIosArrowForward size={'1.2rem'}/></li>
            <li>#invoice</li>
        </ul>
        </MenuSecundario>
    );
}

export default SubMenu;