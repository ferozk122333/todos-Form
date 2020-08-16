import React from 'react'
import PropTypes from 'prop-types'
import {Table,CustomInput,Button} from 'reactstrap';
//list item Component
const RowItem =({todo,toggleSelect,toggleComplete})=>{
    return(
        <tr>
           <th scope="row">
                <CustomInput
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onClick={()=>toggleSelect(todo.id)}
                />
            </th>
            <th>
                {todo.time.toDateString()}
            </th>
            <th>
                {todo.text}
            </th>
            <th>
                <Button color={todo.isComplete?'danger':'success'}
                    onClick={()=>toggleComplete(todo.id)}> 
                    {todo.isComplete?'Completed':'Running'}
                </Button>
            </th>
        </tr>
    )
}
RowItem.propTypes={
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
// //Tableview Component
const TableView =({todos,toggleSelect,toggleComplete})=>{
    return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo=>(
                    <RowItem
                        key={todo.id}
                        todo={todo}
                        toggleSelect={toggleSelect}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </tbody>
        </Table>
    )
}
TableView.propTypes={
    todos:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
export default TableView