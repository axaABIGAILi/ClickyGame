import React from 'react';
import characters from '../cardlist.json';

// display images
const Images = props => {
    // store image and div styling in an object for easy JSX reference
    const divStyle = {
        width: '20%',
        height: '20%',
        float: 'left',
        margin: '0 5px 5px 0'
    }
    const imgStyle = {
        width: '100%',
        height: '100%',
        border: '1px solid gray'
    }

    let charArray = Object.keys(characters);
    
    for (let i=0; i < charArray.length;i++) {

        return (<div className="image" style={divStyle}>
            <img src={characters[i].image} alt={characters[i].name} style={imgStyle} data-clicked={false} onClick={props.imageClick}></img>
            </div>)
    }
}

export default Images;