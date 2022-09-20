import styled from "styled-components"
import { ArrowLeftOutlined as LeftArrow, ArrowRightOutlined as RightArrow, Remove as Minus } from "@mui/icons-material"
import { food, drinks, dessert, combos } from "../data"
import { useEffect, useState } from "react"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsivity"
import SliderItem from "./SliderItem"

const Container = styled.div`

    --items-per-screen: 4;
    
    display: flex;
    justify-content: center;
    color: #36395A;
    margin-top: 200px;

    ${mobile({ marginTop: "100px" })}
    `
const Box = styled.div`
    /* border: solid 1px red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1400px;
    
    overflow: hidden;
    
    
    ${midDesktop({ width: "1100px", height: "450px", })}
    ${laptop({ width: "880px", height: "350px", })}
    ${bigTablet({ width: "600px", height: "250px", })}
    ${tablet({ width: "420px", })}
    ${mobile({ width: "300px", height: "200px", })}
    `
const Top = styled.div`
    /* border: solid 1px green; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    `
const Header = styled.h1`
    font-size: 2rem;
    
    ${laptop({ fontSize: "1.7rem", })}
    ${bigTablet({ fontSize: "1.3rem", })}
    ${mobile({ fontSize: "1rem", })}
    `
const ButtonContainer = styled.div`
    /* border: solid 1px blue; */
    width: 20%;
    display: flex;
    gap: 20%;
    justify-content: center;
    transform: scale(1.5);

    ${laptop({ transform: "scale(1.2)" })}
    ${bigTablet({ transform: "scale(.9)" })}
    ${tablet({ transform: "scale(.7)" })}
    ${mobile({ transform: "scale(.5)" })}
    `
const ArrowButton = styled.button`
    display: flex;
    background: none;
    border-radius: 5px;
    border: solid 1px lightgray;
    color: #36395A;
    cursor: pointer;


    &:hover{ border: solid 1px #048a8a; color: teal; box-shadow: 0 0 3px 0 #4bdfdf}

    `
const Wrapper = styled.div`
    /* background-color: #b7b7cc; */
    
    display: flex;
    width: 100%;
    transform: translateX(${props => props.slideIndex * -100}%);    
    transition: .7s ease; 
    `
const BarContainer = styled.div`
    /* border: solid 1px; */
    display: flex;
    justify-content: center;
    `
const Bar = styled.div`
    background-color: ${props => props.slideIndex === props.index ? "black" : "lightgray"};
    height: 3px;
    width: 30px;
    margin: 5px;
    cursor: pointer;
    `

function Slider(props) {

    const [selector, setSelector] = useState([])
    const [slideIndex, setSlideIndex] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [itemsPerScreen, setItemsPerScreen] = useState(screenWidth < 600 ? 3 : 4)
    const [isArroVisible, setIsArrowVisible] = useState(true)

    // Set the slider category according to its type (food, drinks, dessert, combos)
    useEffect(() => {
        if (props.header === "Comida") {
            setSelector(food)
        } else if (props.header === "Bebidas") {
            setSelector(drinks)
        } else if (props.header === "Doces") {
            setSelector(dessert)
        } else {
            setSelector(combos)
        }
    }, [props.header])

    // Set direction of image slider
    function handleSlider(direction) {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0)
        } else if (direction === "right") {
            setSlideIndex(slideIndex < ((selector.length / itemsPerScreen) - 1) ? slideIndex + 1 : (Math.ceil((selector.length / itemsPerScreen)) - 1))
        }

    }

    // Define how many items will be displayed on the screen depending on its innerWidth
    function updateItemsDisplayed() {

        setScreenWidth(window.innerWidth)
        if (screenWidth < 600) {
            setItemsPerScreen(3)
        } else {
            setItemsPerScreen(4)
        }

    }
    useEffect(() => {
        window.addEventListener("resize", updateItemsDisplayed)
        return () => window.removeEventListener("resize", updateItemsDisplayed)
    })

    window.scrollTo({top:0})

    // Set quantity of progress bar displayed
    let bars = []
    let totalOfBars = Math.ceil(selector.length / itemsPerScreen)
    for (let i = 0; i < totalOfBars; i++) {
        bars.push(i)
    }


    return (
        <Container>
            <Box>
                <Top>
                    <Header>{props.header}</Header>
                    {

                        isArroVisible &&

                        <ButtonContainer>
                            <ArrowButton onClick={() => handleSlider("left")} direction="left">
                                <LeftArrow />
                            </ArrowButton>
                            <ArrowButton onClick={() => handleSlider("right")} direction="right">
                                <RightArrow />
                            </ArrowButton>
                        </ButtonContainer>
                    }
                </Top>
                <Wrapper slideIndex={slideIndex}>

                    {selector.map(item => (
                        <SliderItem itemsPerScreen={itemsPerScreen} key={item.title} item={item} />
                    ))}

                </Wrapper>
                <BarContainer>
                    {
                        bars.length > 1 &&
                        bars.map(i => (
                            <Bar onClick={() => setSlideIndex(i)} slideIndex={slideIndex} index={i} key={i} />
                        ))
                    }
                </BarContainer>
            </Box>
        </Container>
    );
}

export default Slider;