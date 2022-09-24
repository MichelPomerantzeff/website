import styled from "styled-components"
import { Remove, Add } from "@mui/icons-material"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import { useNavigate } from "react-router-dom"

const CartPage = styled.div`
    `
const Container = styled.div`
    /* background-color: greenyellow; */
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-top: 120px;
    margin-bottom: 50px;

    ${tablet({ margin: 0})}
    `
const Header = styled.h1`
    text-align: center;
    margin: 20px;
    font-weight: 500;

    ${midDesktop({ fontSize: "1.8rem", })}
    ${laptop({ fontSize: "1.5rem", })}
    ${bigTablet({ fontSize: "1rem", margin: "15px" })}
    ${tablet({ fontSize: "1rem", margin: "5px" })}
    ${mobile({ fontSize: ".8rem", })}
    `
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    
    ${midDesktop({ paddingBottom: "50px" })}
    ${tablet({ paddingBottom: "250px" })}
    ${mobile({ paddingBottom: "280px" })}
    `
const Products = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 100%;

    ${tablet({ width: "100vw" })}
    `
const Product = styled.div`
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 0 0 lightgray;
    width: 90%;
    margin: 5px auto;
    padding: 10px 0;
    height: 100%;

    ${bigTablet({ flexDirection: "column", height: "260px" })}
    `
const Image = styled.img`
    border-radius: 5px;
    width: 35%;
    
    ${bigTablet({ width: "220px" })}
    `
const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 20px;
    gap: 50px;

    ${midDesktop({ fontSize: "1.3rem" })}
    ${laptop({ fontSize: "1rem", marginLeft: "10px", gap: "30px" })}
    ${bigTablet({ flexDirection: "row", margin: "0", gap: "0", flex: "0", width: "50%" })}
    ${tablet({ padding: "10px", fontSize: ".8rem", })}
    ${mobile({ padding: "10px", fontSize: ".6rem", })}
    `
const Label = styled.label`
    `
const Price = styled.div`
    `
const ButtonContainer = styled.div`
    /* border: solid 1px red; */
    flex: 0 0 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;


    ${laptop({ flexBasis: "30%" })}
    ${bigTablet({ width: "50%", flex: .35 })}
    ${tablet({ flex: .3 })}

    `
const CountButton = styled.button`
    height: 100%;
    display: flex;
    align-items: center;
    border: ${props => props.type === "minus" && "solid 2px lightgray"};
    border: ${props => props.type === "plus" && "solid 2px teal"};
    color: teal;
    background: none;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0 25px;
    transition: ease .3s;
    
    &:hover{
        border: solid 2px teal;
        background: ${props => props.type === "plus" && "teal"};
        color: ${props => props.type === "plus" && "white"};
        transition: ease .3s;
    }

    ${midDesktop({ padding: "0 20px", height: "85%" })}
    ${laptop({ padding: "0 12px", height: "70%" })}
    ${bigTablet({ padding: "0 15px", height: "100%" })}
    ${tablet({ padding: "0 10px", height: "100%" })}

    `
const Qnt = styled.div`
    /* border: solid 1px; */
    font-size: 1.5rem;
    
    ${laptop({ fontSize: "1.3rem", })}
    ${tablet({ fontSize: "1.2rem" })}
    ${mobile({ fontSize: "1rem" })}
    `
const OrderBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0 0 2px 0 gray;
    border-radius: 10px;
    width: 35vw;
    height: 400px;
    position: sticky;
    top: 180px;
    right: 20px;

    ${laptop({ height: "300px", })}
    ${tablet({ position: "absolute", width: "auto", top: "auto", bottom: "10px", right: "10px", left: "10px", height: "150px" })}
    ${tablet({ letterSpacing: "1px", padding: "5px 10px", orderRadius: "5PX" })}
    ${mobile({ height: "120px", })}
    `
const SummaryText = styled.div`
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 0 0 lightgray;
    font-size: ${props => props.type === "total" ? "1.5rem" : "1rem"};
    font-weight: ${props => props.type === "total" ? "700" : "400"};

    ${midDesktop({ fontSize: "1.2rem" })}
    ${laptop({ fontSize: "1.1rem" })}
    ${bigTablet({ fontSize: ".9rem" })}
    ${tablet({ fontSize: ".9rem" })}
    ${mobile({ fontSize: ".7rem" })}
    `
const PayButton = styled.button`
    font-size: 1.3rem;
    width: 200px;
    margin: 0 auto;
    padding: 10px;
    border: solid 2px teal;
    color: teal;
    background: none;
    border-radius: 10px;
    cursor: pointer;
    transition: ease .3s;

    &:hover{
        color: white;
        background: teal;
        transition: ease .3s;
    }

    ${laptop({ fontSize: "1.1rem", padding: "7px", width: "150px", borderRadius: "5px" })}
    ${tablet({ fontSize: ".9rem", padding: "5px", border: "solid 1px", })}
    ${mobile({ fontSize: ".7rem", padding: "3px", width: "60px", })}
    `
const EmptyCart = styled.div`
    border: solid 1px #b8b8b8;
    border-radius: 10px;
    margin: auto;
    padding: 50px;
    font-size: 4rem;
    color: #b8b8b8;

    ${midDesktop({ fontSize: "3rem", })}
    ${laptop({ fontSize: "2.5rem", })}
    ${bigTablet({ fontSize: "2rem", padding: "30px" })}
    ${tablet({ fontSize: "1.5rem", })}
    ${mobile({ fontSize: "1rem", padding: "20px" })}
    `

function Cart(props) {

    const blocked = true // Prevent browser from navigating to checkout

    const navigate = useNavigate()

    const { products, addItemToCart, removeItemFromCart } = useContext(GlobalContext)

    const subtotal = products.reduce((acc, cur) => {
        return (cur.price * cur.units) + acc
    }, 0)

    const deliveryFee = subtotal >= 50 ? 0 : 9.99



    return (
        <CartPage>
            <Container>

                <Header>SEU CARRINHO</Header>

                {products.length > 0 &&
                    <Wrapper>
                        <Products>
                            {
                                products.map(product => {
                                    return (
                                        <Product key={product.title}>
                                            <Image src={product.image} />
                                            <Description>
                                                <Label>{product.title}</Label>
                                                <Price>R$ {product.price}</Price>
                                            </Description>
                                            <ButtonContainer>
                                                <CountButton onClick={() => removeItemFromCart(product)} type={"minus"}>
                                                    <Remove />
                                                </CountButton>
                                                <Qnt>{product.units}</Qnt>
                                                <CountButton onClick={() => addItemToCart(product)} type={"plus"}>
                                                    <Add />
                                                </CountButton>
                                            </ButtonContainer>
                                        </Product>
                                    )
                                })
                            }

                        </Products>

                        <OrderBox>
                            <Header>RESUMO DA COMPRA</Header>
                            <SummaryText>
                                <Label>Subtotal:</Label>
                                <Price>R$ {subtotal.toFixed(2)}</Price>
                            </SummaryText>
                            <SummaryText>
                                <Label>Taxa de Entrega:</Label>
                                <Price>{deliveryFee === 0 ? "Entrega Gratis" : `R$ ${deliveryFee}`}</Price>
                            </SummaryText>
                            <SummaryText type="total">
                                <Label>Total:</Label>
                                <Price>R$ {(subtotal + deliveryFee).toFixed(2)}</Price>
                            </SummaryText>
                            <PayButton onClick={() => !blocked && navigate('/payment')}>Pagar</PayButton>
                        </OrderBox>
                    </Wrapper>
                }

                {products.length === 0 &&
                    <EmptyCart>
                        Seu carrinho esta vazio!!!
                    </EmptyCart>
                }

            </Container>
        </CartPage>
    );
}

export default Cart;