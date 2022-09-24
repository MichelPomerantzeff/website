import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { Link } from "react-router-dom"
import { tablet, mobile } from "../responsiveness"

const Container = styled.div`
    background: ${props => props.bg === "home" ? "none" : "#e6f1f3"};
    display: flex;
    justify-content: center;
    padding: 50px 0;
    margin-top: 150px;
    flex-wrap: wrap;

    ${tablet({ marginTop: "100px", })}
    ${mobile({ marginTop: "60px", })}
`

function Categories(props) {

    return (
        <Container bg={props.bg}>
            {categories.map(item => {
                return (
                    props.filter !== item.id &&
                    <Link key={item.id} to={`/${item.id}`}>
                        <CategoryItem item={item} />
                    </Link>
                )
            })}
        </Container>
    );
}

export default Categories;