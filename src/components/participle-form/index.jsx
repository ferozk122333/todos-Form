import React, { Component } from 'react';
import { Button, Form, Input, FormGroup, Label, CustomInput, FormFeedback } from 'reactstrap'
class ParticipleForm extends Component {
    state = {
        name: '',
        selectedOption: '',
        errors: {}
    }
    handleChage = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const {errors,isValid}=this.validate()
        if(isValid){
            const {name,selectedOption}=this.state
            this.props.getOpinion({
                pollId:this.props.poll.id,
                name,
                selectedOption,
            })
            event.target.reset()
            this.setState({
                name: '',
                selectedOption: '',
                errors: {}
            })
        }else{
            this.setState({errors})
        }
    }
    validate=()=>{
        const {name,selectedOption} =this.state
        const errors={}
        if(!name){
            errors.name='Plese Enter Your name'
        }
        if(!selectedOption){
            errors.selectedOption='Plese Select Your Choise'
        }
        return{
            errors,
            isValid:Object.keys(errors).length==0
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className='d-flex'>
                    <h4>Options</h4>
                    <Button className='ml-auto'
                        type='button'
                        color='success'
                        onClick={this.props.toggleModal}
                    >
                        new
                        </Button>
                    <Button className='ml-2'
                        type='button'
                        color='danger'
                        onClick={()=>this.props.deletePoll(this.props.poll.id)}
                    >
                        Delete
                    </Button>
                </div>
                {
                    this.props.poll.options.map(item => (
                        <FormGroup key={item.id} className='my-2'>
                            <Label className='d-flex'>
                                <CustomInput
                                    type='radio'
                                    name='selectedOption'
                                    id={item.id}
                                    value={item.id}
                                    onChange={this.handleChage}
                                    invalid={this.state.errors.selectedOption ? true : false}
                                />
                                {item.value}
                                <Button className='ml-auto' color='info' type='button'>{item.vote}</Button>
                                <Button className='ml-2' color='info' type='button'>
                                    {this.props.poll.totalVote> 0 ? 
                                    ((100*item.vote)/this.props.poll.totalVote).toFixed(2):0}
                                </Button>
                            </Label>
                        </FormGroup>
                    ))
                }
                <FormGroup>
                    <div className='d-flex'>
                        <Input
                            placeholder='Enter name'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChage}
                            invalid={this.state.errors.name?true:false}
                        />
                        <Button
                            className='ml-2'
                            color='primary'
                            type='submit' 
                        >
                            Opinions
                        </Button>
                    </div>
                </FormGroup>
            </Form>
        );
    }
}
export default ParticipleForm;
