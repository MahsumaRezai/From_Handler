import { Fragment } from "react";
import Button from "./Button";
import Cart from './Cart';
const AddCart = (props) => {
    return (
        <Fragment>

            <Cart>
                <Button onClick={props.onShowCart}>Form Submitaion</Button>
            </Cart>
        </Fragment>
    )

}
export default AddCart;