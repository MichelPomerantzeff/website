import styled from "styled-components"
import { midDesktop, laptop, bigTablet, tablet, mobile } from "../responsiveness"

const AboutPage = styled.div`
    flex: 1;
    display: flex;
    `
const Container = styled.div`
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
                Section dedicated to an explanation about the website (how it emerged, what the idea and/or focus of the business is, target audience, and more).
                </Text>
            </Container>
        </AboutPage>
    );
}

export default About;