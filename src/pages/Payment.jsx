import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalState"
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js"
import axios from "../axios"
import { auth, db } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { bigTablet, tablet, mobile } from "../responsiveness"
import { ArrowBack } from "@mui/icons-material"


const PaymentPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    `
const PaymentContainer = styled.div`
    /* background-color: skyblue; */
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    `
const Header = styled.div`
    background-color: rgb(217, 34, 74);
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
    flex-wrap: wrap;
    
    `
const Logo = styled.div`
    font-size: 2.5rem;

    ${bigTablet({ fontSize: "2rem", })}
    ${tablet({ fontSize: "1.6rem", })}
    ${mobile({ fontSize: "1rem", })}
    `
const Text = styled.div`
    font-size: 1.2rem;

    ${bigTablet({ fontSize: "1rem", })}
    ${tablet({ fontSize: ".9rem", })}
    ${mobile({ fontSize: ".7rem", })}
    `
const Icon = styled.div`
    transform: scale(.9);
    margin-right: 5px;

    ${mobile({ transform: "scale(.6)", marginRight: "0" })}
    `
const GoBack = styled.a`
    margin: 50px 100px;
    cursor: pointer;
    font-weight: bold;
    color: teal;
    font-size: 1rem;
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }

    ${bigTablet({margin: "30px 50px", fontSize: ".7rem" })}
    ${mobile({ margin: "20px", fontSize: ".7rem" })}
    `
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: solid 1px lightgray;
    border-radius: 10px;
    
    width: 450px;
    height: 250px;

    ${tablet({ width: "350px", height: "200px" })}    
    ${mobile({ width: "280px", height: "150px" })}    
    `
const Input = styled.input`
    box-shadow: 0 2px 0 0 lightgray;
    border: none;
    outline: none;
    padding: 10px 5px;
    width: 90%;
    font-size: 1.3rem;

    &:focus, &:hover{
        box-shadow: 0 2px 0 0 gray;
    }

    ${tablet({ fontSize: "1rem", })}
    ${mobile({ fontSize: ".8rem", })}
    `
const Form = styled.form`
    /* background: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `
const CardDetails = styled.div`
    border: solid 1px lightgray;
    border-radius: 10px;
    width: 90%;
    padding: 15px;
    margin-bottom: 20px;

    ${tablet({ borderRadius: "5px", padding: "10px" })}
    ${mobile({ padding: "7px" })}
    `
const Button = styled.button`
    font-size: 1.5rem;
    padding: 5px 20px;
    border-radius: 5px;

    cursor: ${props => props.status !== true && "pointer"};
    border: solid 1px ${props => props.status !== true && "teal"}; 
    color: ${props => props.status !== true && "white"}; 
    background: ${props => props.status !== true && "teal"}; 

    ${bigTablet({ fontSize: "1.2rem", })}
    ${tablet({ fontSize: ".9rem", padding: "4px 13px" })}
    ${mobile({ borderRadius: "3px", padding: "2px 10px" })}
    `

function Payment(props) {

    const { products, emptyCart } = useContext(GlobalContext)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    let total = products.reduce((acc, cur) => {
        return (cur.price * cur.units) + acc
    }, 0).toFixed(2)

    let cart = products?.reduce((acc, cur) => {
        return cur.units + acc
    }, 0)

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // Generate a client secret to charge a custumer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe expects the total in 
                url: `/payment/create?total=${total * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [cart])

    console.log('The secret is:', clientSecret)

    const handleSubmit = async e => {
        // do all the fancy stripe stuff
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)

                .set({  // I Set allow read, write: if true; On firebase ... (Initialy it was set to false) So code works!!!
                    products: products,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            emptyCart()

            navigate("/orders", { replace: true })
        })
    }

    const handleChange = e => {
        // Listen for changes in the Card Element
        // And display any error as the user types their card number
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    return (

        <PaymentPage>

            <Header>
                <Logo>LOGO</Logo>
                <Text><strong>{cart} {cart > 1 ? "produtos" : "produto"}</strong> no carrinho</Text>
                <Text>Total a pagar: <strong>R$ {total}</strong></Text>
            </Header>

            <GoBack onClick={() => navigate("/cart", { replace: true })}>
                <Icon>
                    <ArrowBack />
                </Icon>
                VOLTAR
            </GoBack>

            <PaymentContainer>


                <Card>
                    <Text>Dados do cartao</Text>
                    <Input placeholder="Titular do cartao" required/>
                    <Form onSubmit={handleSubmit}>
                        <CardDetails>
                            <CardElement onChange={handleChange} />
                        </CardDetails>
                        {error && <div>{error}</div>}
                        <Button
                            disabled={processing || disabled || succeeded}
                            status={disabled}
                        >
                            <span>
                                {processing ? <p>Processing</p> : "Pagar"}
                            </span>
                        </Button>
                    </Form>
                </Card>
            </PaymentContainer>
        </PaymentPage>
    );
}

export default Payment;