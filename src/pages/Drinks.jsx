import styled from "styled-components"
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
    
`

function Drinks(props) {
    return (
        <Container>
            <Slider filter={"drinks"} header={"Drinks"} />
            <Categories filter={"drinks"} header={"Drinks"} />
            <Newsletter />
        </Container>
    );
}

export default Drinks;