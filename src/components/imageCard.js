import React from 'react';
import characters from '../cardlist.json';

// put grid display logic in imageCard.js
function Grid() {
    for (let i=0; i<characters.length;i++) {
        <div className="image">
            <img src={characters[i].image} alt={characters[i].name} style="width:50%; height: 50%;"></img>
        </div>
    }
};

export default Grid;