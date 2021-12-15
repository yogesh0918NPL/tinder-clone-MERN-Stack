import React from 'react'
import './swipebuttons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
const SwipeButton = () => {
    return (
        <div className='swipe_buttons'>
            <IconButton className="swipebuttons_repeat">
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipebuttons_left">
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipebuttons_star">
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipebuttons_right">
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipebuttons_lightening">
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButton
