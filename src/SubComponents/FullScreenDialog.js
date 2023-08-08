import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { BsCart3 } from 'react-icons/bs';
import ShippingForm from './ShippingForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    return (
        <Dialog
            fullScreen
            open={props.open}
            onClose={props.handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'fixed', color : '#fe9e0d', background : 'white' }}>
                <Toolbar>
                    <Typography sx={{ ml: 2, flex: 1, display: 'flex', justifyContent: 'center' , alignItems: 'center' }} variant="h6" component="div">
                    <h2><BsCart3 /> &nbsp; Product Order Form</h2>
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={props.handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    {/* <Button autoFocus color="inherit" onClick={props.handleClose}>Pay</Button> */}
                </Toolbar>
            </AppBar>
            <ShippingForm />
        </Dialog>
    );
}