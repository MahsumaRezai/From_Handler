import classes from './Butt.om.module.css'
const Button = (props) => {
    return (
        <button className={classes.btn} type={props.type || "submit"}>{props.children}</button>
    )
}
export default Button;