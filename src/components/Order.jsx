import styled from "styled-components";
import moment from "moment"


const OrderContainer = styled.div`
    border: solid 1px gray;
    margin: auto;
    font-size: 1rem;
    padding: 20px;
    `
const Header = styled.h2`
    
    `

function Order({ order }) {

    let total = order.data.products?.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)

    

    return (
        <OrderContainer>
            <Header>Pedido</Header>
            <p>{moment.unix(order?.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p><small>{`Numero do pedido: ${order?.id}`}</small></p>
            {/* {order.data.products?.map(item => (
                <div>
                    {item.title}
                </div>
            ))} */}
        
            {`Valor total: ${total.toFixed(2)}`}


        </OrderContainer>
    );
}

export default Order;