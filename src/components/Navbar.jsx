import styled from "styled-components"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"
import { ShoppingCartOutlined, Home, InfoOutlined as Info, AccountCircle as User, ArrowDropDown as Down, Menu } from "@mui/icons-material"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsivity"
import { useContext, useState, useEffect, useRef } from "react"
import { GlobalContext } from "../context/GlobalState"


const Container = styled.div`
    box-sizing: border-box;
    background-color: #f1f1db;
    box-shadow: 0 0 5px 0 gray;
    color: #36395A;
    height: 70px;
    position: fixed;
    top: 25px;
    left: 0;
    right: 0;
    z-index: 3;

    ${midDesktop({ height: "60px" })}
    ${bigTablet({ top: "20px", height: "50px" })}
    ${mobile({ height: "40px", top: "15px", })}
    `
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 20px;

    ${midDesktop({ padding: "0 5px", })}
    `
const MenuIcon = styled.div`
    display: none;
    position: relative;
    cursor: pointer;

    ${bigTablet({ display: "flex" })}
    `
const SideMenu = styled.div`
    background-color: white;
    border: solid 1px lightgray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 30px; 
    /* display: none; */

    ${mobile({ top: "25px" })}

    `
const SideMenuOption = styled.span`
    padding: 0 30px;
    font-weight: 600;
    font-size: .75rem;
    cursor: pointer;
    color: #36395A;

    &:hover{
        background-color: #007FFF;
        color: white;
    }
    `
const Left = styled.div`
    /* background-color: blue; */
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${bigTablet({ display: "none" })}
    `
const MenuItem = styled.button`
    display: flex;
    border: none;
    background: none;
    align-items: center;
    color: #36395A;
    font-weight: 600;
    border-radius: 10px;
    padding: 5px;
    position: relative;
    cursor: pointer;

    &:hover{
        background-color: #dfdede;
    }
    `
const DropdownBox = styled.div`
    background-color: white;
    box-shadow: 0 0 5px 0 gray;
    border-radius: 5px;
    top: 100%;
    position: absolute;
    `
const DropdownOption = styled.div`
    padding: 10px 50px;
    color: #36395A;
    
    &:hover{
        background-color: #007FFF;
        color: white;
    }
    `
const Text = styled.div`
    ${bigTablet({ display: "none" })}
    `
const Icon = styled.div`
    `
const Center = styled.div`
    flex: 1;
    text-align: center;
    /* background-color: green; */
    `
const Logo = styled.h1`
    ${midDesktop({ fontSize: "1.8rem" })}
    ${laptop({ fontSize: "1.5rem" })}
    ${bigTablet({ fontSize: "1.2rem" })}
    ${tablet({ fontSize: "1rem" })}
    ${mobile({ fontSize: ".7rem" })}
    `
const Right = styled.div`
    /* background-color: red; */
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    `

function Navbar(props) {

    const { products } = useContext(GlobalContext)

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    let sideMenuRef = useRef()
    let categoriesRef = useRef()

    const cartUnits = products?.reduce((acc, cur) => {
        return cur.units + acc
    }, 0)


    // Hide element if user clicks outside
    useEffect(() => {
        const isOutside = e => {
            !sideMenuRef.current.contains(e.target) && setIsSideMenuOpen(false)
            !categoriesRef.current.contains(e.target) && setIsCategoriesOpen(false)
        }
        document.addEventListener("click", isOutside)
        return () => document.removeEventListener("click", isOutside)
    })


    return (
        <Container>
            <Wrapper>



                <MenuIcon >
                    <Menu onClick={() => setIsSideMenuOpen(prev => !prev)} ref={sideMenuRef} />

                    {
                        isSideMenuOpen &&

                        < SideMenu >
                            <Link to={"/"}>
                                <SideMenuOption>Inicio</SideMenuOption>
                            </Link>

                            <Link to={"/about"}>
                                <SideMenuOption>Sobre</SideMenuOption>
                            </Link>

                            <Link to={"/food"}>
                                <SideMenuOption>Comida</SideMenuOption>
                            </Link>

                            <Link to={"/drinks"}>
                                <SideMenuOption>Bebidas</SideMenuOption>
                            </Link>

                            <Link to={"/dessert"}>
                                <SideMenuOption>Doces</SideMenuOption>
                            </Link>

                            <Link to={"/combos"}>
                                <SideMenuOption>Combos</SideMenuOption>
                            </Link>

                        </SideMenu>
                    }

                </MenuIcon>
                <Left>
                    <Link onClick={() => window.scrollY(0)} to={"/"}>
                        <MenuItem>
                            <Icon>
                                <Home />
                            </Icon>
                            <Text>INICIO</Text>
                        </MenuItem>
                    </Link>

                    <Link to={"/about"}>
                        <MenuItem>
                            <Icon>
                                <Info />
                            </Icon>
                            <Text>SOBRE</Text>
                        </MenuItem>
                    </Link>

                    <MenuItem onClick={() => setIsCategoriesOpen(prev => !prev)} ref={categoriesRef} >
                        <Icon>
                            <Down />
                        </Icon>
                        <Text>CATEGORIAS</Text>

                        {
                            isCategoriesOpen &&

                            <DropdownBox>
                                <Link to={"/food"}>
                                    <DropdownOption>Comida</DropdownOption>
                                </Link>

                                <Link to={"/drinks"}>
                                    <DropdownOption>Bebidas</DropdownOption>
                                </Link>
                                <Link to={"/dessert"}>
                                    <DropdownOption>Doces</DropdownOption>
                                </Link>
                                <Link to={"/combos"}>
                                    <DropdownOption>Combos</DropdownOption>
                                </Link>
                            </DropdownBox>
                        }
                    </MenuItem>

                </Left>

                <Center>
                    <Logo>
                        QUITANDA DA GERALDA
                    </Logo>
                </Center>

                <Right>

                    <Link to={"/login"}>
                        <MenuItem>
                            <Icon>
                                <User />
                            </Icon>
                            <Text>
                                LOGIN
                            </Text>
                        </MenuItem>
                    </Link>

                    <Link to={"/cart"}>
                        <MenuItem>
                            <Badge badgeContent={cartUnits} color="primary">
                                <Icon>
                                    <ShoppingCartOutlined />
                                </Icon>
                            </Badge>
                            <Text>
                                CARRINHO
                            </Text>
                        </MenuItem>
                    </Link>
                </Right>

            </Wrapper>
        </Container >
    );
}

export default Navbar;