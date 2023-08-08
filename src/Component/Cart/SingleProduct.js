import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../store/slices/ProductSlice';
import { addToCart, getTotals } from '../store/slices/CartSlice';
import AddRemoveBtn from '../../SubComponents/AddRemoveBtn';
import Rating from '../../SubComponents/Rating';
import ResponsiveHeader from '../../SubComponents/ResponsiveNavbar';

const SingleProduct = () => {

    const { id } = useParams();
    // console.log("SP:" + id)
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    // console.log(cart)

    const product = useSelector((state) => state.products.product)
    // console.log(product)
    const handleAddToCart = (product) => {
        console.log('Add to cart')
        // console.log(product.title)
        dispatch(addToCart({ quantity, product }))
    }

    useEffect(() => {
        dispatch(singleProduct(id))
        // find id if item is already present get tottal count from here otherwise defautl value will be 1;
        const cartItem = cart.cartItems.find((e) => e.id === Number(id))
        if (cartItem) {
            setQuantity(cartItem.quantity)
        }
    }, [id]);

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch]);

    const [quantity, setQuantity] = useState(1);

    const handleDecreaseCart = () => {
        console.log('dec')
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    const handleIncreaseCart = () => {
        console.log('inc')
        setQuantity(quantity + 1)
    };

    return (
        <>
            <ResponsiveHeader />
            <div className="mainSingleProduct">
                <div className="containerSingleProduct">
                    <div className="imgContainerSingleProduct">
                        <img className="imgSingleProduct" src={product.image} alt={product.title}></img>
                    </div>
                    <div className="SingleProduct-section-text-container">
                        <div className='SingleProduct-section-text'>
                            <h1 className="SingleProduct-primary-heading">
                                {product.title}
                            </h1>
                            <p className="SingleProduct-primary-text">
                                {product.description}
                            </p>
                            <p>
                                {product.rating && <Rating rating={product.rating.rate} />}
                            </p>
                            <AddRemoveBtn
                                quantity={quantity}
                                increase={handleIncreaseCart}
                                decrease={handleDecreaseCart}
                            />
                        </div>
                        <div className='SingleProduct-bottom-buttons'>
                            <Link to={'/cart'}>
                                <button className="SingleProduct-addtocart-button" onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </button>
                            </Link>
                            <Link to={'/menu'} className="SingleProduct-continueshopping-button">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;