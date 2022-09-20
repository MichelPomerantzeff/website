import styled from "styled-components"
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Container = styled.div`   
    `

function Dessert(props) {
    return (
        <Container>
            <Slider filter={"dessert"} header={"Doces"} />
            <Categories filter={"dessert"} header={"Doces"} />
            <Newsletter />
        </Container>
    );
}

export default Dessert;