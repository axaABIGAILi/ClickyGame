import React from 'react';
import characters from '../cardlist.json';

// display images
const Images = props => {
    for (let i=0; i<characters.length;i++) {
        <div className="image">
            <img src={characters[i].image} alt={characters[i].name} style="width:50%; height: 50%; border: 1px solid gray;" onClick={props.imageClick} data-clicked="false"></img>
        </div>
    }
};

export default Images;