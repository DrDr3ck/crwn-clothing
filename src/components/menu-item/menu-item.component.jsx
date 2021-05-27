import React from "react";
import './menu-item.styles.scss';

const MenuItem = ({title, image, size}) => {

    console.log(image);
    return (
        <div  className={`${size} menu-item`}>
            <div className='background-image' style={{backgroundImage: `url(${image})`, backgroundColor: "lightblue"}}/> 
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now!</span>
            </div>
        </div>
    );
}

export default MenuItem;