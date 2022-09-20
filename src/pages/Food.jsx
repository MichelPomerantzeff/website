import styled from "styled-components"
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
    
`

function Food(props) {
    return (
        <Container>
            <Slider filter={"food"} header={"Comida"} />
            <Categories filter={"food"} header={"Comida"} />
            <Newsletter />
        </Container>
    );
}

export default Food;