import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, decreaseCart, getTotals, increaseCart, removeFromCart } from '../store/slices/CartSlice';
import Rating from '../../SubComponents/Rating';
import ResponsiveHeader from '../../SubComponents/ResponsiveNavbar';
import FullScreenDialog from '../../SubComponents/FullScreenDialog';

const Shoppingcart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleAddToCart = (cartItem) => {
        dispatch(increaseCart(cartItem))
    }

    const handleClearCart = (cartItem) => {
        dispatch(clearCart(cartItem))
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        // console.log('first Render');
        setOpen(true);
        // console.log(open);
        // return (
        //     <FullScreenDialog open={open} handleClose={handleClose}/>
        // )
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ResponsiveHeader />
            <div className='cart-container'>
                <h2>Shopping Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <>
                        <p> Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/menu">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <div className="titles">
                                <h3 className="product-title">Product</h3>
                                <h3 className="price">Price</h3>
                                <h3 className="quantity">Quantity</h3>
                                <h3 className="total">Total</h3>
                            </div>
                            <div className="cart-items">
                                {cart.cartItems &&
                                    cart.cartItems.map((cartItem) => (
                                        <React.Fragment key={cartItem.id}>
                                            <div className="cart-item" >
                                                <div className="cart-product">
                                                    <img src={cartItem.image} alt={cartItem.title} />
                                                    <div>
                                                        <h3>{cartItem.title}</h3>
                                                        <p>{cartItem.category}</p>
                                                        <p><Rating rating={cartItem.rate} /></p>
                                                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart-product-price">${cartItem.price}</div>
                                                <div className="cart-product-quantity">
                                                    <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                                    <div className="count">{cartItem.quantity}</div>
                                                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                                </div>
                                                <div className="cart-product-total-price">
                                                    ${(cartItem.price * cartItem.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                            </div>
                            <div className="cart-summary">
                                <button className="clear-btn" onClick={() => handleClearCart()}>
                                    Clear Cart
                                </button>
                                <div className="cart-checkout">
                                    <div className="subtotal">
                                        <span>Subtotal</span>
                                        <span className="amount">${(cart.cartTotalAmount).toFixed(2)}</span>
                                    </div>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    {/* <Link to={'/shippingform'}>
                                        <button className="cart-checkout-secondary-button" >
                                            Check Out
                                        </button>
                                    </Link> */}
                                    <div>
                                        <button className="cart-checkout-secondary-button" onClick={handleClickOpen}>
                                            Check Out
                                        </button>
                                        <FullScreenDialog open={open} handleClose={handleClose} />
                                    </div>
                                    <div className="continue-shopping">
                                        <Link to="/menu">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-arrow-left"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                />
                                            </svg>
                                            <span>Continue Shopping</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Shoppingcart;