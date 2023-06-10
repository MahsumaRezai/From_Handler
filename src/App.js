import AddCart from "./componet/AddCart";
import { Fragment, useState } from "react";
import OpenCart from "./componet/OpenCart";


const App = (props) => {

  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <Fragment>
      <div>
        <AddCart onShowCart={showCartHandler} />
        {cartIsShow && <OpenCart onClose={hideCartHandler} />}

      </div>
    </Fragment>
  )

}
export default App;