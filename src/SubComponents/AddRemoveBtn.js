import React from 'react'

const AddRemoveBtn = ({ quantity, increase, decrease }) => {
    return (
        <div>
            <div className="cart-product-AddRemove">
                <button onClick={decrease}>-</button>
                <div>{quantity}</div>
                <button onClick={increase}>+</button>
            </div>

        </div>
    )
}

export default AddRemoveBtn