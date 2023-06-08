import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import styled from "styled-components"
import { auth, db } from "../firebase"
import Order from "../components/Order"
import { bigTablet, tablet, mobile } from "../responsiveness"
import { Navigate } from "react-router-dom"


const OrdersContainer = styled.div`
    /* border: solid 1px red; */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
const Header = styled.h1`
    /* background: blue; */
    margin-top: 150px;
    ${bigTablet({ marginTop: "100px", fontSize: "1.5rem" })}
    ${mobile({ marginTop: "80px", fontSize: "1rem", })}
    `
const OrdersWrapper = styled.h1`
    /* background: green; */
    width: 100%;
    padding: 30px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    `
const OrderBox = styled.div`
    /* background: red; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    `
const EmptyOrderList = styled.div`
    border: solid 1px lightgray;
    border-radius: 10px;
    color: lightgray;
    padding: 50px;
    margin: auto;

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
            <Header>Orders history</Header>
            <OrdersWrapper>

                <OrderBox>
                    {!user && <Navigate to={'/'} />}

                    {
                        orders?.length > 0 ?
                            orders.map(order => (
                                <Order key={order.id} order={order} />
                            ))
                            :
                            <EmptyOrderList>
                                You have no orders yet
                            </EmptyOrderList>
                    }
                </OrderBox>

            </OrdersWrapper>
        </OrdersContainer>
    );
}

export default Orders;