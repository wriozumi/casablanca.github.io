import React from 'react';
import s from '../../WhyChooseUs.module.css';

const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    )
}


export default LeftArrow;