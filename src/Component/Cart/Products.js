import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent } from '@mui/material';
import Rating from '../../SubComponents/Rating';
import { Link } from 'react-router-dom';

function Products({ id, title, price, image, rating }) {

    // console.log('prop:' + image)

    return (
        <>
            <Card sx={{ maxWidth: 345, borderRadius: 5 }} className='card'>
                <CardActionArea className='containerCard'>
                    <Link to={'/singleproduct/' + id} className='card-link'>
                        <div className='cardImage'>
                            <img src={image}
                                alt={title}
                                className='cardMediaImg' />
                        </div>
                        <CardContent className='cardDesc'>
                            <Typography gutterBottom variant="h5" component="div" className='cardtitle'>{title}</Typography>
                            <Typography variant="body2">
                                <Rating rating={rating.rate} />
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='review-textbox'>$ {price}</Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </>
    );
}

export default Products;