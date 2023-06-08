import styled from "styled-components"
import { Badge } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { ShoppingCartOutlined, Home, InfoOutlined as Info, AccountCircle as User, ArrowDropDown as Down, Menu } from "@mui/icons-material"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"
import { useContext, useState, useEffect, useRef } from "react"
import { GlobalContext } from "../context/GlobalState"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"


const Container = styled.div`
    box-sizing: border-box;
    background-color: white;
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
    display: flex;
    align-items: center;
    gap: 20px;

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
    padding: 8px;
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
    display: flex;
    flex-direction: column;
    min-width: 100px;
    width: 100%;
    top: 100%;
    position: absolute;

    ${mobile({ minWidth: "80px",})}
    `
const DropdownOption = styled.div`
    text-align: center;
    padding: 8px 15px;
    color: #36395A;
    border-radius: 5px;

    &:hover{
        background-color: #ececec;
    }

    ${bigTablet({ fontSize: ".8rem"})}
    ${mobile({ fontSize: ".6rem"})}

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
    display: flex;
    align-items: center;
    gap: 20px;

    ${mobile({ gap: "5px" })}

    `
const LoggedIn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    position: relative;
    cursor: pointer;   
    `


function Navbar(props) {

    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const { products } = useContext(GlobalContext)

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    const [isLogoutOpen, setIsLogoutOpen] = useState(false)

    let categoriesRef = useRef()
    let sideMenuRef = useRef()
    let logoutRef = useRef()

    const cartUnits = products?.reduce((acc, cur) => {
        return cur.units + acc
    }, 0)


    // Hide element if user clicks outside
    useEffect(() => {
        const isOutside = e => {
            !sideMenuRef.current.contains(e.target) && setIsSideMenuOpen(false)
            !categoriesRef.current.contains(e.target) && setIsCategoriesOpen(false)

            !logoutRef.current?.contains(e.target) && user && setIsLogoutOpen(false)
            // Getting error on clicking outside whe user is logged out
        }
        document.addEventListener("click", isOutside)
        return () => document.removeEventListener("click", isOutside)
    })

    function signUserOut() {
        signOut(auth)
    }


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
                    <Link to={"/"}>
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
                        E-Commerce
                    </Logo>
                </Center>

                <Right>

                    {
                        !user &&
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
                    }


                    {
                        user &&
                        <LoggedIn onClick={() => setIsLogoutOpen(prev => !prev)} ref={logoutRef}>
                            <User />
                            <Text>
                                {user?.email}
                            </Text>
                            {
                                isLogoutOpen &&
                                <DropdownBox>
                                    <DropdownBox>
                                        <DropdownOption onClick={() => navigate('/orders')}>Historico de pedidos</DropdownOption>
                                        <DropdownOption onClick={signUserOut}>Sair</DropdownOption>
                                    </DropdownBox>
                                </DropdownBox>
                            }
                        </LoggedIn>
                    }


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