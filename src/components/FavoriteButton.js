import React from 'react';

export default function FavoriteButton({children, onClickHandler, icon}){
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <img className="heart-icon" src="icon"/>
            {children}
        </button>
    )
}