import styled from "styled-components"
import { Facebook, Instagram, WhatsApp, Twitter, Email, Phone, LocationOn, } from "@mui/icons-material"
import { laptop, bigTablet, tablet, mobile } from "../responsiveness"
import { downloadAppImages } from "../data"

const Container = styled.div`
    background-color: #f1f1db;
    color: #36395A;
    `
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;

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
    ${tablet({ gap: "15px", padding: "5px 50px" })}
    ${mobile({ gap: "10px", padding: "0 50px" })}
    `
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    ${bigTablet({ fontSize: ".8rem" })}
    ${tablet({ marginBottom: "10px" })}
    ${mobile({ fontSize: ".65rem" })}
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
    gap: 30px;  

    ${mobile({ gap: "20px" })}
    `
const SocialMediaIcon = styled.div`
    cursor: pointer;
    transition: all .2s ease-in-out;
    transform: scale(1.2);  
    
    &:hover {
        color: ${props => props.name === "facebook" && "#2856b9"};
        color: ${props => props.name === "instagram" && "#fa8e37"};
        color: ${props => props.name === "whatsapp" && "#25d366"};
        color: ${props => props.name === "twitter" && "#1DA1F2"};
        border-radius: 3px;
        transition: all .1s ease-in-out;
        opacity: .9;  
    }  
    
    ${laptop({ transform: "scale(1.5)" })}
    ${bigTablet({ transform: "scale(1.3)" })}
    ${tablet({ transform: "scale(1.5)" })}
    ${mobile({ transform: "scale(1)" })}
    `
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    ${tablet({ padding: "40px 0" })}
    ${mobile({ fontSize: ".65rem" })}
    `
const DownloadAppWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;  

    ${mobile({ gap: "20px" })}
    `
const DownloadAppImage = styled.img`

    &:hover {
        cursor: pointer;
    }

    ${laptop({ width: "100px"})}
    
    `

const ContactBox = styled.div`
    display: flex;
    align-items: center;
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

                        <Title>Social Medias</Title>

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
                    <Center>

                        <Title>Download our app</Title>

                        <DownloadAppWrapper>

                            {downloadAppImages.map(img => (
                                <DownloadAppImage src={img.image} key={img.id} />
                            ))}
                            
                        </DownloadAppWrapper>

                    </Center>
                </Wrapper>

                <Wrapper>
                    <Right>
                        <ContactBox>
                            <ContactIcon>
                                <LocationOn />
                            </ContactIcon>
                            <Text>
                                99 Street Name - City 
                            </Text>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <Phone />
                            </ContactIcon>
                            <Text>
                                +99 999 999 999
                            </Text>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <Email />
                            </ContactIcon>
                            <Text>
                                ecommerce@example.com
                            </Text>
                        </ContactBox>

                    </Right>
                </Wrapper>
            </Box>

            <CopyRight>
                &copy; All rights reserved 2022
            </CopyRight>

        </Container>
    );
}

export default Footer;