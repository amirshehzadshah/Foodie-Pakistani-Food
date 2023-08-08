import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AlertDialog({ open, handleClose, valueform, setOpen }) {

    const cart = useSelector((state) => state.cart);
    // console.log('Order:' + Object(valueform))
    const data = valueform;
    // console.log(data)
    console.log('orderAlert' + open)
    

    const taxes = cart.cartTotalAmount / 100 * 16;
    const shippingcharges = 20;

    return (
        <div>
            {console.log('Out Dialog' + open)}
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {console.log('In Dialog' + open)}
                <DialogTitle id="alert-dialog-title">
                    {"Foodie"}
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell colSpan={2}><b>Coustomer Details</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Name:</TableCell>
                                    <TableCell align="left">{data.name}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Phone Number:</TableCell>
                                    <TableCell align="left">{data.phoneNumber}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Email Address:</TableCell>
                                    <TableCell align="left">{data.emailAddress}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Shipping Address:</TableCell>
                                    <TableCell align="left">{data.shippingAddress}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Products</b></TableCell>
                                    <TableCell align="center"><b>Quantity</b></TableCell>
                                    <TableCell align="right"><b>Price</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.cartItems &&
                                    cart.cartItems.map((cartItem) => (
                                        <TableRow key={cartItem.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">{cartItem.title}</TableCell>
                                            <TableCell align="center">{cartItem.quantity}</TableCell>
                                            <TableCell align="right">${cartItem.price}</TableCell>
                                        </TableRow>
                                    ))}
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell rowSpan={5} />
                                    <TableCell component="th" scope="row" sx={{ border: 'none' }}>Subtotal:</TableCell>
                                    <TableCell align="left" sx={{ border: 'none' }}>${(cart.cartTotalAmount).toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ border: 'none' }} colSpan={2}>Include Taxes and shipping Charges</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ border: 'none' }}>Taxes:</TableCell>
                                    <TableCell align="left" sx={{ border: 'none' }}>${(taxes).toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Shipping Charges:</TableCell>
                                    <TableCell align="left">${(shippingcharges).toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row"><b>Total:</b></TableCell>
                                    <TableCell align="left"><b>${(cart.cartTotalAmount + taxes + shippingcharges).toFixed(2)}</b></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                        <Link to={'/menu'}>
                        <div className="shipping-section-secondary-button">
                            <button className="shipping-secondary-button" onClick={handleClose}>Done</button>
                        </div>
                        </Link>
                </DialogContent>
            </Dialog>
        </div>
    );
}
