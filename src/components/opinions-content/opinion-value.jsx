import React from 'react';
import {ListGroup,ListGroupItem } from 'reactstrap';
const ButtonValue =(props)=>{
    if(Object.keys(props.optionName).length==0){
        return('')
    }
    return(
        <div>
                {
                    props.optionName.map(item=>(
                        <ListGroup key={item.id}>
                            <ListGroupItem>{item.name}</ListGroupItem>
                        </ListGroup>
                    ))
                }
        </div>
    )
}

export default ButtonValue;
