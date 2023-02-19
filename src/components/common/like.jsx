import React from 'react'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Like = (props) => {
    if (props.liked === true){
        return (
            <FontAwesomeIcon icon="fa-solid fa-heart" onClick={props.onClick} style={{ cursor: 'pointer'}}/>
        );
    }else {
        return (
            <FontAwesomeIcon icon="fa-regular fa-heart" onClick={props.onClick} style={{ cursor: 'pointer'}}/>
        );
    }
}
 
export default Like;
