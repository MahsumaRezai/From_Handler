import classes from './Cart.module.css'
const Cart = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.cart}>{props.children}

            </div>
        </div>

    )

}
export default Cart;