import React from 'react'
import shortid from 'shortid'
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ListView from '../listView'
import TableView from '../tableView'
import CreateTodoForm from '../create-todo-form'
import Controller from '../controllers'
class Todos extends React.Component{
    state={
        todos:[
            {
                id:'1',
                text:'k ma you todo',
                description:'simple description',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:'2',
                text:'i ma main todo',
                description:'simple description',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },     
            {
                id:'3',
                text:'u ma have todo',
                description:'simple description',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
        ],
        isOpenTodoForm:false,
        searchTerm:'',
        view:'list',
        filter:'all',
    }
    toggleSelect=todoid=>{
        const todos=[...this.state.todos]
        const todo=todos.find( t => t.id == todoid)
        todo.isSelect=!todo.isSelect
        this.setState({todos})
    }
    toggleComplete= todoid => {
        const todos=[...this.state.todos]
        const todo=todos.find( t => t.id == todoid)
        todo.isComplete=!todo.isComplete
        this.setState({ todos })
    }
    toggleForm=()=>{
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }
    handleSearch=(value)=>{
        this.setState({searchTerm:value})
    }
    perFormSearch=()=>{
        return (
            this.state.todos.filter(todo=>todo.text.toLowerCase()
            .includes(this.state.searchTerm.toLowerCase()))
        )
    }
    createTodo=todo=>{
        todo.id=shortid.generate()
        todo.time=new Date()
        todo.isComplete=false
        todo.isSelect=false
        const todos=[todo, ...this.state.todos]
        this.setState({todos})
        this.toggleForm()
    }
    handlefilter=filter=>{
        this.setState({filter})
    }
    perFormFilter=todos=>{
        const {filter} =this.state
        if(filter=='completed'){
            return todos.filter(todo=>todo.isComplete)
        }else if(filter=='running'){
            return todos.filter(todo=>!todo.isComplete)
        }else{
            return todos
        }
    }
    changeView=(event)=>{
        this.setState({
          view:event.target.value
        })
    }   
    clearSelected=()=>{
        const todos = this.state.todos.filter(todo=>!todo.isSelect)
        this.setState({todos})
    }
    clearCompleted=()=>{
        const todos = this.state.todos.filter(todo=>!todo.isComplete)
        this.setState({todos})
    }   
    reset=()=>{
        this.setState({
            filter:'all',
            searchTerm:'',
            view:'list',
            isOpenTodoForm:false
        })
    }
    getView=()=>{ 
        let todos = this.perFormSearch()
        todos=this.perFormFilter(todos)
        return this.state.view=='list'?(
            <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ):(
            <TableView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        )
    }
   
     render(){
        return(
            <div>
                <h1 className='display-4 text-center mb-5'>stack todos</h1>
                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    view={this.state.view}
                    handlefilter={this.handlefilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <div>  
                   {this.getView()}
                </div>
                
                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm
                            createTodo={this.createTodo}
                        />
                    </ModalBody>
                </Modal>
           </div>
        )
     }
}
export default Todos