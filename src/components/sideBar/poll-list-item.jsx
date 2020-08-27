import React from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap'
const PollListItem=(props)=>{
    if((props.polls).length==0){
        return(<ListGroup><ListGroupItem  className='bg-danger text-white'>List Item Empty</ListGroupItem></ListGroup>)
    }
    return(
        <ListGroup>
        {
            props.polls.map(item=>(
                <ListGroupItem
                    key={item.id}
                    style={{cursor:"pointer"}}
                    onClick={()=>props.selectPoll(item.id)}
                >
                    {item.title.length>30?(item.title.substr(0,30)+'......'):(item.title)}
                </ListGroupItem>
            ))
        }
    </ListGroup>
    )
}

export default PollListItem;
