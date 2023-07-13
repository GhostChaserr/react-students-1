import { useContext} from 'react'

import CounterContext from '../contex'
const Cart = () => {
    const payload = useContext(CounterContext);
    return (
        <div>
            items: {payload.count}
        </div>
    )
}

export default Cart;
