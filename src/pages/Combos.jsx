import styled from "styled-components"
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Container = styled.div` 
    `

function Combos(props) {
    return (
        <Container>
            <Slider filter={"combos"} header={"Combos"} />
            <Categories filter={"combos"} header={"Combos"} />
            <Newsletter />
        </Container>
    );
}

export default Combos;