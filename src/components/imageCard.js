import React from 'react';
//import characters from '../cardlist.json';

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

    const imageShake = `
        /* taken from w3schools shake page & https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105 */
        img: {
            /* Start the shake animation and make the animation last for 0.5 seconds */
            animation: 'shake 0.5s',
          
            /* When the animation is finished, start again */
            animationIterationCount: 'infinite'
          }
        
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }`
    }
          
    }

    return (<div className="image" style={divStyle}>
            <img src={props.imgURL} alt={props.name} style={imgStyle} className={`image ${props.lostGame ? 'image-shake' : ''}`}onClick={ () => {props.imageClick(props.characterIndex)} } ></img>
            </div>)
    }


export default Images;