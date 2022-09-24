import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalState"
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js"
import axios from "../axios"
import { auth, db } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"



const PaymentContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `
const PaymentProduct = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-top: 50px;
    
    `
const Input = styled.input`
    box-shadow: 0 2px 0 0 lightgray;
    border: none;
    outline: none;
    padding: 10px 5px;
    width: 90%;
    `
const Form = styled.form`
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
    const [processing, setProcessing] = useState("")
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
        <PaymentContainer>

            <PaymentProduct>
                <span>{cart} {cart > 1 ? "produtos" : "produto"}</span>
                <span>Total a pagar: R$ {total}</span>
            </PaymentProduct>

            <Card>
                <Input placeholder="Titular do cartao" />
                <Form onSubmit={handleSubmit}>
                    <CardDetails>
                        <CardElement onChange={handleChange} />
                    </CardDetails>
                    {error && <div>{error}</div>}
                    <button
                        disabled={processing || disabled || succeeded}>
                        <span>
                            {processing ? <p>Processing</p> : "Buy Now"}
                        </span>
                    </button>
                </Form>
            </Card>



        </PaymentContainer>
    );
}

export default Payment;