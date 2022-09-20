import styled from "styled-components"
import { HighlightOffRounded } from "@mui/icons-material"
import { useState } from "react"

const Container = styled.div`
    height: 100vh;
    width: 600px;
    background-color: white;
    position: fixed;
    right: 0;
    top: 0;
    display: ${props => props.display };
    justify-content: center;
    align-items: center;
    transition: ease .5s;
    z-index: 4;
    `
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    `
const Top = styled.div`
    box-shadow: 0 1px 0 0 lightgray;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
const CountItems = styled.div`
    margin: 0 30px;
    `
const CloseTab = styled.div`
    display: flex;
    align-items: center;
    margin: 0 30px;
    cursor: pointer;
    font-weight: bold;
    `
const Center = styled.div`
    height: calc(100vh - 250px);
    display: flex;
    flex-direction: column;
    `
const EmptyBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: auto;

    `
const Title = styled.h2`
    text-align: center;
    margin: 20px 0;
    `
const Text = styled.div`
    text-align: center;
    font-size: 1.2rem;
    `
const Bottom = styled.div`
    height: 150px;
    `

function Cart(props) {
    
    const [display, setDisplay] = useState("flex")

    return (
        <Container display={display}>
            <Wrapper>
                <Top>
                    <CountItems>Sua sacola tem 4 itens</CountItems>
                    <CloseTab onClick={() => setDisplay("none")} >
                        Ocultar
                        <HighlightOffRounded style={{margin: "0 10px"}} />
                    </CloseTab>
                </Top>

                <Center>

                    <EmptyBox>
                    <Title>
                        SUA SACOLA ESTÁ VAZIA
                    </Title>

                    <Text>
                        Navegue pelas categorias ou faça uma busca por produtos.
                    </Text>
                    </EmptyBox>

                </Center>

                <Bottom></Bottom>

            </Wrapper>
        </Container>

    );
}

export default Cart;