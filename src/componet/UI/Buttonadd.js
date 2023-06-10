const Button = (props) => {
    return (
        <button type={props.type || "submit"}>{props.children}</button>
    )
}
export default Button;