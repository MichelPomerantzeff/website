import styled from "styled-components";
import moment from "moment"
import { laptop, tablet, mobile } from "../responsiveness"



const OrderContainer = styled.div`
    border: solid 1px gray;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 10px;
    font-weight: 400;

    ${laptop({ fontSize: "1rem" })}
    ${tablet({ fontSize: ".9rem" })}
    ${mobile({ fontSize: ".7rem" })}

    `
const Header = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    `
const OrderNumber = styled.div`
    `
const DataFormat = styled.div`
    `
const Total = styled.div`
    `


function Order({ order }) {

    let total = order.data.products?.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)

    

    return (
        <OrderContainer>
            <Header>Pedido</Header>
            <OrderNumber><strong>Numero do pedido: </strong>{order?.id}</OrderNumber>
            <DataFormat><strong>Data e horario: </strong>{moment.unix(order?.data.created).format("MMMM Do YYYY, h:mma")}</DataFormat>
            
            {/* {order.data.products?.map(item => (
                <div>
                    {item.title}
                </div>
            ))} */}
        
            <Total><strong>Valor total: </strong>{total.toFixed(2)}</Total>


        </OrderContainer>
    );
}

export default Order;