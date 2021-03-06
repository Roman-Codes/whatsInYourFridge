import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

// renders picked items to the page
function PickedItem(props){
    const {ingredient} = props;
    return(
        <li className="flex spaceBetween alignCenter" key="ingredient">
            {ingredient}
            <button className="delete" onClick={()=> props.deleteItem(ingredient)}><DeleteIcon aria-label="delete"/></button>
        </li>
    )
}

export default PickedItem;