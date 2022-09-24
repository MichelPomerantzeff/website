import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import styled from "styled-components"
import { auth, db } from "../firebase"
import Order from "../components/Order"

const OrdersContainer = styled.div`
    border: solid 1px red;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const OrdersWrapper = styled.h1`
    display: flex;
    flex-wrap: wrap;
    `

const EmptyOrderList = styled.div`
    border: solid 1px lightgray;
    border-radius: 10px;
    color: lightgray;
    padding: 25px;
    margin: 25px;

    `


const b = styled.div``
const c = styled.div``

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
            <h1>Seus Pedidos</h1>
            <OrdersWrapper>

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