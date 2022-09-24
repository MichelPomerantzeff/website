import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import styled from "styled-components"
import { auth, db } from "../firebase"
import Order from "../components/Order"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"
import { Navigate } from "react-router-dom"


const OrdersContainer = styled.div`
    /* border: solid 1px red; */
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    `
const Header = styled.h1`
    
    margin: 20px;

    ${bigTablet({ fontSize: "1.5rem" })}
    ${mobile({ fontSize: "1rem", })}
    `

const OrdersWrapper = styled.h1`
    display: flex;
    flex-wrap: wrap;
    `

const EmptyOrderList = styled.div`
    border: solid 1px lightgray;
    border-radius: 10px;
    color: lightgray;
    padding: 50px;


    ${bigTablet({ fontSize: "1.2rem" })}
    ${tablet({ fontSize: "1rem", padding: "35px" })}
    ${mobile({ fontSize: ".7rem", padding: "25px" })}
    `

function Orders(props) {

    const [user] = useAuthState(auth)

    const [orders, setOrders] = useState([])
    

    useEffect(() => {
        if (user) {
            db
                .collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        } else {
            setOrders([])
        }



    }, [user])

    return (
        <OrdersContainer>
            <Header>Seus Pedidos</Header>
            <OrdersWrapper>

                {
                    !user && <Navigate to={'/'}/>
                }

                {
                    orders?.length > 0 ?
                        orders.map(order => (
                            <Order key={order.id} order={order} />
                        ))
                        :
                        <EmptyOrderList>
                            Voce ainda nao tem nenhum pedido realizado !!!
                        </EmptyOrderList>
                }

            </OrdersWrapper>
        </OrdersContainer>
    );
}

export default Orders;