import styled from "styled-components"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 420px;
    width: 300px;
    margin: 20px;
    opacity: .8;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 5px;

    ${bigTablet({ width: "250px", height: "370px", margin: "15px"})}
    ${tablet({ width: "180px", height: "280px" })}
    ${mobile({ width: "130px", height: "190px", margin: "5px", })}
    
    `
const Image = styled.img`
    width: 100%;
    height: 100%;
    transition: all .3s ease-in-out;

    &:hover{
        transform: scale(1.2);
        transition: all .3s ease-in-out;
    }
    `
const Title = styled.div`
    position: absolute;
    font-size: 4rem;
    color: white;
    pointer-events: none;
    text-shadow: 1px 1px 4px black;


    ${midDesktop({ fontSize: "3.8rem" })}
    ${laptop({ fontSize: "3.5rem" })}
    ${bigTablet({ fontSize: "3rem" })}
    ${tablet({ fontSize: "2.5rem" })}
    ${mobile({ fontSize: "1.8rem" })}
    `

function CategoryItem({ item }) {
    return (
        <Container>
            <Image src={item.image} />
            <Title >
                {item.title}
            </Title>
        </Container>
    );
}

export default CategoryItem;