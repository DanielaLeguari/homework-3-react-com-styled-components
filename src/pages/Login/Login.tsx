import styled from "styled-components"
import CardLogin from "../../components/Login/CardLogin"
import MenuLoginSignUp from "../../components/MenuLoginSignUp/MenuLoginSignUp"

const LoginContainer = styled.div`
display:flex;`

const Login = () => {
    return (
        <LoginContainer>
            <MenuLoginSignUp />
            <CardLogin />
        </LoginContainer>
    )
}

export default Login;