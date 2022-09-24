import styled from "styled-components"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"

const AboutPage = styled.div`
    `
const Container = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    margin: auto;
    `
const Text = styled.h1`
    width: 80%;
    font-size: 3rem;
    margin: auto;
    letter-spacing: 1px;
    word-spacing: 5px;

    ${midDesktop({ fontSize: "2.7rem" })}
    ${laptop({ fontSize: "2.2rem" })}
    ${bigTablet({ fontSize: "1.8rem" })}
    ${tablet({ fontSize: "1.4rem" })}
    ${mobile({ fontSize: "1rem" })}
    `

function About(props) {
    return (
        <AboutPage>
            <Container>
                <Text>
                    Area dedicada a uma explicacao sobre a Quitanda da Geralda (como surgiu, qual eh a ideia e/ou foco do negocio, publico alvo e coisas do genero).
                </Text>
            </Container>
        </AboutPage>
    );
}

export default About;