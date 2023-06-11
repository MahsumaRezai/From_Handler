import classes from './open.module.css';
import { Fragment } from 'react';
const OpenCart = (props) => {
    return (
        <Fragment>
            <div className={classes.cart}>
                <form className={classes.form}>
                    <label className={classes.label}>Name</label>
                    <input className={classes.input}></input>
                    <label className={classes.label}>Email</label>
                    <input className={classes.input}></input>
                    <label className={classes.label}>Password</label>
                    <input className={classes.input}></input>
                    <label className={classes.label}>PhoneNumber</label>
                    <input className={classes.input}></input>
                    <div className={classes.btn}>
                        <button className={classes.btns}>submit</button>
                        <button className={classes.btns}>close</button>
                    </div>

                </form>
            </div>
        </Fragment>
    )


}
export default OpenCart;