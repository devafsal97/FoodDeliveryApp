import classes from './HeaderCartButton.module.css'
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
const CartButton = () => {
    return <button className={classes['header-button']}>
        <span>Your Cart</span>
        <span className={classes['header-button-count']}>3</span>
    </button>
}

export default CartButton;
