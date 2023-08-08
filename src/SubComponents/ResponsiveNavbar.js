import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../Assets/Logo.svg";
import { IconButton } from '@mui/material';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const ResponsiveHeader = () => {

	const { cartTotalQuantity } = useSelector((state) => state.cart);

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            right: -3,
            //   top: 13,
            // border: `2px solid #fe9e0d`,
            padding: '0 4px',
        },
    }));

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#fe9e0d',
            }
        },
    });
	const themeBlack = createTheme({
        palette: {
            secondary: {
                main: '#000000',
            }
        },
    });

	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="navbar-brand">
					<Link to={'/main'}>
						<img src={Logo} alt="" />
					</Link>
					<button className="navbar-toggle" onClick={toggleMenu}>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				</div>
				<ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
					<li><Link to={'/home'} className='navbar-links'>Home</Link></li>
					<li><Link to={'/about'} className='navbar-links'>About</Link></li>
					<li><Link to={'/menu'} className='navbar-links'>Menu</Link></li>
					<li><Link to={'/testimonials'} className='navbar-links'>Testimonials</Link></li>
					<li><Link to={'/contact'} className='navbar-links'>Contact</Link></li>
					<li>
					<Link to={'/cart'}>
                        <IconButton aria-label="cart">
                            <ThemeProvider theme={showMenu ? themeBlack : theme}>
                            <StyledBadge badgeContent={cartTotalQuantity} color="secondary" max={19} sx={{color: '#000000'}}>
                                <BsCart3 />
                            </StyledBadge>
                            </ThemeProvider>
                        </IconButton>
                    </Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default ResponsiveHeader;