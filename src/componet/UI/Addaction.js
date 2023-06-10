import Button from "./Buttonadd";
import Cart from "./Cart";
import { useState } from "react";
import ButtonClose from './ButtonClose';
import classes from './Addactiom.module.css'
const Addaction = (props) => {

    const [show, setSahow] = useState(false);
    const showHandler = () => {
        setSahow(true)

    }
    const hideHandler = () => {
        setSahow(false)
    }
    return (
        <Cart>
            {show}
            <form className={classes.form}>
                <Button onCilk={showHandler}>Send me</Button>
                <ButtonClose onCilk={hideHandler}>close me</ButtonClose>

                
            </form>

        </Cart>
    )
}
export default Addaction;