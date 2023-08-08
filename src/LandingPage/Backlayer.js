import React from 'react';
import Back from '../Assets/landingpage-background-image.png';
import BgFlower from '../Assets/flower-shape.png';
import BgIcon from '../Assets/icon-background.png';
import Icon from '../Assets/icon001.png';
import BgBottom from '../Assets/background-bottom-shape.png';
import upperleaf from '../Assets/upperleaf.png';
import bottomleaf from '../Assets/bottomleaf.png';
import middledots from '../Assets/middledots.png';
import halfring from '../Assets/halfring.png';
import ringline from '../Assets/ringline.png';

function Backlayer() {
    return (
        <>
            <div className="tileframe">
                <img src={Back} alt="" className='bgtile' />
                <img src={BgFlower} alt='' className='bgflower' />
                <img src={BgIcon} alt='' className='bgicon' />
                <img src={Icon} alt='' className='icon' />
                <img src={BgBottom} alt='' className='bgbottom' />
                <img src={upperleaf} alt='' className='bgupperleaf' />
                <img src={bottomleaf} alt='' className='bgbottomleaf' />
                <img src={middledots} alt='' className='bgmiddledots' />
                <img src={halfring} alt='' className='bghalfring' />
                <img src={ringline} alt='' className='bgringline' />
            </div>
        </>
    );
}

export default Backlayer;