import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
    ];
    return (
        <>
            <div className="work-section-wrapper">
                <div className="work-section-top">
                    <p className="primary-heading-work">Work</p>
                    <h1 className="primary-heading">How It Works</h1>
                    <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                </div>
                <div className="work-section-bottom">
                    {workInfoData.map((data) => (
                        <Card sx={{ maxWidth: 345, borderRadius: 5 }} className='work-section-bottom-card' key={data.title}>
                            <CardActionArea className='work-section-bottom-containerCard'>
                                <div className='work-section-bottom-card-link'>
                                    <div className='work-section-bottom-cardImage'>
                                        <img src={data.image}
                                            alt={data.title}
                                            className='work-section-bottom-cardMediaImg' />
                                    </div>
                                    <CardContent className='work-section-bottom-cardDesc'>
                                        <Typography gutterBottom variant="h5" component="div" className='work-section-bottom-cardtitle'>{data.title}</Typography>
                                        <Typography variant="body2" color="text.secondary" className='work-section-bottom-review-textbox'>{data.text}</Typography>
                                    </CardContent>
                                </div>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Work;