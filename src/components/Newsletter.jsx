import styled from "styled-components"
import { Send } from "@mui/icons-material"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"

const Container = styled.div`
    background: ${props => props.bg === "home" ? "#e6f1f3" : "none"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 200px 0;
    color: #36395A;
    `
const Title = styled.h1`
    font-size: 4rem;

    ${midDesktop({ fontSize:"3.6rem" })}
    ${laptop({ fontSize:"3.2rem" })}
    ${bigTablet({ fontSize:"2.8rem" })}
    ${tablet({ fontSize:"2.4rem" })}
    ${mobile({ fontSize: "2rem", })}
    `
const Description = styled.div`
    font-size: 1.7rem;
    margin: 50px auto 30px auto;

    ${midDesktop({ fontSize:"1.6rem" })}
    ${laptop({ fontSize:"1.4rem" })}
    ${bigTablet({ fontSize:"1.2rem" })}
    ${tablet({ fontSize:".8rem" })}
    ${mobile({ fontSize: ".6rem", })}
    `
const InputContainer = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    max-width: 800px;
    width: 80%;
    height: 60px;
    box-shadow: 0 0 2px 2px lightgray;
    overflow: hidden;

    ${midDesktop({ height: "55px" })}
    ${laptop({ height: "50px" })}
    ${bigTablet({ height: "45px" })}
    ${tablet({ height: "40px" })}
    ${mobile({ height: "35px" })}

    `
const Input = styled.input`
    flex: 9;
    border: none;
    outline: none;
    font-size: 1.3rem;
    padding: 0 20px;
    width: 100%;
    

    ${mobile({ fontSize: ".9rem" })}       
    `
const Button = styled.button`
    flex: 1;
    height: 100%;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #e4e4e4;
    }
    `

function Newsletter(props) {
    return (
        <Container bg={props.bg}>
            <Title>Novidades</Title>
            <Description>Receba notificações sobre descontos e novidades por email.</Description>
            <InputContainer>
                <Input placeholder="Email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
}

export default Newsletter;