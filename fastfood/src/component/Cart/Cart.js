import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart =(props)=>{

    const cartItem=(
        <ul>
            {[
                {id:'c1', name:'Dabeli', amount:2, price:20 }
            ].map((item)=><li>{item.name}</li>)}
        </ul>
    )

    return(
        <Modal>
            {cartItem }
            <div className={classes.total}>
                <span>Total Amount</span>
                <span> 110 </span>
            </div>
            <div className={classes.actions }>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button }>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;