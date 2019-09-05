import React from 'react';
import characters from '../cardlist.json';

// display images
const Images = props => {
    for (let i=0; i<characters.length;i++) {
        <div className="image" style="width: 20%; height: 20%; margin: 0 5px 5px 0;">
            <img src={characters[i].image} alt={characters[i].name} style="width:100%; height: 100%; border: 2px solid gray;" onClick={props.imageClick}></img>
        </div>
    }
};

export default Images;