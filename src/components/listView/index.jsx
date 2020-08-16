import React from 'react'
import PropTypes from 'prop-types'
import {ListGroup,ListGroupItem,CustomInput,Button, ToastBody} from 'reactstrap';
const ListItem =({todo,toggleComplete,toggleSelect})=>{
    return(
        <ListGroupItem className='d-flex align-items-center mt-3'>
            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=>toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h1>{todo.text}</h1>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button className='ml-auto'color={todo.isComplete?'danger':'success'}
                onClick={()=>toggleComplete(todo.id)}>
                {todo.isComplete?'Completed':'Running'}
            </Button>
        </ListGroupItem>
    )
}
ListItem.propTypes={
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
const ListView =({todos,toggleComplete,toggleSelect})=>{
    return(
        <ListGroup>
            {todos.map(todo=>(
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ListGroup>
    )
}
ListView.propTypes={
    todos:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
export default ListView