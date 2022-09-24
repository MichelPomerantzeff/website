import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { ArrowBack } from "@mui/icons-material"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"
import { auth } from "../firebase"
import { useState } from "react"

const LoginPage = styled.div``

const Container = styled.div`
    height: 95vh;
    display: flex;
    align-items: center;
    color: #36395A;
    `
const WrapperLeft = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex: 1;
    position: relative;
    `
const Left = styled.div`
    height: 500px;
    width: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    ${laptop({ height: "420px", width: "300px" })}
    ${tablet({ width: "280px" })}
    ${mobile({ height: "400px", width: "220px" })}
    `
const GoBack = styled.a`
    cursor: pointer;
    font-weight: bold;
    color: teal;
    font-size: .8rem;
    width: 100%;
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }

    ${mobile({ fontSize: ".6rem" })}
    `
const Icon = styled.div`
    transform: scale(.9);
    margin-right: 5px;

    ${mobile({ transform: "scale(.6)", marginRight: "0" })}
    `
const Header = styled.h2`
    
    ${laptop({ fontSize: "1.2rem" })}
    ${mobile({ fontSize: "1rem" })}
    `
const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: space-evenly;
    height: 60% ;
    `
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    `
const Input = styled.input`
    margin: 20px 0;
    border: none;
    outline: none;
    box-shadow: 0 2px 0 0 lightgray;
    font-size: 1.5rem;
    padding: 5px 10px;
    color: #36395A;
    
    &:hover{
        box-shadow: 0 2px 0 0 #36395A;;
    }
    
    &:focus{
        box-shadow: 0 2px 0 0 #36395A;;
    }

    ${midDesktop({ fontSize: "1.3rem" })}
    ${laptop({ fontSize: "1.1rem" })}
    ${bigTablet({})}
    ${tablet({})}
    ${mobile({ fontSize: ".8rem" })}
    `
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    `
const Button = styled.button`
    margin: 10px 0;
    font-size: 1.5rem;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    color: #36395A;
    border: ${props => props.toggle === "toggle" && "solid"} 2px ${props => props.toggle === "toggle" && "teal"};
    color: ${props => props.toggle === "toggle" && "teal"};
    background: ${props => props.toggle === "toggle" ? "none" : "#E8E8E8"};
    transition: ease .3s;

    &:hover{
        background-color: ${props => props.toggle === "toggle" ? "teal" : "#D3D3D3"};
        color: ${props => props.toggle === "toggle" && "white"};
        transition: ease .3s;
    }

    ${laptop({ fontSize: "1.2rem", padding: "12px" })}
    ${mobile({ fontSize: ".8rem", padding: "9px", borderRadius: "5px" })}
    `
const WrapperRight = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex: 1;
    overflow: hidden;
    position: relative;

    ${bigTablet({ display: "none" })}
    `
const Right = styled.div`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(to right, #d4fafa, #26b6b6);
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    width: 100%;
    height: 170%;
    padding: 50px;  
    z-index: -1 ;
    `
const Text = styled.h1`
    text-align: center;

    ${midDesktop({ fontSize: "1.8rem", })}
    ${laptop({ fontSize: "1.5rem" })}
    `

function Login(props) {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function signUp(e) {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <LoginPage>
            <Container>

                <WrapperLeft>
                    <Left>
                        <Link style={{ textDecoration: "none", width: "100%" }} to={"/login"}>
                            <GoBack>
                                <Icon>
                                    <ArrowBack />
                                </Icon>
                                VOLTAR
                            </GoBack>
                        </Link>
                        <Header>CRIE SUA CONTA E VAMOS ÀS COMPRAS</Header>
                        <Form>
                            <InputContainer>
                                <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                                <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" />
                            </InputContainer>

                            <ButtonContainer>
                                <Button type="submit" onClick={signUp}>Continuar</Button>

                                <Link to={"/login"}>
                                    <Button toggle={"toggle"} >JÁ TENHO UMA CONTA</Button>
                                </Link>

                            </ButtonContainer>
                        </Form>
                    </Left>
                </WrapperLeft>

                <WrapperRight>
                    <Right>
                        <Text>
                            Aqui da pra colocar uma imagem de fundo, tipo comida, ou entao alguma mensagem divulgando promocoes ou itens destacados etc.
                        </Text>
                    </Right>
                </WrapperRight>

            </Container>
        </LoginPage>
    );
}

export default Login;