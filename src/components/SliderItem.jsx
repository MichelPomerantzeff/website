import styled from "styled-components"
import { Remove, Add } from "@mui/icons-material"
import { useState, useEffect, useContext } from "react"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsivity"

import { GlobalContext } from "../context/GlobalState"


const Card = styled.div`

    --card-margin: 5px;
    --items-per-screen: ${props => props.itemsPerScreen};

    border: solid 1px lightgray;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: all .1s ease-in-out;
    flex: 0 0 calc((100% / var(--items-per-screen)) - 2 * var(--card-margin));
    aspect-ratio: .8;
    overflow: hidden;
    margin: var(--card-margin);
    
    &:hover { box-shadow: 0 0 5px 0 gray; transform: translateY(-2px); transition: all .1s ease-in-out;}

    `
const ImgContainer = styled.div`
    width: 100%;
    height: 50%;
    `
const Image = styled.img`
    width: 100%;
    height: 100%;
    `
const Text = styled.div`
    margin-left: 20px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    height: 15%;
    
    ${midDesktop({ fontSize: "1rem", marginLeft: "15px", })}
    ${laptop({ fontSize: ".8rem", marginLeft: "10px", })}
    ${bigTablet({ fontSize: ".7rem", marginLeft: "8px", })}
    ${tablet({ fontSize: ".6rem", marginLeft: "6px", })}
    ${mobile({ fontSize: ".4rem", marginLeft: "4px", })}
    `
const ButtonContainer = styled.div`
    /* background-color: #adadad; */
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 5%;
    margin: auto;
    height: 40px;

    ${laptop({ height: "30px" })}
    ${bigTablet({ height: "25px" })}
    ${mobile({ height: "20px" })}
    `
const CountButton = styled.button`
    display: flex;
    display: ${props => props.icon === "minus" && props.isLargeButton === true ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    border: ${props => props.icon === "minus" ? "solid 2px lightgray" : "solid 2px teal"};
    border-radius: 5px;
    outline: none;
    background: none;
    font-weight: bold;
    color: teal;
    cursor: pointer;
    height: 100%;
    width: ${props => props.isLargeButton === true ? "100%" : "30%"};
    font-size: 1rem;
    transition: .2s ease  ;

    &:hover{ 
        border: ${props => props.icon === "minus" && "solid 2px teal"};
        background-color: ${props => props.icon === "plus" && "teal"};
        color: ${props => props.icon === "plus" && "white"};
    }

    &:active{ 
        background-color: ${props => props.icon === "plus" ? "#025555" : "#ebebeb"}; 
    }
   
    `
const CountIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    
    ${bigTablet({ transform: "scale(.7)" })}
    ${tablet({ transform: "scale(.6)" })}
    ${mobile({ transform: "scale(.5)" })}
    `
const ButtonText = styled.div`
    display: flex;
    flex: 1.5;
    display: ${props => props.isLargeButton === true ? "flex" : "none"};

    
    ${laptop({ fontSize: ".9rem" })}
    ${bigTablet({ fontSize: ".7rem" })}
    ${tablet({ fontSize: ".5rem" })}
    ${mobile({ fontSize: ".4rem" })}
    `
const AmountOfItems = styled.div`
    font-size: 1.4rem;
    display: ${props => props.isLargeButton === true ? "none" : "flex"};

    ${bigTablet({ fontSize: "1rem" })}
    ${tablet({ fontSize: ".8rem" })}
    ${mobile({ fontSize: ".6rem" })}
    `

function SliderItem(props) {

    const [isLargeButton, setIsLargeButton] = useState(true)
    const { addItemToCart, removeItemFromCart, products } = useContext(GlobalContext)
    const qnt = products.find(i => i.title === props.item.title)

    // 
    useEffect(() => {
        setIsLargeButton(qnt?.units > 0 ? false : true)
    }, [products.length])    

    return (
        <Card itemsPerScreen={props.itemsPerScreen}>
            <ImgContainer>
                <Image src={props.item.image} style={{ backgroundColor: `${props.item.bg}` }} />
            </ImgContainer>
            <Text>{props.item.title}</Text>
            <Text>R$ {props.item.price}</Text>

            <ButtonContainer>
                <CountButton onClick={() => removeItemFromCart(props.item) } isLargeButton={isLargeButton} icon={"minus"}>
                    <CountIcon><Remove /></CountIcon>
                </CountButton>
                <AmountOfItems isLargeButton={isLargeButton}>{qnt?.units}</AmountOfItems>
                <CountButton onClick={() => addItemToCart(props.item)} isLargeButton={isLargeButton} icon={"plus"}>
                    <CountIcon>
                        <Add />
                    </CountIcon>
                    <ButtonText isLargeButton={isLargeButton}>ADICIONAR</ButtonText>
                </CountButton>
            </ButtonContainer>

        </Card>
    );
}

export default SliderItem;