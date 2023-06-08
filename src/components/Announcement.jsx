import styled from "styled-components"
import { bigTablet, tablet, mobile } from "../responsiveness"

const Container = styled.div`
    background-color: teal;
    color: white;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    ${bigTablet({ fontSize: ".8rem", height: "20px" })}
    ${tablet({ fontSize: ".7rem" })}    
    ${mobile({ fontSize: ".55rem", height: "15px" })}
`

function Announcement(props) {
    return (
        <Container>
            Great Deal! Free delivery for orders over €50
        </Container>
    );
}

export default Announcement;