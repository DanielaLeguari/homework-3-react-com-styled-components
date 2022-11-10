import { MenuNav } from './MenuUser.styled';
import { IoIosNotifications } from 'react-icons/io';
import { MdEmail, MdDashboard, MdPayment } from 'react-icons/md';
import { FcBusiness } from 'react-icons/fc';
import { BsFillChatFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

const MenuUser = () => {
    return (
        <MenuNav>
            <div className='menu-logo'>
                <AiOutlineMenu size={'1.5rem'}/><img src='./assets/logo-2.png' alt='Logo'></img>
            </div>
            <div>
                <ul>
                    <li><MdDashboard />Dashboard</li>
                    <li><FcBusiness />Bussiness</li>
                    <li><BsFillChatFill />Tickets</li>
                    <li><MdPayment />Payments</li>
                </ul>
            </div>
            <div className='lista-usuario'>
                <div className='icones'><IoIosNotifications size={'1.5rem'} /></div>
                <div className='icones'><MdEmail size={'1.5rem'} /></div>
                <div className='selecionar'>
                    <img src='./assets/usuario-logado.png' alt='Foto usuario' />
                    <p>Hamid</p>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Sair</option>
                    </select>
                </div>
            </div>
        </MenuNav>
    );
}


export default MenuUser;