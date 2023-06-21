import styled from "styled-components"
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
    
`

function Food(props) {
    return (
        <Container>
            <Slider filter={"food"} header={"Food"} />
            <Categories filter={"food"} header={"Food"} />
            <Newsletter />
        </Container>
    );
}

export default Food;