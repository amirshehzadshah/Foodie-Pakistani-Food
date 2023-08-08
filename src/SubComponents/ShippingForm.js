import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Rating from './Rating';
import { Box, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { orderSchema } from '../Schemas';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import AlertDialog from './OrderAlertDialog';
import { toast } from 'react-toastify';
import { clearCart } from '../Component/store/slices/CartSlice';


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+92 000-0000000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { id: props.id, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const initialValues = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  shippingAddress: "",
  additionalRequest: "",
};

const ShippingForm = () => {
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  const taxes = cart.cartTotalAmount / 100 * 16;
  // console.log('Tax: ' + taxes)
  const shippingcharges = 20;
  // console.log('Shipping Charges: ' + shippingcharges)
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: orderSchema,
    onSubmit: (values, action) => {
      // const valueform = values;
      // console.log(values);
      console.log("1 OnSubmit" + open)
      handleClickOpen();
      console.log("2 OnSubmit" + open)
      // action.resetForm();
      // console.log(values.name);
      // action.setOpen(true);
    }
  })

  
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    console.log("3 ClickOpen" + open)
    setOpen(true);
    console.log("4 ClickOpen" + open)
  };

  const handleClose = (cartItem) => {
    console.log("5 ClickClose" + open)
    resetForm();
    console.log("6 ClickClose" + open)
    setOpen(false);
    console.log("7 ClickClose" + open)
    dispatch(clearCart(cartItem))
    toast.success(`Order Done !`, { position: "top-center", theme: 'dark' })
  };


  return (
    <>
      {/* <ResponsiveHeader /> */}
      <div className='shipping-cart-container'>
        {/* <h2><BsCart3 /> Product Order Form</h2> */}
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="shipping-cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <React.Fragment key={cartItem.id}>
                  <div className="shipping-cart-item" >
                    <div className="shipping-cart-product">
                      <img src={cartItem.image} alt={cartItem.title} />
                      <div>
                        <h3>{cartItem.title}</h3>
                        <p>{cartItem.category}</p>
                        <p><Rating rating={cartItem.rate} /></p>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="shipping-cart-product-quantity">
                      <div className="count">{cartItem.quantity}</div>
                    </div>
                    <div className="shipping-cart-product-total-price">
                      ${(cartItem.price * cartItem.quantity).toFixed(2)}
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
          <div className="shipping-cart-summary">
            <div className="shipping-cart-checkout">
              <div className="shipping-subtotal">
                <span>Subtotal</span>
                <span className="amount">${(cart.cartTotalAmount).toFixed(2)}</span>
              </div>
              <p>Include Taxes and shipping Charges</p>
              <div className="shipping-subtotal">
                <span>Taxes</span>
                <span className="amount">${(taxes).toFixed(2)}</span>
              </div>
              <div className="shipping-subtotal">
                <span>Shipping Charges</span>
                <span className="amount">${(shippingcharges).toFixed(2)}</span>
              </div>
              <div className="shipping-total">
                <span>Total</span>
                <span className="amount">${(cart.cartTotalAmount + taxes + shippingcharges).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <h2>Shipping Form</h2>
        <form onSubmit={handleSubmit} className='shipping-cart-form-container'>
          <Box component="form" className="shipping-section-card-input">
            <TextField
              id="name"
              label={errors.name && touched.name ? (<p className="form-error">{errors.name}</p>) : "Name"}
              variant="outlined"
              type="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className='shipping-section-card-textfield' />
          </Box>
          <Box component="form" className="shipping-section-card-input">
            <TextField
              id="emailAddress"
              placeholder="abc@xy.z"
              label={errors.emailAddress && touched.emailAddress ? (<p className="form-error">{errors.emailAddress}</p>) : "Email Address"}
              variant="outlined"
              type="emailAddress"
              value={values.emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              className='shipping-section-card-textfield' />
          </Box>
          <Box component="form" className="shipping-section-card-input">
            <TextField
              id="phoneNumber"
              label={errors.phoneNumber && touched.phoneNumber ? (<p className="form-error">{errors.phoneNumber}</p>) : "Phone Number"}
              variant="outlined"
              type="phoneNumber"
              InputProps={{ inputComponent: TextMaskCustom }}
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className='shipping-section-card-textfield' />
          </Box>
          <Box component="form" className="shipping-section-card-input">
            <TextField
              id="shippingAddress"
              multiline
              label={errors.shippingAddress && touched.shippingAddress ? (<p className="form-error">{errors.shippingAddress}</p>) : "Shipping Address"}
              variant="outlined"
              type="shippingAddress"
              value={values.shippingAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              className='shipping-section-card-textfield' />
          </Box>
          <Box component="form" className="shipping-section-card-input">
            <TextField
              id="additionalRequest"
              multiline
              label={errors.additionalRequest && touched.additionalRequest ? (<p className="form-error">{errors.additionalRequest}</p>) : "Additional Request"}
              variant="outlined"
              type="additionalRequest"
              value={values.additionalRequest}
              onChange={handleChange}
              onBlur={handleBlur}
              className='shipping-section-card-textfield' />
          </Box>
          <div className="shipping-section-secondary-button">
            <button className="shipping-secondary-button" type='submit'>Confrim Order</button>
          </div>
          <AlertDialog open={open} handleClose={handleClose} valueform={values} />
        </form>
      </div>
    </>
  )
}

export default ShippingForm;