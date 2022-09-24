import { useEffect } from "react";
import styled from "styled-components"
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Container = styled.div`   
`

function Home() {

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <Container>
            <Categories bg={"home"} />
            <Newsletter bg={"home"} />
        </Container>
    );
}

export default Home;