import { CardPLogin } from './CardLogin.styled';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";

//inline
const linkStyle={textDecoration: 'none'}

const CardLogin = () => {
  return (
    <CardPLogin>
      <main>
        <div>
          <h1>Login</h1>
          <p>Please select your account</p>
          <div className='saudacao'>
            <img src='./assets/usuario-logado.png' alt='Foto Usuario'></img>
            <p>Welcome back,<span className='usuario'> Hamid</span></p>
          </div>
          <div className='login'>
            <p className='link'>Login to a different account</p>
            <Link to={'/perfil'} style={linkStyle}><button> Login <IoIosArrowForward /></button></Link>
          </div>
          <div className='outra-conta'>
            <p className='nova-conta'>Don’t haven an account?</p>
            <p className='link'><span>Login to your account</span></p>
          </div>
        </div>
      </main>
    </CardPLogin>
  );
}

export default CardLogin;
