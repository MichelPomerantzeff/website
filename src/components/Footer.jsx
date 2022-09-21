import styled from "styled-components"
import { Facebook, Instagram, WhatsApp, Twitter, Email, Phone, LocationOn, } from "@mui/icons-material"
import { laptop, bigTablet, tablet, mobile } from "../responsivity"

const Container = styled.div`
    background-color: #f1f1db;
    color: #36395A;
    `
const Box = styled.div`
    display: flex;
    justify-content: space-between;

    ${tablet({ flexDirection: "column" })}
    `
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    `
const Left = styled.div`
    /* background-color: red; */
    
    margin: 5px auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;

    ${laptop({ gap: "15px" })}
    ${bigTablet({ gap: "10px" })}
    ${tablet({ gap: "15px", boxShadow: "0 1.5px 0 0 lightgray", padding: "5px 50px" })}
    ${mobile({ gap: "10px", padding: "0 50px" })}
    `
const Title = styled.span`
    font-size: 1.2rem;
    text-align: center;
    
    ${laptop({ fontSize: "1rem" })}
    ${bigTablet({ fontSize: ".9rem" })}
    ${mobile({ fontSize:".8rem" })}
    `
const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;  

    ${laptop({ gap: "40px" })}
    ${bigTablet({ gap: "30px" })}
    ${tablet({ gap: "50px" })}
    ${mobile({ gap: "20px" })}
    
    `
const SocialMediaIcon = styled.div`
    color: ${props => props.name === "facebook" && "#2856b9"};
    color: ${props => props.name === "instagram" && "#fa8e37"};
    color: ${props => props.name === "whatsapp" && "#25d366"};
    color: ${props => props.name === "twitter" && "#1DA1F2"};
    cursor: pointer;
    transition: all .2s ease-in-out;
    transform: scale(2);  
    
    &:hover {
        color: white;
        background-color: ${props => props.name === "facebook" && "#2856b9"};
        background-color: ${props => props.name === "instagram" && "#fa8e37"};
        background-color: ${props => props.name === "whatsapp" && "#25d366"};
        background-color: ${props => props.name === "twitter" && "#1DA1F2"};
        box-shadow: ${props => props.name === "facebook" && "0 0 3px 5px #2856b9"};
        box-shadow: ${props => props.name === "instagram" && "0 0 3px 5px #fa8e37"};
        box-shadow: ${props => props.name === "whatsapp" && "0 0 3px 5px #25d366"};
        box-shadow: ${props => props.name === "twitter" && "0 0 3px 5px #1DA1F2"};
        border-radius: 3px;
        transition: all .1s ease-in-out;
        opacity: .9;  
    }  
    
    ${laptop({ transform: "scale(1.5)" })}
    ${bigTablet({ transform: "scale(1.3)" })}
    ${tablet({ transform: "scale(1.5)" })}
    ${mobile({ transform: "scale(1)" })}
    `
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${bigTablet({ fontSize: ".8rem" })}
    ${tablet({ marginBottom: "10px" })}
    ${mobile({ fontSize: ".65rem" })}
    `
const ContactBox = styled.div`
    display: flex;
    align-items: center;
    height: 50px;

    ${laptop({ height: "45px" })}
    ${bigTablet({ height: "35px" })}
    ${mobile({ height: "25px" })}
    `
const ContactIcon = styled.div`
    margin-right: 5px;

    ${mobile({ transform: "scale(.6)", margin: "0" })}
    `
const Text = styled.div`

    `
const CopyRight = styled.div`
    background-color: #f1f1db;
    height: 60px;
    font-size: 1.2rem;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2px 0 gray;

    ${bigTablet({ fontSize: "1rem", height: "50px" })}
    ${mobile({ fontSize: ".8rem", height: "45px" })}
    `

function Footer(props) {
    return (
        <Container>

            <Box>
                <Wrapper>
                    <Left>

                        <Title>Redes sociais</Title>

                        <IconsWrapper>
                            <SocialMediaIcon name={"facebook"} >
                                <Facebook />
                            </SocialMediaIcon>

                            <SocialMediaIcon name={"instagram"}>
                                <Instagram />
                            </SocialMediaIcon>

                            <SocialMediaIcon name={"whatsapp"}>
                                <WhatsApp />
                            </SocialMediaIcon>

                            <SocialMediaIcon name={"twitter"}>
                                <Twitter />
                            </SocialMediaIcon>
                        </IconsWrapper>

                    </Left>
                </Wrapper>

                <Wrapper>
                    <Right>
                        <ContactBox>
                            <ContactIcon>
                                <LocationOn />
                            </ContactIcon>
                            <Text>
                                Rua: Nome da Rua, 99 - Vila Mariana - Sao Paulo
                            </Text>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <Phone />
                            </ContactIcon>
                            <Text>
                                (11) 999 999 999
                            </Text>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <Email />
                            </ContactIcon>
                            <Text>
                                Quitandadageralda@hotmail.com
                            </Text>
                        </ContactBox>

                    </Right>
                </Wrapper>
            </Box>

            <CopyRight>
                &copy; Geralda Mattos 2022
            </CopyRight>

        </Container>
    );
}

export default Footer;